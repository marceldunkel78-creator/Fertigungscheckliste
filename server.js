// Simple local server to search for XML files by order number and serve XML file contents
// Usage: node server.js
// Optionally set SEARCH_DIR environment variable to point to the folder to search

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve the static site from the current directory so you can open http://localhost:3000/
app.use(express.static(path.resolve(__dirname)));

const SEARCH_DIR = process.env.SEARCH_DIR ? path.resolve(process.env.SEARCH_DIR) : path.resolve(__dirname);
const PORT = process.env.PORT || 3000;

// Recursively find .xml files whose filename contains the search term (case-insensitive)
function findXmlFilesContaining(dir, term){
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items){
    try{
      const full = path.join(dir, it.name);
      if (it.isDirectory()){
        results.push(...findXmlFilesContaining(full, term));
      } else if (it.isFile()){
        if (it.name.toLowerCase().endsWith('.xml') && it.name.toLowerCase().includes(term.toLowerCase())){
          // return path relative to SEARCH_DIR
          results.push(path.relative(SEARCH_DIR, full).replace(/\\/g, '/'));
        }
      }
    }catch(e){ /* ignore read errors for particular items */ }
  }
  return results;
}

app.get('/find', (req, res) => {
  const order = (req.query.order || '').trim();
  if (!order) return res.status(400).json({ error: 'order required' });
  try{
    const files = findXmlFilesContaining(SEARCH_DIR, order);
    // return a list of relative file paths
    return res.json({ files });
  }catch(e){
    console.error('find error', e);
    return res.status(500).json({ error: 'server error' });
  }
});

// Serve a file content by relative name
app.get('/xmlfile', (req, res) => {
  const name = req.query.name || '';
  if (!name) return res.status(400).json({ error: 'name required' });
  const full = path.join(SEARCH_DIR, name);
  // Prevent path traversal
  if (!full.startsWith(SEARCH_DIR)) return res.status(403).json({ error: 'forbidden' });
  if (!fs.existsSync(full)) return res.status(404).json({ error: 'not found' });
  res.setHeader('Content-Type', 'application/xml');
  res.send(fs.readFileSync(full, 'utf8'));
});

// Return file existence and size (in bytes) for a relative path under SEARCH_DIR
app.get('/filestats', (req, res) => {
  const name = req.query.name || '';
  if (!name) return res.status(400).json({ error: 'name required' });
  const full = path.join(SEARCH_DIR, name);
  if (!full.startsWith(SEARCH_DIR)) return res.status(403).json({ error: 'forbidden' });
  try{
    if (!fs.existsSync(full)) return res.json({ exists: false, size: 0 });
    const st = fs.statSync(full);
    return res.json({ exists: true, size: st.size });
  }catch(e){
    console.error('filestats error', e);
    return res.status(500).json({ error: 'failed' });
  }
});

// Accept a posted XML and write it under SEARCH_DIR at the provided relative path
app.post('/savexml', (req, res) => {
  const name = (req.body && req.body.name) || '';
  const content = (req.body && req.body.content);
  if (!name) return res.status(400).json({ error: 'name required' });
  if (typeof content !== 'string') return res.status(400).json({ error: 'content required' });
  const full = path.join(SEARCH_DIR, name);
  if (!full.startsWith(SEARCH_DIR)) return res.status(403).json({ error: 'forbidden' });
  try{
    const dir = path.dirname(full);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(full, content, 'utf8');
    return res.json({ saved: path.relative(SEARCH_DIR, full).replace(/\\/g, '/') });
  }catch(e){
    console.error('savexml error', e);
    return res.status(500).json({ error: 'failed to save' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`Searching files under: ${SEARCH_DIR}`);
});
