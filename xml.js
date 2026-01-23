window.addEventListener("DOMContentLoaded", (event) => {
  const lxml = document.getElementById("LoadXML");
  const sxml = document.getElementById("SaveXML");
  if (lxml) {
    lxml.addEventListener("click", function () {
      selectFile("XML-Input");
    });
  }
  if (sxml) {
    sxml.addEventListener("click", createXML2);
  }
});

// laden und einlesen  des XML über Load Menu
function selectFile(id) {
  document.getElementById(id).click();
  document.getElementById("NavBar").style.display = "none";
  document.getElementById("DBC").style.display = "none";
}
// Create a Custom device containing only procurement-related fields
function addCustomProcurement() {
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("CustomProcurement");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Device CustomProcurement">
          <div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">Custom Procurement ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              Hersteller:
              <input type="text" id="brand_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Modell:
              <input type="text" id="modell_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Seriennummer:
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Kommentar:
              <input type="text" id="comment_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <table class="table">
              <tr>
                <th><input type="text" id="headercolumn1_${deviceNumber}" class="Device${deviceNumber}" /></th>
                <th><input type="text" id="headercolumn2_${deviceNumber}" class="Device${deviceNumber}" /></th>
                <th><input type="text" id="headercolumn3_${deviceNumber}" class="Device${deviceNumber}" /></th>
                <th><input type="text" id="headercolumn4_${deviceNumber}" class="Device${deviceNumber}" /></th>
              </tr>
              <tr>
                <td><input type="text" id="headerrow1_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row1col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row1col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row1col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
                
              </tr>
              <tr>
                <td><input type="text" id="headerrow2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row2col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row2col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row2col4_${deviceNumber}" class="Device${deviceNumber}" /></td>               
              </tr>
              <tr>
                <td><input type="text" id="headerrow3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row3col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row3col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row3col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="headerrow4_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row4col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row4col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row4col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="headerrow5_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row5col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row5col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row5col4_${deviceNumber}" class="Device${deviceNumber}" /></td> 
              </tr>
              <tr>
                <td><input type="text" id="headerrow6_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row6col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row6col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row6col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
            </table>
          </div>
        </div>`;
  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  document.getElementById(`modell_${deviceNumber}`).addEventListener("change", function () { updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`); });
  return deviceNumber;
}

// Create a Custom device containing only manufacturing-related fields
function addCustomManufacturing() {
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("CustomManufacturing");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Device CustomManufacturing">
          <div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">Custom Manufacturing ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              Hersteller:
              <input type="text" id="brand_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Modell:
              <input type="text" id="modell_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Seriennummer:
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Kommentar:
              <input type="text" id="comment_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
          </div>
        </div>`;
  document.getElementById("DeviceList").appendChild(element);
  addManufacturingFields(deviceNumber);
  document.getElementById(`modell_${deviceNumber}`).addEventListener("change", function () { updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`); });
  return deviceNumber;
}
function readXML() {
  const file = document.getElementById("XML-Input").files[0];
  

  if (file) {
    const reader = new FileReader();
    // reader.readAsText(file, "UTF-8");
    reader.onload = function () {
      //document.getElementById("Testfield").innerHTML = reader.result;

      parseXML(reader.result);
      try{ if (typeof convertImgToggles === 'function') convertImgToggles(); }catch(e){}
    };
    reader.onerror = function () {
      alert("Ooops, Fehler beim Lesen");
    };
    reader.readAsText(file, "UTF-8");
  }
}

// Print helper: opens a selection modal so user can choose which devices to print.
function printToPDF(){
  try{
    const devices = Array.from(document.querySelectorAll('.Devices'));
    // If there are no devices, just open the print dialog for the whole page
    if (!devices || devices.length === 0){ window.print(); return; }
    // If only one device, still offer selection dialog to allow explicit choose
    showPrintSelectionModal(devices);
  }catch(e){ console.warn('printToPDF error', e); }
}

// Build and display a modal listing all devices with checkboxes to select which to print.
function showPrintSelectionModal(devices){
  // remove existing modal if present
  const existing = document.getElementById('printSelectionModal');
  if (existing) existing.remove();

  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'printSelectionModal';
  modalOverlay.className = 'PrintModalOverlay';

  const modal = document.createElement('div');
  modal.className = 'PrintModal';
  modal.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div style="font-weight:700">Print selected devices</div>
      <div style="font-size:0.9em;color:#ddd">Select which devices you want exported to PDF</div>
    </div>
    <div style="margin-top:8px;display:flex;gap:8px;justify-content:flex-end">
      <button id="print_select_all" class="small">Select all</button>
      <button id="print_clear_all" class="small">Clear</button>
    </div>
    <div class="PrintModalList" style="margin-top:10px;">
      <div class="list" id="print_device_list"></div>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button id="print_cancel" class="small">Cancel</button>
      <button id="print_ok" class="small primary">Print selected</button>
    </div>
  `;

  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  const listEl = modal.querySelector('#print_device_list');
  devices.forEach(dev => {
    const id = dev.id && dev.id.replace && dev.id.match(/Device(\d+)/);
    const devnum = id ? id[1] : (Math.random()*100000|0);
    // find a human readable name from header or Name<n>
    let name = `Device ${devnum}`;
    try{
      const nameEl = dev.querySelector(`#Name${devnum}`) || dev.querySelector('.Devicename');
      if (nameEl){ name = (nameEl.textContent || nameEl.value || nameEl.innerText || '').trim() || name; }
    }catch(e){}

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.justifyContent = 'space-between';
    row.style.padding = '6px 4px';
    row.style.borderBottom = '1px solid rgba(255,255,255,0.04)';
    row.innerHTML = `<label style="display:flex;align-items:center;gap:8px;"><input type=\"checkbox\" data-deviceid=\"${devnum}\" class=\"print-device-checkbox\" checked> ${escapeHtml(name)}</label>`;
    listEl.appendChild(row);
  });

  // wire buttons
  modal.querySelector('#print_cancel').addEventListener('click', ()=>{ modalOverlay.remove(); });
  modal.querySelector('#print_select_all').addEventListener('click', ()=>{ modalOverlay.querySelectorAll('.print-device-checkbox').forEach(c=>c.checked=true); });
  modal.querySelector('#print_clear_all').addEventListener('click', ()=>{ modalOverlay.querySelectorAll('.print-device-checkbox').forEach(c=>c.checked=false); });
  modal.querySelector('#print_ok').addEventListener('click', ()=>{
    const checked = Array.from(modalOverlay.querySelectorAll('.print-device-checkbox')).filter(c=>c.checked).map(c=>c.getAttribute('data-deviceid'));
    modalOverlay.remove();
    doPrintForDevices(checked);
  });

  // close on overlay click (but not when clicking modal itself)
  modalOverlay.addEventListener('click', (e)=>{ if (e.target === modalOverlay) modalOverlay.remove(); });
  // close on Escape
  const escHandler = (e)=>{ if (e.key === 'Escape'){ modalOverlay.remove(); document.removeEventListener('keydown', escHandler); } };
  document.addEventListener('keydown', escHandler);
}

// Escape any HTML in device names for safe innerHTML use
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

// Print only the devices whose numeric ids are in the `ids` array. If ids is empty -> print all.
function doPrintForDevices(ids){
  try{
    const allDevices = Array.from(document.querySelectorAll('.Devices'));
    if (!ids || ids.length === 0){ window.print(); return; }
    // hide non-selected devices
    const toHide = allDevices.filter(dev => {
      const m = dev.id && dev.id.match(/Device(\d+)/);
      const num = m ? m[1] : null;
      return !(num && ids.includes(String(num)));
    });
    const previous = [];
    toHide.forEach(el => { previous.push({el, display: el.style.display}); el.style.display = 'none'; });
    // wait a tick to ensure reflow
    setTimeout(()=>{
      try{ window.print(); }catch(e){ console.warn('print error', e); }
      // restore
      setTimeout(()=>{ previous.forEach(p=>{ try{ p.el.style.display = p.display || ''; }catch(e){} }); }, 300);
    }, 50);
  }catch(e){ console.warn('doPrintForDevices error', e); }
}

// Create an acceptance protocol (Abnahmeprotokoll) and open it in a printable window.
function createAcceptanceProtocol(){
  try{
    const order = document.getElementById('order')?.value || '';
    const customer = document.getElementById('customer')?.value || '';
    const delivery = document.getElementById('system_delivery_dt')?.value || '';

    // collect devices
    const devices = Array.from(document.querySelectorAll('.Devices'));
    const rows = devices.map(dev => {
      const m = dev.id && dev.id.match(/Device(\d+)/);
      const id = m ? m[1] : '';
      // prefer modell_<n>, package_<n>, Name<n>
      const modelEl = document.getElementById(`modell_${id}`) || document.getElementById(`package_${id}`) || document.getElementById(`Name${id}`) || dev.querySelector('.Devicename');
      let name = '';
      if (modelEl){
        if (modelEl.tagName === 'SELECT') name = modelEl.value || modelEl.options[modelEl.selectedIndex]?.text || '';
        else name = modelEl.value || modelEl.textContent || modelEl.innerText || '';
      }
      name = (name || `Device ${id}`).toString();
      return { id, name };
    });

    // build HTML for new window
    const w = window.open('', '_blank');
    if (!w) { alert('Please allow popups to generate the acceptance protocol.'); return; }

  const title = `Acceptance Protocol - ${order}`;
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;

    const style = `
      body{font-family:Arial,Helvetica,sans-serif;color:#111;margin:20px}
      h1{font-size:20px;margin-bottom:4px}
      .meta{margin-bottom:12px}
      table{width:100%;border-collapse:collapse;margin-bottom:10px}
      th,td{border:1px solid #444;padding:6px;text-align:left;font-size:14px}
      .small{font-size:12px}
      .sig{margin-top:28px}
      .sig .line{border-top:1px solid #000;width:40%;display:inline-block;margin-right:6%;height:2em}
      .comment{width:100%;height:4em;border:1px solid #444;padding:6px}
      @media print{@page{size:A4; margin:20mm}}`;

    // device table rows
    let deviceRowsHtml = '';
    for (const r of rows){
      deviceRowsHtml += `<tr><td style="width:55%">${escapeHtml(r.name)}</td><td style="width:10%;text-align:center"><input type="checkbox" id="delivered_${r.id}"></td><td style="width:10%;text-align:center"><input type="checkbox" id="ok_${r.id}"></td><td><input type="text" id="comment_${r.id}" style="width:100%"></td></tr>`;
    }

    const html = `
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(title)}</title>
        <style>${style}</style>
      </head>
      <body>
        <h1>Acceptance Protocol</h1>
        <div class="meta small">
          <div><strong>Order No.:</strong> ${escapeHtml(order)}</div>
          <div><strong>Customer:</strong> ${escapeHtml(customer)}</div>
          <div><strong>Delivery Date:</strong> ${escapeHtml(delivery)}</div>
          <div><strong>Created on:</strong> ${escapeHtml(today)}</div>
        </div>

        <table>
          <thead>
            <tr><th>Device</th><th style="text-align:center">delivered</th><th style="text-align:center">working</th><th>Comment</th></tr>
          </thead>
          <tbody>
            ${deviceRowsHtml}
          </tbody>
        </table>

        <div style="margin-top:8px">General comments:</div>
        <div><textarea id="general_comment" class="comment"></textarea></div>

        <div class="sig">
          <div style="margin-top:18px">Place: <input type="text" id="place" style="width:200px"> &nbsp; Date: <input type="date" id="sigdate" value="${today}"></div>
          <div style="margin-top:24px">
            <div style="display:inline-block;vertical-align:top;width:45%">
              <div class="line"></div>
              <div>Employee signature</div>
              <div class="small">(Name / Date / Place)</div>
            </div>
            <div style="display:inline-block;vertical-align:top;width:45%">
              <div class="line"></div>
              <div>Customer signature</div>
              <div class="small">(Name / Date / Place)</div>
            </div>
          </div>
        </div>

        <div style="margin-top:18px">
          <button id="doPrint">Print</button>
        </div>

        <script>
          // Make print button print the document
          document.getElementById('doPrint').addEventListener('click', function(){ window.print(); });
        </script>
      </body>
      </html>
    `;

    w.document.open();
    w.document.write(html);
    w.document.close();
  }catch(e){ console.error('createAcceptanceProtocol error', e); alert('Fehler beim Erstellen des Abnahmeprotokolls'); }
}


// Read an XML File object directly (used for drag/drop)
function readXMLFromFile(file){
  if (!file) return;
  if (!file.name || !file.name.toLowerCase().endsWith('.xml')){
    alert('Please drop an XML file');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(){
    try{ parseXML(reader.result); if (typeof convertImgToggles === 'function') convertImgToggles(); }
    catch(e){ console.error('Error parsing dropped XML', e); alert('Error parsing XML file'); }
  };
  reader.onerror = function(){ alert('Error reading file'); };
  reader.readAsText(file, 'UTF-8');
}

// Read an XML and append only its devices to the current checklist (do not replace basics)
function readXMLAppend() {
  const file = document.getElementById("XML-Append-Input").files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    try{
      appendDevicesFromXmlText(reader.result);
      try{ if (typeof convertImgToggles === 'function') convertImgToggles(); }catch(e){}
    }catch(e){ console.error('Error appending devices from XML', e); alert('Error appending devices from XML'); }
  };
  reader.onerror = function (){ alert('Error reading file'); };
  reader.readAsText(file, 'UTF-8');
}

// Search for an order number on the local server and load the matched XML file into the checklist
async function searchOrderAndLoad(){
  try{
    const order = (document.getElementById('OrderSearchInput') && document.getElementById('OrderSearchInput').value || '').trim();
    if (!order){ alert('Bitte Auftragsnummer eingeben'); return; }
    // call server endpoint /find?order=<order>
    const resp = await fetch(`/find?order=${encodeURIComponent(order)}`);
    if (!resp.ok){ throw new Error(`Server returned ${resp.status}`); }
    const data = await resp.json();
    if (!data.files || data.files.length === 0){ alert('Keine passenden XML-Dateien auf dem Server gefunden.'); return; }
    let chosen = data.files[0];
    if (data.files.length > 1){
      // show a modal selection UI and wait for user choice
      try{
        const sel = await showFileSelectionModal(data.files);
        if (!sel) return; // user cancelled
        chosen = sel;
      }catch(e){ console.warn('selection modal error', e); return; }
    }
    // fetch file stats first (size) and then the contents
    try{
      const statResp = await fetch(`/filestats?name=${encodeURIComponent(chosen)}`);
      if (statResp && statResp.ok){ const j = await statResp.json(); try{ window.lastLoadedServerFileSize = Number(j.size) || 0; }catch(e){} }
    }catch(e){ /* ignore */ }
    // fetch the file contents
    const fileResp = await fetch(`/xmlfile?name=${encodeURIComponent(chosen)}`);
    if (!fileResp.ok) throw new Error(`Failed to fetch file: ${fileResp.status}`);
    const text = await fileResp.text();
    parseXML(text);
    // remember where this XML came from (relative path returned by the server)
    try{ window.lastLoadedServerFile = chosen; }catch(e){}
    try{ if (typeof convertImgToggles === 'function') convertImgToggles(); }catch(e){}
  }catch(e){ console.error('searchOrderAndLoad error', e); alert('Fehler beim Suchen/Laden: ' + (e && e.message ? e.message : e)); }
}

// Show a modal with a selectable list of files. Returns a Promise that resolves to the chosen filename or null if cancelled.
function showFileSelectionModal(files){
  return new Promise((resolve)=>{
    // remove existing if any
    const existing = document.getElementById('fileSelectModal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'fileSelectModal';
    overlay.className = 'PrintModalOverlay';

    const modal = document.createElement('div');
    modal.className = 'PrintModal';
    modal.style.maxHeight = '70vh';
    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-weight:700">Gefundene Dateien</div>
        <div style="font-size:0.9em;color:#ddd">Wähle eine Datei zum Laden</div>
      </div>
      <div style="margin-top:8px;">
        <div id="file_select_list" class="PrintModalList" style="max-height:40vh;overflow:auto;padding:6px;border-top:1px solid rgba(255,255,255,0.04);">
        </div>
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
        <button id="file_select_cancel" class="small">Abbrechen</button>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const listEl = modal.querySelector('#file_select_list');
    files.forEach((f, idx) => {
      const row = document.createElement('div');
      row.style.padding = '8px';
      row.style.borderBottom = '1px solid rgba(255,255,255,0.04)';
      row.style.cursor = 'pointer';
      row.style.display = 'flex';
      row.style.justifyContent = 'space-between';
      // display only the filename (basename), keep full relative path for selection
      const displayName = String(f).split('/').pop().split('\\').pop();
      row.innerHTML = `<span title="${escapeHtml(f)}" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:70%">${escapeHtml(displayName)}</span><span style="color:#ddd">${idx+1}</span>`;
      row.addEventListener('click', ()=>{
        cleanup();
        resolve(f); // resolve with full relative path
      });
      listEl.appendChild(row);
    });

    const cancelBtn = modal.querySelector('#file_select_cancel');
    cancelBtn.addEventListener('click', ()=>{ cleanup(); resolve(null); });

    // allow clicking overlay to cancel
    overlay.addEventListener('click', (e)=>{ if (e.target === overlay){ cleanup(); resolve(null); } });

    // cleanup helper
    function cleanup(){ try{ overlay.remove(); }catch(e){} }
  });
}

// --- Help modal: load help.txt and create sticky button bottom-left ---
function createHelpControl(){
  try{
    // avoid duplicates
    if (document.getElementById('HelpSticky')) return;
    const btn = document.createElement('div');
    btn.id = 'HelpSticky';
    btn.className = 'HelpSticky no-print';
    btn.setAttribute('title','Help (click)');
    btn.innerHTML = '?';
    document.body.appendChild(btn);
    btn.addEventListener('click', async (e)=>{
      e.stopPropagation();
      await openHelpModal();
    });
    // clicking anywhere else closes the help modal (if open)
    document.addEventListener('click', function(){
      const existing = document.getElementById('helpModalOverlay');
      if (existing) existing.remove();
    });
  }catch(e){ console.warn('createHelpControl error', e); }
}

async function openHelpModal(){
  try{
    // remove existing overlay if any
    const existing = document.getElementById('helpModalOverlay'); if (existing) existing.remove();
    const overlay = document.createElement('div'); overlay.id = 'helpModalOverlay'; overlay.className = 'PrintModalOverlay';
    const modal = document.createElement('div'); modal.className = 'PrintModal HelpModal';
    modal.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-weight:700">Help</div><div style="font-size:0.9em;color:#ddd;cursor:pointer" id="helpClose">Close</div></div><div id="helpContent" class="help-content">Loading help...</div>`;
    overlay.appendChild(modal); document.body.appendChild(overlay);
    // clicking overlay outside modal closes
    overlay.addEventListener('click', (ev)=>{ if (ev.target === overlay){ overlay.remove(); } });
    modal.querySelector('#helpClose').addEventListener('click', ()=>{ overlay.remove(); });
    // fetch help.txt (root-relative)
    try{
      const resp = await fetch('help.txt');
      if (!resp.ok) throw new Error('help.txt not found');
      const txt = await resp.text();
      const content = document.getElementById('helpContent'); if (content) content.textContent = txt;
    }catch(e){ const content = document.getElementById('helpContent'); if (content) content.textContent = 'Could not load help.txt'; }
  }catch(e){ console.error('openHelpModal error', e); }
}

// initialize help control on DOM ready
document.addEventListener('DOMContentLoaded', function(){ try{ createHelpControl(); }catch(e){} });

// Parse the provided XML text and append any <devices> child nodes as new devices.
// Device numeric IDs are regenerated so they continue the current numbering.
function appendDevicesFromXmlText(filetext){
  const parser = new DOMParser();
  const xmlDOC = parser.parseFromString(filetext, "text/xml");
  if (!xmlDOC || !xmlDOC.getElementsByTagName("devices")[0]) return;

  for (let m = 0; m < xmlDOC.getElementsByTagName("devices")[0].childNodes.length; m++) {
    let node = xmlDOC.getElementsByTagName("devices")[0].childNodes[m];
    if (!node || node.nodeName == "#text") continue;
    let idname = node.getAttribute("id");
    switch (idname) {
      case "Devices Camera":{
        let deviceNumber = addCamera();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName;
          let parts = subnodename.split("_");
          let base = parts.slice(0, -1).join("_");
          let newid = `${base}_${deviceNumber}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){
            let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || '';
            if (selectedElement.tagName == "SELECT"){
              let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);
            }
            setElementValueFromXml(selectedElement, wert);
          }
        }
        if (document.getElementById(`modell_${deviceNumber}`).innerHTML != "") updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
        break;
      }
      case "Devices Confocal":{
        let deviceNumber1 = addConfocal();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber1); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName;
          let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber1}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber1}`).innerHTML != "") updateHeader(`Name${deviceNumber1}`, `modell_${deviceNumber1}`);
        break;
      }
      case "Devices VS-LMS":{
        let deviceNumber2 = addVSLMS();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber2); }catch(e){}
        try{ if (typeof addVSLMSSpecialChecks === 'function') addVSLMSSpecialChecks(deviceNumber2); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber2}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        break;
      }
      case "Devices PC":{
        let deviceNumber3 = addPC();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber3); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber3}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        break;
      }
      case "Devices VV":{
        let deviceNumber4 = addVV();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber4); }catch(e){}
        try{ if (typeof addVVSpecialChecks === 'function') addVVSpecialChecks(deviceNumber4); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber4}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`package_${deviceNumber4}`).innerHTML != "") updateHeader(`Name${deviceNumber4}`, `package_${deviceNumber4}`);
        break;
      }
      case "Devices Mic":{
        let deviceNumber5 = addMic();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber5); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber5}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber5}`).innerHTML != "") updateHeader(`Name${deviceNumber5}`, `modell_${deviceNumber5}`);
        break;
      }
      case "Devices ViRTEx":{
        let deviceNumber6 = addViRTEx();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber6); }catch(e){}
        try{ if (typeof addViRTExSpecialChecks === 'function') addViRTExSpecialChecks(deviceNumber6); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber6}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber6}`).innerHTML != "") updateHeader(`Name${deviceNumber6}`, `modell_${deviceNumber6}`);
        break;
      }
      case "Devices FRAP":{
        let deviceNumber7 = addFRAP();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber7); }catch(e){}
        try{ if (typeof addFRAPSpecialChecks === 'function') addFRAPSpecialChecks(deviceNumber7); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber7}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber7}`).innerHTML != "") updateHeader(`Name${deviceNumber7}`, `modell_${deviceNumber7}`);
        break;
      }
      case "Devices Stage":{
        let deviceNumber8 = addStage();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber8); }catch(e){}
        try{ if (typeof addStageSpecialChecks === 'function') addStageSpecialChecks(deviceNumber8); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber8}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber8}`).innerHTML != "") updateHeader(`Name${deviceNumber8}`, `modell_${deviceNumber8}`);
        break;
      }
      case "Devices LED":{
        let deviceNumber9 = addLED();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber9); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber9}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber9}`).innerHTML != "") updateHeader(`Name${deviceNumber9}`, `modell_${deviceNumber9}`);
        break;
      }
      case "Devices Custom":{
        let deviceNumber10 = addCustom();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber10); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber10}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber10}`) && document.getElementById(`modell_${deviceNumber10}`).innerHTML != "") updateHeader(`Name${deviceNumber10}`, `modell_${deviceNumber10}`);
        break;
      }
      case "Devices CustomProcurement":
      case "Devices Custom Procurement":{
        let deviceNumberCP = addCustomProcurement();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumberCP); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumberCP}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumberCP}`) && document.getElementById(`modell_${deviceNumberCP}`).innerHTML != "") updateHeader(`Name${deviceNumberCP}`, `modell_${deviceNumberCP}`);
        break;
      }
      case "Devices CustomManufacturing":
      case "Devices Custom Manufacturing":{
        let deviceNumberCM = addCustomManufacturing();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumberCM); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumberCM}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumberCM}`) && document.getElementById(`modell_${deviceNumberCM}`).innerHTML != "") updateHeader(`Name${deviceNumberCM}`, `modell_${deviceNumberCM}`);
        break;
      }
      case "Devices MMLaser":{
        let deviceNumber11 = addMMLaser();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber11); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber11}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber11}`).innerHTML != "") updateHeader(`Name${deviceNumber11}`, `modell_${deviceNumber11}`);
        break;
      }
      case "Devices Orbital":{
        let deviceNumber12 = addOrbital();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber12); }catch(e){}
        try{ if (typeof addOrbitalSpecialChecks === 'function') addOrbitalSpecialChecks(deviceNumber12); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber12}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} setElementValueFromXml(selectedElement, wert); }
        }
        if (document.getElementById(`modell_${deviceNumber12}`).innerHTML != "") updateHeader(`Name${deviceNumber12}`, `modell_${deviceNumber12}`);
        break;
      }
      case "Devices Inkubation":{
        let deviceNumber13 = addInkubation();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber13); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber13}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} if (wert == "false") selectedElement.checked = false; else if (wert == "true") selectedElement.checked = true; else selectedElement.value = wert; }
        }
        if (document.getElementById(`modell_${deviceNumber13}`).innerHTML != "") updateHeader(`Name${deviceNumber13}`, `modell_${deviceNumber13}`);
        break;
      }
      case "Devices DualCam":{
        let deviceNumber14 = addDualCam();
        try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber14); }catch(e){}
        for (let f = 0; f < node.childNodes.length; f++){
          let subnode = node.childNodes[f]; if (!subnode || subnode.nodeName=="#text") continue;
          let subnodename = subnode.nodeName; let parts = subnodename.split("_"); let base = parts.slice(0, -1).join("_"); let newid = `${base}_${deviceNumber14}`;
          let selectedElement = document.getElementById(newid);
          if (selectedElement !== null){ let wert = subnode.childNodes[0] && subnode.childNodes[0].nodeValue || ''; if (selectedElement.tagName == "SELECT"){ let opt = document.createElement("Option"); opt.setAttribute("value", wert); opt.innerHTML = wert; selectedElement.appendChild(opt);} if (wert == "false") selectedElement.checked = false; else if (wert == "true") selectedElement.checked = true; else selectedElement.value = wert; }
        }
        if (document.getElementById(`modell_${deviceNumber14}`).innerHTML != "") updateHeader(`Name${deviceNumber14}`, `modell_${deviceNumber14}`);
        break;
      }
      default:
        // unknown device type: skip
        break;
    }
  }

  try{ updateAllDeviceHeaders(); }catch(e){}
  try{ populateMissingOrders(); }catch(e){}
}

// Dropzone removed: drag/drop handled via file inputs now.

// Normalize various date/time strings to YYYY-MM-DD suitable for <input type="date">.
function normalizeDateForInput(val){
  if (!val) return '';
  // If already contains an ISO date part YYYY-MM-DD, return that
  const m = val.match(/(\d{4}-\d{2}-\d{2})/);
  if (m) return m[1];
  // Try Date parsing as a fallback
  const d = new Date(val);
  if (!isNaN(d.getTime())){
    const y = d.getFullYear();
    const mm = String(d.getMonth()+1).padStart(2,'0');
    const dd = String(d.getDate()).padStart(2,'0');
    return `${y}-${mm}-${dd}`;
  }
  // otherwise return original value
  return val;
}

// Set a DOM element's value/checked state from a string value read from XML.
function setElementValueFromXml(el, val){
  if (!el) return;
  // normalize incoming value: convert null/undefined to empty string and trim
  try{ val = (val === null || typeof val === 'undefined') ? '' : String(val); }catch(e){ val = '' }
  const trimmed = (val && String(val).trim()) || '';
  // if the node contained only whitespace (indentation/newlines), treat as empty
  if (trimmed === '') val = '';
  if (el.tagName === 'SELECT'){
    // ensure option exists
    try{
      // avoid creating/selecting empty whitespace-only options
      const useVal = (String(val).trim() === '') ? '' : val;
      const exists = useVal === '' ? true : Array.from(el.options).some(o=>o.value===useVal);
      if (useVal !== '' && !exists){
        const opt = document.createElement('option'); opt.value = useVal; opt.text = useVal; el.appendChild(opt);
      }
      el.value = useVal;
    }catch(e){}
    return;
  }
  const type = el.getAttribute('type') || el.type || '';
  if (type === 'checkbox'){
    el.checked = (String(val) === 'true');
    return;
  }
  if (type === 'date'){
    el.value = normalizeDateForInput(val);
    return;
  }
  // if this is a production_status hidden field, also try to check the corresponding radio
  try{
    if (el.id && el.id.startsWith('production_status_')){
      el.value = val;
      // find radio with name production_status_radio_<n> and value val
      const parts = el.id.split('_');
      const devnum = parts[parts.length-1];
      const radio = document.querySelector(`input[name="production_status_radio_${devnum}"][value="${val}"]`);
      if (radio) radio.checked = true;
      return;
    }
  }catch(e){/* ignore */}
  // default: set value (empty string if whitespace-only)
  el.value = val;
}

function parseXML(filetext) {
  const parser = new DOMParser();
  xmlDOC = parser.parseFromString(filetext, "text/xml");
  // remove old devices
  for (
    let i = 0;
    i < document.getElementsByClassName("Devices").length;
    i + 1
  ) {
    document.getElementsByClassName("Devices")[i].remove();
  }

  // show basics
  document.getElementById("Basics").style.display = "block";
  //populate basics
  for (
    let u = 0;
    u < xmlDOC.getElementsByTagName("basics")[0].childNodes.length;
    u++
  ) {
    let node = xmlDOC.getElementsByTagName("basics")[0].childNodes[u];
    let nodename1 = node.nodeName;
    // console.log(nodename1);
    try {
      if (node.nodeName != "#text" ) {
        let selectedElement1 = document.getElementById(`${nodename1}`);
        let wert1 = node.childNodes[0].nodeValue;
        // special handling for order_status: set hidden input and check corresponding radio
        if (nodename1 === 'order_status'){
          const hidden = document.getElementById('order_status');
          if (hidden) hidden.value = wert1;
          // try to find radio with this value
          try{
            const radio = document.querySelector(`input[name="order_status_radio"][value="${wert1}"]`);
            if (radio) radio.checked = true;
          }catch(e){}
          continue;
        }
        if (selectedElement1){
          setElementValueFromXml(selectedElement1, wert1);
        }
      }
    }
    catch{}
  }

  // show the devices html according to xml content
  //console.log(xmlDOC.getElementsByTagName("devices")[0].childNodes.length);
  for (
    let m = 0;
    m < xmlDOC.getElementsByTagName("devices")[0].childNodes.length;
    m++
  ) {
    //console.log(xmlDOC.getElementsByTagName("devices")[0].childNodes[m].nodeName);
    let node = xmlDOC.getElementsByTagName("devices")[0].childNodes[m];

    if (node.nodeName != "#text") {
      let idname = node.getAttribute("id");
      switch (idname) {
        case "Devices Camera":
          let deviceNumber = addCamera();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber}`;
              //console.log(newid);
      
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
              
            }
          }
          if (document.getElementById(`modell_${deviceNumber}`).innerHTML != ""){updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);}
          break;
        case "Devices Confocal":
          let deviceNumber1 = addConfocal();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber1); }catch(e){}
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            let subnodename = subnode.nodeName;
            if (subnodename != "#text") {
              // die alten device nummern in den IDs aus dem xml werden durch die neue DeviceID ersetzt.
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber1}`;
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber1}`).innerHTML != ""){updateHeader(`Name${deviceNumber1}`, `modell_${deviceNumber1}`);}
          
          break;
        case "Devices VS-LMS":
          let deviceNumber2 = addVSLMS();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber2); }catch(e){}
          // ensure VS-LMS specific special checks exist during parse so their values can be restored
          try{ if (typeof addVSLMSSpecialChecks === 'function') addVSLMSSpecialChecks(deviceNumber2); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber2}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          break;
        case "Devices PC":
          let deviceNumber3 = addPC();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber3); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber3}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          break;
        case "Devices VV":
          let deviceNumber4 = addVV();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber4); }catch(e){}
          // ensure VV-specific special checks exist during parse so their values can be restored
          try{ if (typeof addVVSpecialChecks === 'function') addVVSpecialChecks(deviceNumber4); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber4}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`package_${deviceNumber4}`).innerHTML != ""){updateHeader(`Name${deviceNumber4}`, `package_${deviceNumber4}`);}
          
          break;
        case "Devices Mic":
          let deviceNumber5 = addMic();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber5); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber5}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber5}`).innerHTML != ""){updateHeader(`Name${deviceNumber5}`, `modell_${deviceNumber5}`);}
          break;
        case "Devices ViRTEx":
          let deviceNumber6 = addViRTEx();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber6); }catch(e){}
          // ensure ViRTEx-specific special checks exist during parse so their values can be restored
          try{ if (typeof addViRTExSpecialChecks === 'function') addViRTExSpecialChecks(deviceNumber6); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber6}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber6}`).innerHTML != ""){updateHeader(`Name${deviceNumber6}`, `modell_${deviceNumber6}`);}
          break;
            case "Devices ViRTEx":
              // handled above; keep for clarity
              break;
        case "Devices FRAP":
          let deviceNumber7 = addFRAP();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber7); }catch(e){}
          try{ if (typeof addFRAPSpecialChecks === 'function') addFRAPSpecialChecks(deviceNumber7); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber7}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber7}`).innerHTML != ""){updateHeader(`Name${deviceNumber7}`, `modell_${deviceNumber7}`);}
          break;
        case "Devices Stage":
          let deviceNumber8 = addStage();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber8); }catch(e){}
          try{ if (typeof addStageSpecialChecks === 'function') addStageSpecialChecks(deviceNumber8); }catch(e){}
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber8); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber8}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber8}`).innerHTML != ""){updateHeader(`Name${deviceNumber8}`, `modell_${deviceNumber8}`);}
          break;
        case "Devices LED":
          let deviceNumber9 = addLED();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber9); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber9}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                // use unified setter to handle selects, checkboxes, date inputs, etc.
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber9}`).innerHTML != ""){updateHeader(`Name${deviceNumber9}`, `modell_${deviceNumber9}`);}
          break;
        case "Devices Custom":
          // Legacy combined Custom device -> keep as a single Custom device with both procurement and manufacturing fields
          let deviceNumber10 = addCustom();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber10); }catch(e){}
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            let subnodename = subnode.nodeName;
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber10}`;
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber10}`) && document.getElementById(`modell_${deviceNumber10}`).innerHTML != ""){updateHeader(`Name${deviceNumber10}`, `modell_${deviceNumber10}`);}
          break;
        case "Devices CustomProcurement":
        case "Devices Custom Procurement":
          // Custom procurement-only device
          let deviceNumberCP = addCustomProcurement();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumberCP); }catch(e){}
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            let subnodename = subnode.nodeName;
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumberCP}`;
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumberCP}`) && document.getElementById(`modell_${deviceNumberCP}`).innerHTML != ""){updateHeader(`Name${deviceNumberCP}`, `modell_${deviceNumberCP}`);}
          break;
        case "Devices CustomManufacturing":
        case "Devices Custom Manufacturing":
          // Custom manufacturing-only device
          let deviceNumberCM = addCustomManufacturing();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumberCM); }catch(e){}
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            let subnodename = subnode.nodeName;
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumberCM}`;
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumberCM}`) && document.getElementById(`modell_${deviceNumberCM}`).innerHTML != ""){updateHeader(`Name${deviceNumberCM}`, `modell_${deviceNumberCM}`);}
          break;
        case "Devices MMLaser":
          let deviceNumber11 = addMMLaser();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber11); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber11}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                // use centralized setter to handle selects, checkboxes, dates and
                // special hidden fields like production_status_<n> (which also
                // toggles the corresponding radio button)
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber11}`).innerHTML != ""){updateHeader(`Name${deviceNumber11}`, `modell_${deviceNumber11}`);}
          break;
        case "Devices Orbital":
          let deviceNumber12 = addOrbital();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber12); }catch(e){}
          // ensure Orbital-specific special checks exist during parse so their values can be restored
          try{ if (typeof addOrbitalSpecialChecks === 'function') addOrbitalSpecialChecks(deviceNumber12); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber12}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                // if this is a select, ensure the option exists so the value displays
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                // use centralized setter which handles selects, checkboxes, date inputs
                // and special hidden fields like production_status_<n> (which also
                // toggles the corresponding radio button)
                setElementValueFromXml(selectedElement, wert);
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber12}`).innerHTML != ""){updateHeader(`Name${deviceNumber12}`, `modell_${deviceNumber12}`);}
          break;
        case "Devices Inkubation":
          let deviceNumber13 = addInkubation();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber13); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber13}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                if (wert == "false") {
                  selectedElement.checked = false;
                } else if (wert == "true") {
                  selectedElement.checked = true;
                } else {
                  selectedElement.value = wert;
                }
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber13}`).innerHTML != ""){updateHeader(`Name${deviceNumber13}`, `modell_${deviceNumber13}`);}
          break;
        case "Devices DualCam":
          let deviceNumber14 = addDualCam();
          try{ if (typeof addGeneralOutputChecks === 'function') addGeneralOutputChecks(deviceNumber14); }catch(e){}
          //console.log(deviceNumber);
          //console.log(node.childNodes.length);
          for (f = 0; f < node.childNodes.length; f++) {
            let subnode = node.childNodes[f];
            //console.log(subnode.nodeValue);
            let subnodename = subnode.nodeName;
            //console.log(subnodename);
            if (subnodename != "#text") {
              let parts = subnodename.split("_");
              let base = parts.slice(0, -1).join("_");
              let newid = `${base}_${deviceNumber14}`;
              //console.log(newid);
              let selectedElement = document.getElementById(newid);
              if (selectedElement!== null){
                let wert = subnode.childNodes[0].nodeValue;
                //console.log(wert);
                //document.getElementById("Order").value = wert;
                // die dropdowns sind u U. nicht gleich mit options gefüllt.
                // daher muss man zumindest die eine Option erzeugen
                // damit später der wert aus dem xml im dropdopwn angezeigt wird
                if (selectedElement.tagName == "SELECT") {
                  let opt = document.createElement("Option");
                  opt.setAttribute("value", wert);
                  opt.innerHTML = wert;
                  selectedElement.appendChild(opt);
                }
                if (wert == "false") {
                  selectedElement.checked = false;
                } else if (wert == "true") {
                  selectedElement.checked = true;
                } else {
                  selectedElement.value = wert;
                }
              }
            }
          }
          if (document.getElementById(`modell_${deviceNumber14}`).innerHTML != ""){updateHeader(`Name${deviceNumber14}`, `modell_${deviceNumber14}`);}
          break;
        default:
          break;
      }
    }
  }
  // ensure headers update after parsing and populating devices
  try{ updateAllDeviceHeaders(); }catch(e){}
  // populate missing orders / confirmations lists in Basics
  try{ populateMissingOrders(); }catch(e){}
}

// After parsing, scan devices for missing procurement dates and populate Basics lists
function populateMissingOrders(){
  try{
  const missingOrderList = document.getElementById('missing_order_dates_list');
  const missingEstList = document.getElementById('missing_est_delivery_list');
  const missingBlock = document.getElementById('MissingOrders');
  const manufInProgressList = document.getElementById('manufacturing_inprogress_list');
  const manufCompletedList = document.getElementById('manufacturing_completed_list');
    if (!missingOrderList || !missingEstList || !missingBlock) return;
  // clear previous
  missingOrderList.innerHTML = '';
  missingEstList.innerHTML = '';
  if (manufInProgressList) manufInProgressList.innerHTML = '';
  if (manufCompletedList) manufCompletedList.innerHTML = '';
    const devices = Array.from(document.getElementsByClassName('Devices'));
  const missingOrders = [];
  const missingEstimates = [];
  const manufInProgress = [];
  const manufCompleted = [];
    devices.forEach(dev => {
      const id = dev.id && dev.id.replace && dev.id.replace('Device','');
      if (!id) return;
  // skip devices that have neither procurement nor manufacturing fields
  const hasProcurement = !!document.getElementById(`procurement_${id}`);
  const hasManufacturingBlock = !!dev.querySelector('.manufacturing') || !!dev.querySelector(`#production_end_${id}`);
  if (!hasProcurement && !hasManufacturingBlock) return;
      const nameEl = document.getElementById(`modell_${id}`) || document.getElementById(`package_${id}`) || document.getElementById(`Name${id}`);
      let name = '';
      if (nameEl){
        if (nameEl.tagName === 'SELECT') name = nameEl.value || nameEl.options[nameEl.selectedIndex]?.text || '';
        else name = nameEl.value || nameEl.textContent || nameEl.innerText || '';
      }
      name = (name && String(name).trim() !== '') ? String(name).trim() : `Device ${id}`;

      const order_date = document.getElementById(`order_date_${id}`)?.value || '';
      const est_delivery = document.getElementById(`est_delivery_${id}`)?.value || '';
      // Only consider missing procurement fields for devices that actually have procurement
      if (hasProcurement) {
        if (!order_date){ missingOrders.push({id, name}); }
        if (!est_delivery){ missingEstimates.push({id, name}); }
      }

      // detect manufacturing presence: either any '.manufacturing' block inside the device or production_end field
      const hasManufacturing = !!dev.querySelector('.manufacturing') || !!dev.querySelector(`#production_end_${id}`);
      if (hasManufacturing){
        // read hidden production status field (set via radios during manufacturing)
        const status = document.getElementById(`production_status_${id}`)?.value || '';
        // consider anything containing 'complete' as finished (case-insensitive)
        if (String(status).toLowerCase().includes('complete')){
          manufCompleted.push({id, name});
        } else {
          manufInProgress.push({id, name});
        }
      }
    });

    // populate lists
    if (missingOrders.length > 0){
      missingOrders.forEach(it => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = 'javascript:void(0)';
        a.textContent = `${it.name} (Device ${it.id})`;
        a.style.cursor = 'pointer';
        a.onclick = function(e){ flashDevice(it.id); };
        li.appendChild(a);
        missingOrderList.appendChild(li);
      });
    }
    if (missingEstimates.length > 0){
      missingEstimates.forEach(it => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = 'javascript:void(0)';
        a.textContent = `${it.name} (Device ${it.id})`;
        a.style.cursor = 'pointer';
        a.onclick = function(e){ flashDevice(it.id); };
        li.appendChild(a);
        missingEstList.appendChild(li);
      });
    }

    // populate manufacturing lists
    if (manufInProgress.length > 0 && manufInProgressList){
      manufInProgress.forEach(it => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = 'javascript:void(0)';
        a.textContent = `${it.name} (Device ${it.id})`;
        a.style.cursor = 'pointer';
        a.onclick = function(e){ flashDevice(it.id); };
        li.appendChild(a);
        manufInProgressList.appendChild(li);
      });
    }
    if (manufCompleted.length > 0 && manufCompletedList){
      manufCompleted.forEach(it => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = 'javascript:void(0)';
        a.textContent = `${it.name} (Device ${it.id})`;
        a.style.cursor = 'pointer';
        a.onclick = function(e){ flashDevice(it.id); };
        li.appendChild(a);
        manufCompletedList.appendChild(li);
      });
    }

    // show/hide block if any of the lists has items
    if (missingOrders.length > 0 || missingEstimates.length > 0 || manufInProgress.length > 0 || manufCompleted.length > 0){
      missingBlock.style.display = 'block';
    } else {
      missingBlock.style.display = 'none';
    }

    // no alert popups; visual lists above show missing items
  }catch(e){console.warn('populateMissingOrders error', e)}
}

// Scroll to device and temporarily highlight it
function flashDevice(id){
  try{
    const el = document.getElementById(`Device${id}`);
    if (!el) return;
    // scroll into view smoothly and center-ish
    el.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});
    // add flash class
    el.classList.add('device-flash');
    // remove after a short timeout
    setTimeout(()=>{ try{ el.classList.remove('device-flash'); }catch(e){} }, 1600);
  }catch(e){console.warn('flashDevice error', e)}
}

// After loading devices from XML, ensure device headers reflect the loaded model/package fields
// This will call the global `updateHeader(destination, source)` (defined in java.js) for each device
// so that the visible device name matches the loaded `modell_<n>` or `package_<n>` value.
function updateAllDeviceHeaders(){
  try{
    function getFieldValue(el){
      if (!el) return '';
      const tag = (el.tagName||'').toUpperCase();
      if (tag === 'SELECT'){
        // prefer value, fallback to selected option text
        const val = el.value;
        if (val && String(val).trim() !== '') return String(val).trim();
        const opt = el.options && el.options[el.selectedIndex];
        return opt ? String(opt.text || opt.value || '').trim() : '';
      }
      const type = el.getAttribute && (el.getAttribute('type') || el.type);
      if (type === 'checkbox') return el.checked ? 'true' : 'false';
      return String(el.value || el.textContent || el.innerText || '').trim();
    }

    let i = 1;
    while(document.getElementById(`Device${i}`)){
      const deviceEl = document.getElementById(`Device${i}`);
      const nameId = `Name${i}`;
      const headerEl = document.getElementById(nameId) || deviceEl.querySelector('.Devicename');

      // search within the device for likely model/package fields (case-insensitive ids)
      const candidates = Array.from(deviceEl.querySelectorAll('[id]'));
      let chosenEl = null;
      for (const el of candidates){
        const id = (el.id || '').toLowerCase();
        if (id.includes('modell') || id.includes('model') || id.includes('package') || id.includes('monitormod')){
          const v = getFieldValue(el);
          if (v && v.trim() !== ''){ chosenEl = el; break; }
        }
      }

      if (chosenEl && headerEl){
        // trigger change listeners where present
        try{ if (typeof chosenEl.dispatchEvent === 'function') chosenEl.dispatchEvent(new Event('change', { bubbles: true })); }catch(e){}
        // prefer calling existing updateHeader if available
        if (typeof updateHeader === 'function'){
          try{ updateHeader(nameId, chosenEl.id); }
          catch(e){ headerEl.textContent = getFieldValue(chosenEl); }
        } else {
          headerEl.textContent = getFieldValue(chosenEl);
        }
      }
      i++;
    }
  }catch(e){console.warn('updateAllDeviceHeaders error', e)}
}

//Speichern der Daten in ein xml

function downloadXML(dom) {
  // build a safe filename from the order number (or fallback) and append current date
  let rawName = (document.getElementById("order") && document.getElementById("order").value) || "Checklist";
  // remove characters not allowed in filenames on Windows and trim
  let safeName = rawName.replace(/[<>:\"\\/\\|?*\x00-\x1F]/g, "").trim() || "Checklist";
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const dateStr = `${yyyy}-${mm}-${dd}`;
  // include hours and minutes to make filename unique: use '-' instead of ':' for filesystem safety
  const hh = String(today.getHours()).padStart(2, "0");
  const min = String(today.getMinutes()).padStart(2, "0");
  const timeStr = `${hh}-${min}`;
  let filename = `${safeName}_Checklist_${dateStr}_${timeStr}.xml`;
  // let parser = new DOMParser();
  // let file = parser.parseFromString(dom, "text/xml");

  //let file= new File([dom],filename,{type:"application/xml"});
  let file = new Blob([dom], { type: "text/xml" });
  let pom = document.createElement("a");
  pom.setAttribute("href", "#");
  pom.setAttribute("download", filename);
  pom.setAttribute("href", window.URL.createObjectURL(file));
  pom.click();
}

function createXML2() {
  try{ const nav = document.getElementById("NavBar"); if (nav) nav.style.display = "none"; }catch(e){}
  const checklist = document.createElement("Checklist");
  const newElement = document.createElement("Basics");
  checklist.appendChild(newElement);
  //console.log(document.querySelectorAll("input.Info").length);

  for (let i = 0; i < document.querySelectorAll("input.Info").length; i++) {
    let source = document.querySelectorAll("input.Info")[i];
    let nodename = source.getAttribute("id");
    let xmlnode = document.createElement(nodename);
    checklist.getElementsByTagName("Basics")[0].appendChild(xmlnode);
    /*     console.log(nodename);
    console.log(source.value); */
    if (source.getAttribute("type") == "checkbox") {
      checklist.getElementsByTagName(nodename)[0].innerHTML = source.checked;
    } else {
      if (source.value != "") {
        checklist.getElementsByTagName(nodename)[0].innerHTML = source.value;
      } else {
        checklist.getElementsByTagName(nodename)[0].innerHTML = "";
      }
    }

    //checklist.getElementsByTagName(nodename)[0].innerHTML = source.value;
  }
  const newElement1 = document.createElement("Devices");
  checklist.appendChild(newElement1);
  for (let i = 0; i < document.querySelectorAll(".Devices").length; i++) {
    let idd = document.querySelectorAll(".Devices")[i].getAttribute("id");
    let classs = document.querySelectorAll(".Devices")[i].getAttribute("class");
    const newerElement = document.createElement(idd);
    newElement1.appendChild(newerElement);
    newerElement.setAttribute("id", `${classs}`);
    // console.log(id)
    // console.log(document.querySelectorAll(`input.${id}`).length);
    for (
      let g = 0;
      g < document.querySelectorAll(`select.${idd}`).length;
      g++
    ) {
      let source = document.querySelectorAll(`select.${idd}`)[g];
      let nodename = source.getAttribute("id");
      let xmlnode = document.createElement(nodename);

      checklist.getElementsByTagName(idd)[0].appendChild(xmlnode);
      checklist.getElementsByTagName(nodename)[0].innerHTML =
        source.options[source.selectedIndex].value;
    }
    for (let f = 0; f < document.querySelectorAll(`input.${idd}`).length; f++) {
      let source = document.querySelectorAll(`input.${idd}`)[f];
      let nodename = source.getAttribute("id");
      let xmlnode = document.createElement(nodename);

      checklist.getElementsByTagName(idd)[0].appendChild(xmlnode);
      /*     console.log(nodename);
        console.log(source.value); */
      if (source.getAttribute("type") == "checkbox") {
        checklist.getElementsByTagName(nodename)[0].innerHTML = source.checked;
      } else {
        if (source.value != "") {
          checklist.getElementsByTagName(nodename)[0].innerHTML = source.value;
        } else {
          checklist.getElementsByTagName(nodename)[0].innerHTML = "";
        }
      }
    }
  }

  //let x= document.getElementById("Checklist");
  let xmlugly = new XMLSerializer().serializeToString(checklist);
  let xmlnice = formatXml(xmlugly);
  // console.log(xmlnice);
  downloadXML(xmlnice);
}
function formatXml(xml, tab) {
  // tab = optional indent value, default is tab (\t)
  var formatted = "",
    indent = "";
  tab = tab || "\t";
  xml.split(/>\s*</).forEach(function (node) {
    if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
    formatted += indent + "<" + node + ">\r\n";
    if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab; // increase indent
  });
  return formatted.substring(1, formatted.length - 3);
}

// Generate XML string from current checklist (same structure as createXML2 but returns the string)
function generateXmlString(){
  const checklist = document.createElement("Checklist");
  const newElement = document.createElement("Basics");
  checklist.appendChild(newElement);
  for (let i = 0; i < document.querySelectorAll("input.Info").length; i++) {
    let source = document.querySelectorAll("input.Info")[i];
    let nodename = source.getAttribute("id");
    let xmlnode = document.createElement(nodename);
    checklist.getElementsByTagName("Basics")[0].appendChild(xmlnode);
    if (source.getAttribute("type") == "checkbox") {
      checklist.getElementsByTagName(nodename)[0].innerHTML = source.checked;
    } else {
      checklist.getElementsByTagName(nodename)[0].innerHTML = source.value || "";
    }
  }
  const newElement1 = document.createElement("Devices");
  checklist.appendChild(newElement1);
  for (let i = 0; i < document.querySelectorAll(".Devices").length; i++) {
    let idd = document.querySelectorAll(".Devices")[i].getAttribute("id");
    let classs = document.querySelectorAll(".Devices")[i].getAttribute("class");
    const newerElement = document.createElement(idd);
    newElement1.appendChild(newerElement);
    newerElement.setAttribute("id", `${classs}`);
    for (let g = 0; g < document.querySelectorAll(`select.${idd}`).length; g++) {
      let source = document.querySelectorAll(`select.${idd}`)[g];
      let nodename = source.getAttribute("id");
      let xmlnode = document.createElement(nodename);
      checklist.getElementsByTagName(idd)[0].appendChild(xmlnode);
      checklist.getElementsByTagName(nodename)[0].innerHTML = source.options[source.selectedIndex].value;
    }
    for (let f = 0; f < document.querySelectorAll(`input.${idd}`).length; f++) {
      let source = document.querySelectorAll(`input.${idd}`)[f];
      let nodename = source.getAttribute("id");
      let xmlnode = document.createElement(nodename);
      checklist.getElementsByTagName(idd)[0].appendChild(xmlnode);
      if (source.getAttribute("type") == "checkbox") {
        checklist.getElementsByTagName(nodename)[0].innerHTML = source.checked;
      } else {
        checklist.getElementsByTagName(nodename)[0].innerHTML = source.value || "";
      }
    }
  }
  let xmlugly = new XMLSerializer().serializeToString(checklist);
  let xmlnice = formatXml(xmlugly);
  return xmlnice;
}

// Save the current XML back to the same server folder where the last loaded XML came from.
// Filename is generated like in downloadXML; if a file already exists at the target path the user is warned before overwrite.
async function saveXmlToServerSameFolder(){
  try{
    const last = window.lastLoadedServerFile;
    if (!last){ alert('Bitte zuerst eine XML-Datei vom Server laden (Order search).'); return; }

    // default target: overwrite the originally loaded file
    const target = String(last).replace(/\\/g, '/');

    // get current stats of the original file on server
    let serverStat = null;
    try{
      const statResp = await fetch(`/filestats?name=${encodeURIComponent(target)}`);
      if (statResp && statResp.ok) serverStat = await statResp.json();
    }catch(e){ /* ignore */ }

    // if file exists and size changed since we loaded it, ask the user
    const priorSize = Number(window.lastLoadedServerFileSize || 0);
    const currentSize = serverStat && serverStat.exists ? Number(serverStat.size || 0) : null;

    let chosenAction = 'save'; // 'save' means overwrite target, 'increment' means save to next available name, 'cancel'

    if (currentSize !== null && priorSize !== 0 && currentSize !== priorSize){
      // show modal asking user what to do
      const choice = await showSaveConflictModal(target, priorSize, currentSize);
      if (!choice || choice === 'cancel') return; // user cancelled
      chosenAction = choice;
    }

    // determine final name
    let finalName = target;
    if (chosenAction === 'increment'){
      finalName = await findNextAvailableName(target);
      if (!finalName) { alert('Could not determine an available filename'); return; }
    }

    // perform save
    const xml = generateXmlString();
    const resp = await fetch('/savexml', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: finalName, content: xml })
    });
    if (!resp.ok){ const txt = await resp.text(); throw new Error(`Server returned ${resp.status}: ${txt}`); }
    const data = await resp.json();
    alert('Saved XML to server: ' + (data.saved || finalName));
  }catch(e){ console.error('saveXmlToServerSameFolder error', e); alert('Fehler beim Speichern auf dem Server: ' + (e && e.message ? e.message : e)); }
}

// Show a modal when the original server file changed size: ask overwrite / increment / cancel
function showSaveConflictModal(target, oldSize, newSize){
  return new Promise((resolve)=>{
    const existing = document.getElementById('saveConflictModal'); if (existing) existing.remove();
    const overlay = document.createElement('div'); overlay.id = 'saveConflictModal'; overlay.className = 'PrintModalOverlay';
    const modal = document.createElement('div'); modal.className = 'PrintModal';
    modal.innerHTML = `
      <div style="font-weight:700;margin-bottom:8px">File changed on server</div>
      <div style="margin-bottom:8px">The file <strong>${escapeHtml(target)}</strong> has changed on the server since you loaded it.</div>
      <div style="margin-bottom:8px">Previous size: ${oldSize} bytes<br>Current size: ${newSize} bytes</div>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
        <button id="saveconf_overwrite" class="small primary">Overwrite</button>
        <button id="saveconf_increment" class="small">Save as new (increment)</button>
        <button id="saveconf_cancel" class="small">Cancel</button>
      </div>
    `;
    overlay.appendChild(modal); document.body.appendChild(overlay);
    modal.querySelector('#saveconf_cancel').addEventListener('click', ()=>{ cleanup(); resolve('cancel'); });
    modal.querySelector('#saveconf_overwrite').addEventListener('click', ()=>{ cleanup(); resolve('save'); });
    modal.querySelector('#saveconf_increment').addEventListener('click', ()=>{ cleanup(); resolve('increment'); });
    overlay.addEventListener('click', (e)=>{ if (e.target === overlay){ cleanup(); resolve('cancel'); } });
    function cleanup(){ try{ overlay.remove(); }catch(e){} }
  });
}

// Find next available filename by appending _1, _2, ... before extension in same folder
async function findNextAvailableName(relPath){
  // split dir and base
  const norm = String(relPath).replace(/\\/g,'/');
  let dir = '';
  if (norm.includes('/')) dir = norm.substring(0, norm.lastIndexOf('/'));
  const base = norm.includes('/') ? norm.split('/').pop() : norm;
  const m = base.match(/^(.*?)(\.([^.]+))?$/);
  const nameOnly = m ? m[1] : base;
  const ext = (m && m[2]) ? m[2] : '.xml';
  for (let i=1;i<1000;i++){
    const candidate = `${nameOnly}_${i}${ext}`;
    const candidateRel = dir ? `${dir}/${candidate}` : candidate;
    try{
      const r = await fetch(`/filestats?name=${encodeURIComponent(candidateRel)}`);
      if (r && r.ok){ const j = await r.json(); if (!j.exists) return candidateRel; }
    }catch(e){ /* ignore and continue */ }
  }
  return null;
}

//Add Device functions:

function addCamera() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("Camera");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">Camera ${deviceNumber}</span>
          <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
          <div class="Container">
            Hersteller:
            <input type="text" id="brand_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Modell:
            <input
              type="text"
              id="modell_${deviceNumber}"
              class="Device${deviceNumber}"             
            />
          </div>
          <div class="Container">
            Seriennr.
            <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Treibervs.:
            <input type="text" id="driver_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Firmwarevs.:
            <input type="text" id="fw_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Interface:
            <input type="text" id="interface_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Kommentare:
            <input type="text" id="comments_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  return deviceNumber;
}
function addConfocal() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("Confocal");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">Confocal ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              <label for="brand_${deviceNumber}" class="inputtitle">Hersteller:</label>
              <select name="brand_${deviceNumber}" id="brand_${deviceNumber}" class="Device${deviceNumber}" >
                <option value="Yokogawa">Yokogawa</option>
                <option value="Hamamatsu">Hamamatsu</option>
                <option value="CREST">CREST</option>               
              </select>
            </div>
            <div class="Container">
              <label for="modell_${deviceNumber}" class="inputtitle">Modell:</label>
              <select name="modell_${deviceNumber}" id="modell_${deviceNumber}" class="Device${deviceNumber}" >

              </select>
            </div>
            <div class="Container">
              Seriennr.
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>

            <div class="Container">
              Firmwarevs.:
              <input type="text" id="fw_${deviceNumber}" class="Device${deviceNumber}"/>
            </div>

            <table class="table">
              <tr>
                <th>Position</th>
                <th>FW1exc</th>
                <th>FW2em1</th>
                <th>FW3em2</th>
                <th>Dic1</th>
                <th>Dic2</th>
              </tr>
              <tr>
                <td>1</td>
                <td><input type="text" id="fw1exc1pos1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw2em1pos1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic1pos1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic2pos1_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" id="fw1exc1pos2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw2em1pos2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic1pos2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic2pos2_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" id="fw1exc1pos3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw2em1pos3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic1pos3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic2pos3_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" id="fw1exc1pos4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw2em1pos4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic1pos4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic2pos4_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" id="fw1exc1pos5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw2em1pos5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic1pos5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="dic2pos5_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>6</td>
                <td></td>
                <td><input type="text" id="fw2em1pos6_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos6_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td></td>
                <td><input type="text" id="fw2em1pos7_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos7_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td></td>
                <td><input type="text" id="fw2em1pos8_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos8_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td></td>
                <td><input type="text" id="fw2em1pos9_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos9_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10</td>
                <td></td>
                <td><input type="text" id="fw2em1pos10_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos10_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11</td>
                <td></td>
                <td><input type="text" id="fw2em1pos11_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos11_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12</td>
                <td></td>
                <td><input type="text" id="fw2em1pos12_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="fw3em2pos12_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>

            </table>
            <div class="Container">
              Kommentar:
              <input type="text" id="comment_${deviceNumber}" class="Device${deviceNumber}"/>
            </div>           
          </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  document
    .getElementById(`brand_${deviceNumber}`)
    .addEventListener("change", function () {
      dropdownactions(
        `brand_${deviceNumber}`,
        `modell_${deviceNumber}`,
        deviceNumber
      );
    });
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  dropdownactions(
    `brand_${deviceNumber}`,
    `modell_${deviceNumber}`,
    deviceNumber
  );
  return deviceNumber;
}
function dropdownactions(id, id2, deviceNumber) {
  // console.log(document.getElementById("brand1").options[document.getElementById("brand1").selectedIndex].value);
  const source = document.getElementById(id);
  const aim = document.getElementById(id2);
  const brand = source.options[source.selectedIndex].value;
  //console.log(aim.childNodes.length);
  aim.innerHTML = "";
  if (brand == "Yokogawa") {
    let element1 = document.createElement("option");
    element1.setAttribute("value", "CSU-W1");
    //element1.setAttribute("selected","selected");
    element1.innerText = "CSU-W1";
    aim.appendChild(element1);
    let element2 = document.createElement("option");
    element2.setAttribute("value", "CSU-X1");
    element2.innerText = "CSU-X1";
    aim.appendChild(element2);
    updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
  } else if (brand == "CREST") {
    let element1 = document.createElement("option");
    element1.setAttribute("value", "Cicero");
    element1.innerText = "Cicero";
    aim.appendChild(element1);
    let element2 = document.createElement("option");
    element2.setAttribute("value", "X-Light-V2");
    element2.innerText = "X-Light-V2";
    aim.appendChild(element2);
    let element3 = document.createElement("option");
    element3.setAttribute("value", "X-Light-V3");
    element3.innerText = "X-Light-V3";
    aim.appendChild(element3);
    updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
  } else if (brand == "Hamamatsu") {
    let element1 = document.createElement("option");
    element1.setAttribute("value", "Maico");
    element1.innerText = "Maico";
    aim.appendChild(element1);
    updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
  }

  //console.log(document.getElementById("brand1").options[document.getElementById("brand1").selectedIndex].value);
}

function addVSLMS() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("VS-LMS");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Device VS-LMS" id="VS-LMS">
          <div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">VS-LMS ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              Modell:
              <input
                type="text"
                id="modell_${deviceNumber}"
                class="Device${deviceNumber}"
              />
            </div>
            <div class="Container">
              Seriennummer:
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Laserfibers:
              <input type="text" id="laserfibers_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              LeoniSwitcher(SN):
              <input type="text" id="leonisn_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Galvo(SN):
              <input type="text" id="glavosn_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Sonstiges:
              <input type="text" id="else_${deviceNumber}" class="Device${deviceNumber}" />
            </div>

            <table class="table">
              <tr>
                <th>Laser</th>
                <th>Modell</th>
                <th>Serialnr.</th>
                <th>Laser mW</th>
                <th>Order no.</th>
                <th>Order Date</th>
                <th>Est. Delivery</th>
                <th>SDC mW</th>
                <th>TIRF mW</th>
                <th>FRAP mW</th>
              </tr>
              <tr>
                <td><input type="text" id="firstlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="firstlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="firstlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="secondlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="secondlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="secondlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="thirdlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="thirdlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="thirdlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="fourthlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="fourthlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="fourthlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="fifthlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="fifthlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="fifthlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="sixthlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="sixthlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="sixthlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="seventhlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="seventhlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="seventhlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="eigthlasname_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthlasmodell_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthlasserial_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthlasmw_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthlasorder_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="eigthlasorderdate_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="date" id="eigthlasdelivery_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthlassdc_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthlastirf_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthlasfrap_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
            </table>

          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addManufacturingFields(deviceNumber);
  // ensure LMS manufacturing checks are present synchronously (useful during parse)
  try{ if (typeof addLMSManufacturingChecks === 'function') addLMSManufacturingChecks(deviceNumber); }catch(e){}
  // append VS-LMS specific special checks (Ausgangs-Checks Speziell für VS_LMS)
  try{ if (typeof addVSLMSSpecialChecks === 'function') addVSLMSSpecialChecks(deviceNumber); }catch(e){}
  return deviceNumber;
}

// Append VS-LMS specific output checks block under Manufacturing
function addVSLMSSpecialChecks(deviceNumber){
  try{
    const marker = document.getElementById(`outputchecks_vslms_${deviceNumber}`);
    if (marker) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const html = `
      <div class="OutputChecks" id="outputchecks_vslms_${deviceNumber}">
        <div class="OutputChecksHeader">Ausgangs-Checks Speziell für VS_LMS</div>
        <div class="OutputChecksGrid">
          <label><input type="checkbox" id="galvocable_${deviceNumber}" class="Device${deviceNumber}"> Galvopowerkabel</label>
          <label><input type="checkbox" id="lasercable_${deviceNumber}" class="Device${deviceNumber}"> Laserpowerkabel</label>
          <label><input type="checkbox" id="usbcable_${deviceNumber}" class="Device${deviceNumber}"> USB-Kabel</label>
          <label><input type="checkbox" id="lasertriggerkabel_${deviceNumber}" class="Device${deviceNumber}"> Laser Triggerkabel</label>
          <label><input type="checkbox" id="leoniverpackt_${deviceNumber}" class="Device${deviceNumber} inputcb" /> Leoniverpackt</label>
          </div>
        <div class="OutputChecksFooter">
          <label>Checked by: <input type="text" id="vslms_checked_by_${deviceNumber}" class="Device${deviceNumber}"></label>
        </div>
      </div>
    `;
    // insert after manufacturing block if present, otherwise append to body
    const man = body.querySelector(`#manufacturing_${deviceNumber}`);
    if (man) man.insertAdjacentHTML('afterend', html);
    else body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addVSLMSSpecialChecks error', e)}
}
function addPC() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("PC");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">PC ${deviceNumber}</span>
          <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
          <div class="Container">
            Hersteller:
            <input type="text" id="brand_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Modell:
            <input type="text" id="modell_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Seriennr.
            <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            OS:
            <input type="text" id="os_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Processor:
            <input type="text" id="processor_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            RAM:
            <input type="text" id="ram_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Grafik:
            <input type="text" id="grafik_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Interfaces:
            <input type="text" id="interface_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Kommentare:
            <input type="text" id="comments_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Monitor:
          </div>
          <div class="Container">
            Hersteller:
            <input type="text" id="monitorhersteller_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Monitor-typ:
            <input type="text" id="monitortyp_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Seriennr.:
            <input type="text" id="monitorseriennr_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="OutputChecksSpecial" id="outputchecks_pc_${deviceNumber}">
            <div class="OutputChecksHeader">Ausgangs-Checks Speziell für PC</div>
            <div class="OutputChecksGrid">
              <label><input type="checkbox" id="label_${deviceNumber}" class="Device${deviceNumber}"> Visitron Label?</label>
              <label><input type="checkbox" id="updatesanddrivers_${deviceNumber}" class="Device${deviceNumber}"> Upd. and Driv.?</label>
              <label><input type="checkbox" id="keyboard_${deviceNumber}" class="Device${deviceNumber}"> Maus und Keyb.?</label>
              <label><input type="checkbox" id="mauspad_${deviceNumber}" class="Device${deviceNumber}"> Mauspad?</label>
            </div>
            <div class="OutputChecksFooter">Checked by: <input type="text" id="pc_checked_by_${deviceNumber}" class="Device${deviceNumber}"></div>
          </div>

        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  document
  .getElementById(`modell_${deviceNumber}`)
  .addEventListener("change", function () {
    updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
  });
  addProcurementFields(deviceNumber);
  return deviceNumber;
}
function addVV() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("VV");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">VV ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
          <div class="Container">
              <label for="package_${deviceNumber}" class="inputtitle">Package:</label>
              <select name="package_${deviceNumber}" id="package_${deviceNumber}" class="Device${deviceNumber}" >
                <option value="VV-Basic">VV-Basic</option>
                <option value="VV-Basic+Options">VV-Basic+Options</option>
                <option value="VV-Premier">VV-Premier</option> 
                <option value="VV-PremierOptions">VV-Premier+Options</option>    
                <option value="VV-Silver">VV-Silver</option> 
                <option value="VV-Gold">VV-Gold</option> 
                <option value="VV-Update">VV-Update</option>
                <option value="VV-Option">VV-Option</option>
                <option value="VV-Maintenance">VV-Maintenance</option>
                <option value="VV-Support-Stunden">VV-Support-Stunden</option>
              </select>
          </div>
          <div class="Container">
            Licence-ID:
            <input type="text" id="dongleid_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Version:
            <input type="text" id="version_${deviceNumber}" class="Device${deviceNumber}" />
          </div>

          <div class="Container">
            Sonstiges:
            <input type="text" id="else_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addManufacturingFields(deviceNumber);
  // append VV-specific special checks (Ausgangs-Checks Speziell für VisiView)
  try{ if (typeof addVVSpecialChecks === 'function') addVVSpecialChecks(deviceNumber); }catch(e){}
  document
  .getElementById(`package_${deviceNumber}`)
  .addEventListener("change", function () {
    updateHeader(`Name${deviceNumber}`, `package_${deviceNumber}`);
  });
  return deviceNumber;
}

// Append VV-specific output checks at the bottom of the VV device body
function addVVSpecialChecks(deviceNumber){
  try{
    const marker = document.getElementById(`outputchecks_vv_${deviceNumber}`);
    if (marker) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const html = `
      <div class="OutputChecksSpecial" id="outputchecks_vv_${deviceNumber}">
        <div class="OutputChecksHeader">Ausgangs-Checks Speziell für VisiView</div>
        <div class="OutputChecksGrid">
          <label><input type="checkbox" id="hotkeys_${deviceNumber}" class="Device${deviceNumber}"> Hot-key-Liste?</label>
          <label><input type="checkbox" id="usbstick_${deviceNumber}" class="Device${deviceNumber}"> VS-USB-Stick?</label>
          <label><input type="checkbox" id="update_${deviceNumber}" class="Device${deviceNumber}"> Update?</label>
          <label><input type="checkbox" id="neuinstallation_${deviceNumber}" class="Device${deviceNumber}"> Neuinstallation?</label>
          <label><input type="checkbox" id="devicesetup_${deviceNumber}" class="Device${deviceNumber}"> Devices?</label>
          <label><input type="checkbox" id="magnificationsetup_${deviceNumber}" class="Device${deviceNumber}"> Magnification?</label>
          <label><input type="checkbox" id="illuminationsetup_${deviceNumber}" class="Device${deviceNumber}"> Illumination?</label>
          <label><input type="checkbox" id="toolbarsetup_${deviceNumber}" class="Device${deviceNumber}"> Toolbar?</label>
          <label><input type="checkbox" id="startupsetup_${deviceNumber}" class="Device${deviceNumber}"> Startup?</label>
          <label><input type="checkbox" id="backup_${deviceNumber}" class="Device${deviceNumber}"> Backup?</label>
        </div>
        <div class="OutputChecksFooter">
          <label>Checked by: <input type="text" id="vv_checked_by_${deviceNumber}" class="Device${deviceNumber}"></label>
        </div>
      </div>
    `;
    // insert after manufacturing block if present, otherwise append to body
    const man = body.querySelector(`#manufacturing_${deviceNumber}`);
    if (man) man.insertAdjacentHTML('afterend', html);
    else body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addVVSpecialChecks error', e)}
}
function addMic() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("Mic");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">Mic ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              <label for="brand_${deviceNumber}" class="inputtitle">Hersteller:</label>
              <select name="brand_${deviceNumber}" id="brand_${deviceNumber}" class="Device${deviceNumber}" >
                <option value="Zeiss">Zeiss</option>
                <option value="Leica">Leica</option>
                <option value="Nikon">Nikon</option>  
                <option value="Olympus">Olympus</option>  
                <option value="Zaber">Zaber</option>             
              </select>
            </div>
            <div class="Container">
              Modell:
              <input
                type="text"
                id="modell_${deviceNumber}"
                class="Device${deviceNumber}"
                
              />
            </div>
            <div class="Container">
              Seriennr.
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Firmwarevs.:
              <input type="text" id="fw_${deviceNumber}" class="Device${deviceNumber}"/>
            </div>
            <div class="Container">
              NetzteilSnr.:
              <input type="text" id="netzteilsnr_${deviceNumber}" class="Device${deviceNumber}"/>
            </div>
            <div class="Container">
              Immersol:
              <input type="text" id="immersol_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              sonst. Filter:
              <input type="text" id="filter_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              DIC Zubehör:
              <input type="text" id="dic_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Kommentar:
              <input type="text" id="comment_${deviceNumber}" class="Device${deviceNumber}"/>
            </div>
            <table class="table">
              <tr>
                <th>Position</th>
                <th>Obj.rev</th>
                <th>Filterrev1</th>
                <th>Filterrev2</th>
                <th>Kond.rev</th>
                <th>Optovar</th>
              </tr>
              <tr>
                <td>1</td>
                <td><input type="text" id="objectivrev1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter1rev1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="kondensorrev1_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="optovar1_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" id="objectivrev2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter1rev2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="kondensorrev2_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="optovar2_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" id="objectivrev3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter1rev3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="kondensorrev3_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="optovar3_${deviceNumber}" class="Device${deviceNumber}"></td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" id="objectivrev4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter1rev4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="kondensorrev4_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" id="objectivrev5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter1rev5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="kondensorrev5_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td><input type="text" id="objectivrev6_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter1rev6_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev6_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="kondensorrev6_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td></td>
                <td><input type="text" id="filter1rev7_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev7_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td></td>
                <td><input type="text" id="filter1rev8_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td><input type="text" id="filter2rev8_${deviceNumber}" class="Device${deviceNumber}"></td>
                <td></td>
                <td></td>
              </tr>
            </table>
            <div class="OutputChecksSpecial" id="outputchecks_mic_${deviceNumber}">
              <div class="OutputChecksHeader">Ausgangs-Checks Speziell für Mic</div>
              <div class="OutputChecksGrid">
                <label><input type="checkbox" id="originalmanual_${deviceNumber}" class="Device${deviceNumber}"> Original-Manuals?</label>
                <label><input type="checkbox" id="staubschutz_${deviceNumber}" class="Device${deviceNumber}"> Staubschutz-Hülle?</label>
              </div>
            </div>
          
          </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  document
  .getElementById(`modell_${deviceNumber}`)
  .addEventListener("change", function () {
    updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
  });
  return deviceNumber;
}
function addViRTEx() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("ViRTEx");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">ViRTEx ${deviceNumber}</span>
          <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              <label for="modell_${deviceNumber}" class="inputtitle">Modell:</label>
              <select name="modell_${deviceNumber}" id="modell_${deviceNumber}" class="Device${deviceNumber}" >
                <option value="ViRTEx-100-CT">ViRTEx-100-Standalone-TTL</option>
                <option value="ViRTEx-110-ST">ViRTEx-110-Card-TTL</option>
                <option value="ViRTEx-200-CA">ViRTEx-200-Standalone-Analog</option>
                <option value="ViRTEx-210-SA">ViRTEx-210-Card-Analog</option>
              </select>
            </div>
          <div class="Container">
            Seriennr.
            <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Board Version
            <input type="text" id="boardnr_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Frequenz
            <input type="text" id="frequenz_${deviceNumber}" class="Device${deviceNumber}" />
          </div>

          <div class="Container">
            Multiplexer Version
            <input type="text" id="multiplexer_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            BNC Breakout Box Version
            <input type="text" id="bncbreakoutbox_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Orbital Connect Board Version
            <input type="text" id="orbitalconnectboard_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            FRAP Logic Circuitry for Third-Party Laser Version
            <input type="text" id="fraplogiccircuitry_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            FW Version:
            <input type="text" id="fw_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Anzahl Analogp.:
            <input type="number" id="analogports_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Kabel-Liste:
            <input type="text" id="kabelliste_${deviceNumber}" class="Device${deviceNumber}" />
          </div> 
          <div class="Container">
            Kommentare:
            <input type="text" id="comments_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>             
        </div>`;

  // build the ViRTEx-specific manufacturing checks block (same visual style as manufacturing)
  const virtexChecksHtml = `
    <div class="manufacturing" id="manufacturing_virtex_checks_${deviceNumber}">
      <div class="block-title">ViRTEx Manufacturing Checks</div>
      <div class="Checkboxflex">
        <label class="Checkboxflexelement"><input type="checkbox" id="fwok_${deviceNumber}" class="Device${deviceNumber}"> FW Update OK when built</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="ttloutok_${deviceNumber}" class="Device${deviceNumber}"> TTL out OK</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="caminputok_${deviceNumber}" class="Device${deviceNumber}"> Cam Input OK</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="syncok_${deviceNumber}" class="Device${deviceNumber}"> ln0 / TriggerIN / SyncIn OK</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="camoutok_${deviceNumber}" class="Device${deviceNumber}"> Cam out OK</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="triggerready_${deviceNumber}" class="Device${deviceNumber}"> Trigger ready OK</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="analogportsanzahlok_${deviceNumber}" class="Device${deviceNumber}"> Number of ports correct when on</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="ok05v_${deviceNumber}" class="Device${deviceNumber}"> 0-5V OK</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="ok010v_${deviceNumber}" class="Device${deviceNumber}"> 0-10V OK</label>
        <label class="Checkboxflexelement"><input type="checkbox" id="ok-5-5v_${deviceNumber}" class="Device${deviceNumber}"> -5V..+5V OK</label>
      </div>
    </div>
  `;

  // Insert ViRTEx manufacturing checks immediately if the manufacturing block is present.
  try {
    const existingMan = element.querySelector(`#manufacturing_${deviceNumber}`);
    if (existingMan) {
      existingMan.insertAdjacentHTML('afterend', virtexChecksHtml);
    }
    // if manufacturing gets added later (rare), a synchronous helper will also be invoked after addManufacturingFields()
  } catch (e) { console.warn('ViRTEx checks insertion error', e); }

  document.getElementById("DeviceList").appendChild(element);
  addManufacturingFields(deviceNumber);
  // ensure ViRTEx manufacturing checks are present synchronously (useful during parse)
  try{ if (typeof addViRTExManufacturingChecks === 'function') addViRTExManufacturingChecks(deviceNumber); }catch(e){}
  // append ViRTEx-specific special checks for interactive adds
  try{ if (typeof addViRTExSpecialChecks === 'function') addViRTExSpecialChecks(deviceNumber); }catch(e){}

  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  return deviceNumber;
}

// Append FRAP-specific output checks at the bottom of the device body
function addFRAPSpecialChecks(deviceNumber){
  try{
    const marker = document.getElementById(`outputchecks_frap_${deviceNumber}`);
    if (marker) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const html = `
      <div class="OutputChecksSpecial" id="outputchecks_frap_${deviceNumber}">
        <div class="OutputChecksHeader">Ausgangs-Checks Speziell</div>
        <div class="OutputChecksGrid">
          <label><input type="checkbox" id="galvokabel_${deviceNumber}" class="Device${deviceNumber}"> 2x GalvoKabel</label>
          <label><input type="checkbox" id="analogkabel_${deviceNumber}" class="Device${deviceNumber}"> Analogkabel</label>
          <label><input type="checkbox" id="calsample_${deviceNumber}" class="Device${deviceNumber}"> Calibration Sample</label>
          </div>
        <div class="OutputChecksFooter">
          <label>Checked by: <input type="text" id="frap_checked_by_${deviceNumber}" class="Device${deviceNumber}"></label>
        </div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addFRAPSpecialChecks error', e)}
}
// Append Stage-specific output checks at the bottom of the Stage device body
function addStageSpecialChecks(deviceNumber){
  try{
    const marker = document.getElementById(`outputchecks_stage_${deviceNumber}`);
    if (marker) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const html = `
      <div class="OutputChecksSpecial" id="outputchecks_stage_${deviceNumber}">
        <div class="OutputChecksHeader">Ausgangs-Checks Speziell (Stage)</div>
        <div class="OutputChecksGrid">
          <label><input type="checkbox" id="stage_kabelxy_${deviceNumber}" class="Device${deviceNumber}"> Kabel XY</label>
          <label><input type="checkbox" id="stage_bnckabelanalog_${deviceNumber}" class="Device${deviceNumber}"> BNC Kabel Analog</label>
          <label><input type="checkbox" id="stage_limitsset_${deviceNumber}" class="Device${deviceNumber}"> Limits Set</label>
          <label><input type="checkbox" id="stage_joystick_${deviceNumber}" class="Device${deviceNumber}"> Joystick</label>
          <label><input type="checkbox" id="stage_inserts_${deviceNumber}" class="Device${deviceNumber}"> Inserts</label>
        </div>
        <div class="OutputChecksFooter">
          <label>Checked by: <input type="text" id="stage_checked_by_${deviceNumber}" class="Device${deviceNumber}"></label>
        </div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addStageSpecialChecks error', e)}
}
// Append ViRTEx-specific output checks at the bottom of the ViRTEx device body
function addViRTExSpecialChecks(deviceNumber){
  try{
    const marker = document.getElementById(`outputchecks_virtex_${deviceNumber}`);
    if (marker) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const html = `
      <div class="OutputChecksSpecial" id="outputchecks_virtex_${deviceNumber}">
        <div class="OutputChecksHeader">Ausgangs-Checks Speziell (ViRTEx)</div>
        <div class="OutputChecksGrid">
          <label><input type="checkbox" id="virtex_bnckabel_${deviceNumber}" class="Device${deviceNumber}"> BNC-Kabel</label>
          <label><input type="checkbox" id="virtex_usbkabel_${deviceNumber}" class="Device${deviceNumber}"> USB-Kabel</label>
          <label><input type="checkbox" id="virtex_kameratrigger_${deviceNumber}" class="Device${deviceNumber}"> Kamera-Triggerkabel</label>
          <label><input type="checkbox" id="virtex_bnckupplungen_${deviceNumber}" class="Device${deviceNumber}"> BNC-Kupplungen und T-Stücke</label>
          <label><input type="checkbox" id="virtex_lasertrigger_${deviceNumber}" class="Device${deviceNumber}"> Laser-Triggerkabel</label>
          <label><input type="checkbox" id="virtex_ledtrigger_${deviceNumber}" class="Device${deviceNumber}"> LED-Triggerkabel</label>
          <label><input type="checkbox" id="virtex_smbkabel_${deviceNumber}" class="Device${deviceNumber}"> SMB-Kabel</label>
        </div>
        <div class="OutputChecksFooter">
          <label>Checked by: <input type="text" id="virtex_checked_by_${deviceNumber}" class="Device${deviceNumber}"></label>
        </div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addViRTExSpecialChecks error', e)}
}
function addFRAP() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("FRAP");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">VisiFRAP ${deviceNumber}</span>
          <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              <label for="modell_${deviceNumber}" class="inputtitle">Modell:</label>
              <select name="modell_${deviceNumber}" id="modell_${deviceNumber}" class="Device${deviceNumber}" >
                <option value="2D-VisiFRAP">2D-VisiFRAP</option>
                <option value="VisiFRAP-DC-Vis">VisiFRAP-DC-Vis</option>
                <option value="VisiFRAP-DC-355">VisiFRAP-DC-355</option> 
                <option value="VisiFRAP-DC-532">VisiFRAP-DC-532</option>                
              </select>
            </div>
          <div class="Container">
            Controller SN: 
            <input type="text" id="controllersn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Scan head SN: 
            <input type="text" id="scanheadsn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            DC Laser Modell: 
            <input type="text" id="dclasermodell_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            DC Laser Power: 
            <input type="text" id="dclaserpower_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            DC Laser SN: 
            <input type="text" id="dclasersn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Spiegel:
            <input type="text" id="spiegel_${deviceNumber}" class="Device${deviceNumber}" />
          </div> 
          <div class="Container">
            Adaptertyp LLG:
            <input type="text" id="adapterllg_${deviceNumber}" class="Device${deviceNumber}" />
          </div>     
          <div class="Container">
            Kommentar:
            <input type="text" id="kommentar_${deviceNumber}" class="Device${deviceNumber}" />
          </div>       
          
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addManufacturingFields(deviceNumber);
  // ensure FRAP-specific special checks are appended for interactive adds
  try{ if (typeof addFRAPSpecialChecks === 'function') addFRAPSpecialChecks(deviceNumber); }catch(e){}
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  return deviceNumber;
}
function addStage() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("Stage");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">Stage ${deviceNumber}</span>
          <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
          <div class="Container">
            <label for="brand_${deviceNumber}" class="inputtitle">Hersteller:</label>
            <select name="brand_${deviceNumber}" id="brand_${deviceNumber}" class="Device${deviceNumber}" >
              <option value="ASI">ASI</option>
              <option value="Ludl">Ludl</option>
              <option value="Märzhäuser">Märzhäuser</option>
              <option value="Zaber">Zaber</option>
              <option value="Prior">Prior</option>
              <option value="andere">andere</option>               
            </select>
          </div>
          <div class="Container">
            Modell:
            <input
              type="text"
              id="modell_${deviceNumber}"
              class="Device${deviceNumber}"
            />
          </div>
          <div class="Container">
            für Mikroskoptyp:
            <input type="text" id="fuermic_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Scanbereich:
            <input type="text" id="scanbereich_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Seriennummern:
          </div>
          <div class="Container">
            StageSN:
            <input type="text" id="stagesn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            ControllerSN.:
            <input type="text" id="controllersn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            PiezoSN:
            <input type="text" id="piezosn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            JoystickSN:
            <input type="text" id="joysticksn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            PiezoScanRange:
            <input type="number" id="piezoscanrange_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Firmwarevs.:
            <input type="text" id="fwvs_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Encoder:   
            <input type="text" id="encoder_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Tischeinsätze:
            <input type="text" id="inserts_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Kommentare:
            <input type="text" id="kommentare_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  return deviceNumber;
}
function addLED() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("LED");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Device LED" id="VS-LED">
          <div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">LED ${deviceNumber}</span>
              <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              <label for="brand_${deviceNumber}" class="inputtitle">Hersteller:</label>
              <select name="brand_${deviceNumber}" id="brand_${deviceNumber}" class="Device${deviceNumber}" >
                <option value="CoolLED">CoolLED</option>
                <option value="Lumencor">Lumencor</option>   
                <option value="Omicron">Omicron</option>
                <option value="Märzhäuser">Märzhäuser</option>  
                <option value="Zeiss">Zeiss</option>  
                <option value="andere">andere</option>             
              </select>
            </div>
            <div class="Container">
              Modell:
              <input
                type="text"
                id="modell_${deviceNumber}"
                class="Device${deviceNumber}"
              />
            </div>
            <div class="Container">
              Seriennummer:
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              <div class="inputtitle">Lichtleiter</div>       
              <input type="text" id="llg_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              <div class="inputtitle">Triggerkabel</div>       
              <input type="text" id="ttl_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              <div class="inputtitle">Mikroskopadapter</div>       
              <input type="text" id="microscopeadapter_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Kommentare:
              <input type="text" id="comments_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <table class="table">
              <tr>
                <th>Position</th>
                <th>Wellenlänge</th>
                <th>Filter</th>
              </tr>
              <tr>
                <td>1</td>
                <td><input type="text" id="firstwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="firstfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" id="secondwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="secondfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" id="thirdwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="thirdfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>4</td>  
                <td><input type="text" id="fourthwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fourthfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" id="fifthwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="fifthfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>6</td>
                <td><input type="text" id="sixthwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="sixthfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>7</td>
                <td><input type="text" id="seventhwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="seventhfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>8</td>
                <td><input type="text" id="eigthwavename_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="eigthfilter_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
            </table>

          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  return deviceNumber;
}
function addCustom() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("Custom");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Device Custom" id="custom">
          <div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">Custom ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
             <div class="Container">
              Hersteller:
              <input type="text" id="brand_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Modell:
              <input
                type="text"
                id="modell_${deviceNumber}"
                class="Device${deviceNumber}"
              />
            </div>
            <div class="Container">
              Seriennummer:
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Kommentar:
              <input type="text" id="comment_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <table class="table">
              <tr>
                <th><input type="text" id="headercolumn1_${deviceNumber}" class="Device${deviceNumber}" /></th>
                <th><input type="text" id="headercolumn2_${deviceNumber}" class="Device${deviceNumber}" /></th>
                <th><input type="text" id="headercolumn3_${deviceNumber}" class="Device${deviceNumber}" /></th>
                <th><input type="text" id="headercolumn4_${deviceNumber}" class="Device${deviceNumber}" /></th>
              </tr>
              <tr>
                <td><input type="text" id="headerrow1_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row1col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row1col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row1col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
                
              </tr>
              <tr>
                <td><input type="text" id="headerrow2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row2col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row2col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row2col4_${deviceNumber}" class="Device${deviceNumber}" /></td>               
              </tr>
              <tr>
                <td><input type="text" id="headerrow3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row3col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row3col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row3col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="headerrow4_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row4col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row4col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row4col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td><input type="text" id="headerrow5_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row5col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row5col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row5col4_${deviceNumber}" class="Device${deviceNumber}" /></td> 
              </tr>
              <tr>
                <td><input type="text" id="headerrow6_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row6col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row6col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row6col4_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
            </table>
            <div class="Container">
              Kommentar:
              <input type="text" id="comment_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  addManufacturingFields(deviceNumber);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  return deviceNumber;
}
function addMMLaser() {
  /*  */
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("MMLaser");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Device MMLaser" id="mmlaser">
          <div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">Multimode Laser ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
             <div class="Container">
              Hersteller:
              <input type="text" id="brand_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Modell:
              <input
                type="text"
                id="modell_${deviceNumber}"
                class="Device${deviceNumber}"
              />
            </div>
            <div class="Container">
              Seriennummer:
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              <div class="inputtitle">Lichtleiter</div>       
              <input type="text" id="llg_${deviceNumber}" class="Device${deviceNumber} " />
            </div>
            <div class="Container">
              Kommentare:
              <input type="text" id="comments_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <table class="table">
              <tr>
                <th>Position</th>
                <th>Wellenlänge</th>
                <th>Power</th>
              </tr>
              <tr>
                <td>Pos1</td>
                <td><input type="text" id="wave1_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power1_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
              <tr>
                <td>Pos2</td>
                <td><input type="text" id="wave2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power2_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
              <tr>
                <td>Pos3</td>
                <td><input type="text" id="wave3_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power3_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
               <tr>
                <td>Pos4</td>
                <td><input type="text" id="wave4_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power4_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
              <tr>
                <td>Pos5</td>
                <td><input type="text" id="wave5_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power5_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
              <tr>
                <td>Pos6</td>
                <td><input type="text" id="wave6_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power6_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
              <tr>
                <td>Pos7</td>
                <td><input type="text" id="wave7_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power7_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
              <tr>
                <td>Pos8</td>
                <td><input type="text" id="wave8_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="power8_${deviceNumber}" class="Device${deviceNumber}" /></td>    
              </tr>
            </table>
            


          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  addProcurementFields(deviceNumber);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  return deviceNumber;
}
function addOrbital() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("Orbital");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">Orbital ${deviceNumber}</span>
          <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
            <div class="Container">
              <label for="modell_${deviceNumber}" class="inputtitle">Modell:</label>
              <select name="modell_${deviceNumber}" id="modell_${deviceNumber}" class="Device${deviceNumber}" >
                <option value="Orbital-110-IsoTIRF">Orbital-110-IsoTIRF</option>
                <option value="Orbital-100">Orbital-100</option>
                <option value="Orbital-200">Orbital-200</option> 
                <option value="Orbital-500">Orbital-500</option>
                <option value="Orbital-600">Orbital-600</option>                 
              </select>
            </div>

          <div class="Container">
            SN: 
            <input type="text" id="scanheadsn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Firmwareversion: 
            <input type="text" id="fwversion_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Boardversion: 
            <input type="text" id="boardversion_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            für welches Mic? 
            <input type="text" id="fuermic_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            DC Laser Modell: 
            <input type="text" id="dclasermodell_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            DC Laser Power: 
            <input type="text" id="dclaserpower_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            DC Laser SN: 
            <input type="text" id="dclasersn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
           Attenuator (600):
            <input type="text" id="attenuator_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Magnification Changer (500):
            <input type="text" id="magchanger_${deviceNumber}" class="Device${deviceNumber}" />
          </div> 
          <div class="Container">
            Galvotyp und SN Nummern TIRF: 
            <input type="text" id="galvotirf_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Galvotyp und SN Nummern FRAP: 
            <input type="text" id="galvofrap_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Laserfiber FRAP:
            <input type="text" id="laserfiberfrap_${deviceNumber}" class="Device${deviceNumber}" />
          </div> 
          <div class="Container">
            Laserfiber TIRF:
            <input type="text" id="laserfibertirf_${deviceNumber}" class="Device${deviceNumber}" />
          </div> 
          <div class="Container">
            Kommentar:
            <input type="text" id="comment_${deviceNumber}" class="Device${deviceNumber}"/>
          </div> 
        </div>`;

  // insert the element into DOM
  document.getElementById("DeviceList").appendChild(element);

  // After the standard manufacturing block is added via addManufacturingFields(...)
  // insert the Orbital-specific manufacturing checks block right after it.
  try {
    const orbitalChecksHtml = `
      <div class="manufacturing" id="manufacturing_orbital_checks_${deviceNumber}">
        <div class="block-title">Manufacturing-Checks Orbital</div>
        <div class="Checkboxflex">
          <div class="Checkboxflexelement">
            TIRF?
            <input type="checkbox" id="tirfok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            FRAP?
            <input type="checkbox" id="frapok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            FRAP Pattern Max-proj. abgelegt?
            <input type="checkbox" id="frappattern_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out1?
            <input type="checkbox" id="ttl1ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out2?
            <input type="checkbox" id="ttl2ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out3?
            <input type="checkbox" id="ttl3ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out4?
            <input type="checkbox" id="ttl4ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out5?
            <input type="checkbox" id="ttl5ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out6?
            <input type="checkbox" id="ttl6ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            FW Update funktioniert?
            <input type="checkbox" id="fwupdate_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Power +-15V?
            <input type="checkbox" id="power15v_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Sync Input OK?
            <input type="checkbox" id="syncinput_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Sync Output OK?
            <input type="checkbox" id="syncoutput_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Analog Output X-Galvo (-2,49-2,49V) OK?
            <input type="checkbox" id="analogoutputxgalvo_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Analog Output Y-Galvo (-2,49-2,49V) OK?
            <input type="checkbox" id="analogoutputygalvo_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Power ±15V Kabel 2m (DIN 3p)
            <input type="checkbox" id="power15vkabel_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Kabel 2m (Mini Round 8p / D-Sub 9m)
            <input type="checkbox" id="ttlkabel2m_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Analog Kabel 2m (Mini Round 4p)
            <input type="checkbox" id="analogkabel2m_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            USB Kabel 3m
            <input type="checkbox" id="usbkabel3m_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
        </div>
      </div>
    `;

    // If the manufacturing block is already present, insert the orbital checks immediately.
    try{
      const existingMan = element.querySelector(`#manufacturing_${deviceNumber}`);
      if (existingMan) existingMan.insertAdjacentHTML('afterend', orbitalChecksHtml);
    }catch(e){/* ignore */}
  } catch (e) {
    console.warn('Orbital checks insertion error', e);
  }

  document.getElementById("DeviceList").appendChild(element);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  addManufacturingFields(deviceNumber);
  // ensure Orbital manufacturing checks are present synchronously (useful during parse)
  try{ if (typeof addOrbitalManufacturingChecks === 'function') addOrbitalManufacturingChecks(deviceNumber); }catch(e){}
  // append Orbital-specific special output checks (packaging) for interactive adds
  try{ if (typeof addOrbitalSpecialChecks === 'function') addOrbitalSpecialChecks(deviceNumber); }catch(e){}
  return deviceNumber;
}

// Append Orbital-specific output checks (Verpacken block) at the bottom of the Orbital device body
function addOrbitalSpecialChecks(deviceNumber){
  try{
    const marker = document.getElementById(`outputchecks_orbital_${deviceNumber}`);
    if (marker) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const html = `
      <div class="OutputChecksSpecial" id="outputchecks_orbital_${deviceNumber}">
        <div class="OutputChecksHeader">Ausgangs-Checks Speziell (Orbital)</div>
        <div class="OutputChecksGrid">
          <label><input type="checkbox" id="snattached_${deviceNumber}" class="Device${deviceNumber}"> SN angebracht?</label>
          <label><input type="checkbox" id="labelattached_${deviceNumber}" class="Device${deviceNumber}"> Labels angebracht?</label>
          <label><input type="checkbox" id="kappe_${deviceNumber}" class="Device${deviceNumber}"> Kappe Fiberport?</label>
          <label><input type="checkbox" id="headgalvokabel_${deviceNumber}" class="Device${deviceNumber}"> Controller zu Head Galvokabel?</label>
          <label><input type="checkbox" id="headpowerkabel_${deviceNumber}" class="Device${deviceNumber}"> Controller zu Head Powerkabel?</label>
          <label><input type="checkbox" id="tirflmskabel_${deviceNumber}" class="Device${deviceNumber}"> TIRF zu LMS TTL-Kabel?</label>
          <label><input type="checkbox" id="tirfpowerkabel_${deviceNumber}" class="Device${deviceNumber}"> ViRTEx zu FRAP vierpoliges Analogkabel?</label>
          <label><input type="checkbox" id="usbkabel_${deviceNumber}" class="Device${deviceNumber}"> USB-Kabel TIRF?</label>
          <label><input type="checkbox" id="qswitchkabel_${deviceNumber}" class="Device${deviceNumber}"> Q-Switch-Kabel DCLaser (600)?</label>
          <label><input type="checkbox" id="dclasernetzteil_${deviceNumber}" class="Device${deviceNumber}" />Netzteil DC Laser</label>
          <label><input type="checkbox" id="orbitalcontroller_${deviceNumber}" class="Device${deviceNumber}" />Orbital Controller</label>
          <label><input type="checkbox" id="orbitalhead_${deviceNumber}" class="Device${deviceNumber}" />Orbital Head</label>
          </div>
        <div class="OutputChecksFooter">
          <label>Checked by: <input type="text" id="orbital_checked_by_${deviceNumber}" class="Device${deviceNumber}"></label>
        </div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addOrbitalSpecialChecks error', e)}
}
// Insert ViRTEx manufacturing checks synchronously (used during parsing)
function addViRTExManufacturingChecks(deviceNumber){
  try{
    const markerId = `manufacturing_virtex_checks_${deviceNumber}`;
    if (document.getElementById(markerId)) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const virtexHtml = `
      <div class="manufacturing" id="manufacturing_virtex_checks_${deviceNumber}">
        <div class="block-title">ViRTEx Manufacturing Checks</div>
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="fwok_${deviceNumber}" class="Device${deviceNumber}"> FW Update OK when built</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="snattached_${deviceNumber}" class="Device${deviceNumber}"> SN angebracht</label>  
        </div>
        Digital Ports Test:
        <div class="Checkboxflex">  
          <label class="Checkboxflexelement"><input type="checkbox" id="ttloutok_${deviceNumber}" class="Device${deviceNumber}"> TTL out OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="caminputok_${deviceNumber}" class="Device${deviceNumber}"> Cam Input OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="syncok_${deviceNumber}" class="Device${deviceNumber}"> ln0 / TriggerIN / SyncIn OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="camoutok_${deviceNumber}" class="Device${deviceNumber}"> Cam out OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="triggerready_${deviceNumber}" class="Device${deviceNumber}"> Trigger ready OK</label>
          
        </div>
        mit Laser Logic:
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="llttlout_${deviceNumber}" class="Device${deviceNumber}"> TTL Output Laser Logic OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="llinterlock_${deviceNumber}" class="Device${deviceNumber}"> Interlock OK</label>
        </div>
        mit Multiplexer:
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="mpttloutled_${deviceNumber}" class="Device${deviceNumber}"> TTL Output LED Lampe OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="mpttloutlaser_${deviceNumber}" class="Device${deviceNumber}"> TTL Output Laser OK</label>
        </div>
        mit Orbital:
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="testorbitalok_${deviceNumber}" class="Device${deviceNumber}"> Orbital OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="testorbitallaseroutputok_${deviceNumber}" class="Device${deviceNumber}"> TTL Output Laser OK</label>
        </div>
        mit Break-out Box:
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="testqswitchok_${deviceNumber}" class="Device${deviceNumber}"> QSwitch OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="testaa0-a3ok_${deviceNumber}" class="Device${deviceNumber}"> TTL A0-A3 OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="testab0-b6ok_${deviceNumber}" class="Device${deviceNumber}"> TTL B0-B6 OK</label>
        </div>
        Analog Ports Test:
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="analogportsanzahlok_${deviceNumber}" class="Device${deviceNumber}"> Number of ports correct when on</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="ok0-10v_${deviceNumber}" class="Device${deviceNumber}"> 0-10V OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="ok05v_${deviceNumber}" class="Device${deviceNumber}"> 0-5V OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="analogok_${deviceNumber}" class="Device${deviceNumber}"> Analog #3 #4 OK</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="ok-5-5v_${deviceNumber}" class="Device${deviceNumber}"> -5V..+5V OK</label>
        </div>
        Kabel Kit:
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="usb3m_${deviceNumber}" class="Device${deviceNumber}">USB 2.0 3m</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="analogminirund_${deviceNumber}" class="Device${deviceNumber}">Analog #3 #4 miniRund 4p Kabel 3m</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="hd26m_${deviceNumber}" class="Device${deviceNumber}">Kabel HD26M/M 5m</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="ttloutvirtexadapterkabel_${deviceNumber}" class="Device${deviceNumber}">TTL Output Virtex Adapter Kabel</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="ttlledadapterkabel_${deviceNumber}" class="Device${deviceNumber}">TTL Output LED Lamp Adapter Kabel</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="ttlinputorbitalkabel_${deviceNumber}" class="Device${deviceNumber}">TTL Input Orbital Kabel ( miniRund 8p – D-Sub 9m ) 2m</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="ttloutlaserkabel_${deviceNumber}" class="Device${deviceNumber}">TTL Output Laser Kabel</label>
          <label class="Checkboxflexelement"><input type="text" id="camerattlkabel_${deviceNumber}" class="Device${deviceNumber}">Kamera TTL Peitsche(n) für die Kundenkamera(s)</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="smbkabel_${deviceNumber}" class="Device${deviceNumber}">VS SMB D-Sub9 auf BNC Adapterkabel (nicht bei sCMOS Kameras)</label>
          <label class="Checkboxflexelement"><input type="text" id="bnckabel3m_${deviceNumber}" class="Device${deviceNumber}">BNC Kabel 3m</label>
          <label class="Checkboxflexelement"><input type="text" id="bnctstueck_${deviceNumber}" class="Device${deviceNumber}">BNC T-Stück</label>
          <label class="Checkboxflexelement"><input type="text" id="bnc-sma_${deviceNumber}" class="Device${deviceNumber}"> SMA-BNC Adapterkabel (Hamamatsu/PCO)</label>
          <label class="Checkboxflexelement"><input type="text" id="bnckupplung_${deviceNumber}" class="Device${deviceNumber}">BNC Kupplungen (Hamamatsu/PCO)</label>
          </div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', virtexHtml);
  }catch(e){console.warn('addViRTExManufacturingChecks error', e)}
}

// Insert LMS manufacturing checks (Stromversorgung, Digital Ports, Cable-Kit)
function addLMSManufacturingChecks(deviceNumber){
  try{
    const markerId = `manufacturing_lms_checks_${deviceNumber}`;
    if (document.getElementById(markerId)) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const html = `
      <div class="manufacturing" id="manufacturing_lms_checks_${deviceNumber}">
        <div class="block-title">Stromversorgung</div>
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_laser1_${deviceNumber}" class="Device${deviceNumber}"> Test Laser 1 (405) OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_laser2_${deviceNumber}" class="Device${deviceNumber}"> Test Laser 2 (445) OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_laser3_${deviceNumber}" class="Device${deviceNumber}"> Test Laser 3 (488) OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_laser4_${deviceNumber}" class="Device${deviceNumber}"> Test Laser 4 (515) OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_laser5_${deviceNumber}" class="Device${deviceNumber}"> Test Laser 5 (561) OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_laser6_${deviceNumber}" class="Device${deviceNumber}"> Test Laser 6 (640) OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_laser_safety_12v_${deviceNumber}" class="Device${deviceNumber}"> Test Laser Safety 12V OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_power_12v_${deviceNumber}" class="Device${deviceNumber}"> LMS Power 12V</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_power_15v_${deviceNumber}" class="Device${deviceNumber}"> LMS Power 15V</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_galvo_pm15_${deviceNumber}" class="Device${deviceNumber}"> Test Galvo ±15V OK?</label>
        </div>

        <div class="block-title">Test Digital Ports</div>
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_ttl1_${deviceNumber}" class="Device${deviceNumber}"> Test LMS TTL1 OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_ttl_input_${deviceNumber}" class="Device${deviceNumber}"> Test TTL-Input OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_ttl2_${deviceNumber}" class="Device${deviceNumber}"> Test LMS TTL2 OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_interlock_${deviceNumber}" class="Device${deviceNumber}"> Test Interlock OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_psw0_${deviceNumber}" class="Device${deviceNumber}"> Test PSw0 OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_smb_${deviceNumber}" class="Device${deviceNumber}"> Test SMB OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_psw1_${deviceNumber}" class="Device${deviceNumber}"> Test PSw1 OK?</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_orbital_ilas_${deviceNumber}" class="Device${deviceNumber}"> Test Orbital / iLas OK?</label>
        </div>

        <div class="block-title">Cable-Kit</div>
        <div class="Checkboxflex">
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_cable_laserpower_${deviceNumber}" class="Device${deviceNumber}"> Laser Power Kabel Neutrik 12p 2m</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_cable_galvopower_${deviceNumber}" class="Device${deviceNumber}"> Galvo Power / Laser Safety Kabel DIN 7p 2m</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_cable_ttl_no1_${deviceNumber}" class="Device${deviceNumber}"> TTL-Kabel mini Rund 8p 2m No1</label>
          <label class="Checkboxflexelement"><input type="checkbox" id="lms_cable_ttl_no2_${deviceNumber}" class="Device${deviceNumber}"> TTL-Kabel mini Rund 8p 2m No2</label>
        </div>

        <div class="OutputChecksFooter">Checked by: <input type="text" id="lms_manufacturing_checked_by_${deviceNumber}" class="Device${deviceNumber}"></div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addLMSManufacturingChecks error', e)}
}

// Insert Orbital manufacturing checks synchronously (used during parsing)
function addOrbitalManufacturingChecks(deviceNumber){
  try{
    const markerId = `manufacturing_orbital_checks_${deviceNumber}`;
    if (document.getElementById(markerId)) return;
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;
    const orbitalHtml = `
      <div class="manufacturing" id="manufacturing_orbital_checks_${deviceNumber}">
        <div class="block-title">Manufacturing-Checks Orbital</div>
        <div class="Checkboxflex">
          <div class="Checkboxflexelement">
            TIRF?
            <input type="checkbox" id="tirfok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            FRAP?
            <input type="checkbox" id="frapok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            FRAP Pattern Max-proj. abgelegt?
            <input type="checkbox" id="frappattern_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out1?
            <input type="checkbox" id="ttl1ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out2?
            <input type="checkbox" id="ttl2ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out3?
            <input type="checkbox" id="ttl3ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out4?
            <input type="checkbox" id="ttl4ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out5?
            <input type="checkbox" id="ttl5ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Out6?
            <input type="checkbox" id="ttl6ok_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            FW Update funktioniert?
            <input type="checkbox" id="fwupdate_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Power +-15V?
            <input type="checkbox" id="power15v_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Sync Input OK?
            <input type="checkbox" id="syncinput_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Sync Output OK?
            <input type="checkbox" id="syncoutput_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Analog Output X-Galvo (-2,49-2,49V) OK?
            <input type="checkbox" id="analogoutputxgalvo_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Analog Output Y-Galvo (-2,49-2,49V) OK?
            <input type="checkbox" id="analogoutputygalvo_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Power ±15V Kabel 2m (DIN 3p)
            <input type="checkbox" id="power15vkabel_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            TTL Kabel 2m (Mini Round 8p / D-Sub 9m)
            <input type="checkbox" id="ttlkabel2m_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            Analog Kabel 2m (Mini Round 4p)
            <input type="checkbox" id="analogkabel2m_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Checkboxflexelement">
            USB Kabel 3m
            <input type="checkbox" id="usbkabel3m_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
        </div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', orbitalHtml);
  }catch(e){console.warn('addOrbitalManufacturingChecks error', e)}
}
function addInkubation() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("Inkubation");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Deviceheader">
          <span class="Devicename" id="Name${deviceNumber}">Inkubation ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
          <div class="Container">
            <label for="brand_${deviceNumber}" class="inputtitle">Hersteller:</label>
            <select name="brand_${deviceNumber}" id="brand_${deviceNumber}" class="Device${deviceNumber}" >
              <option value="OkoLab">OkoLab</option>
              <option value="Tokai-Hit">Tokai-Hit</option>
              <option value="Pecon">Pecon</option>
              <option value="Life-Imaging-Services">Life-Imaging-Services</option>
              <option value="andere">andere</option>               
            </select>
          </div>
          <div class="Container">
            Modell:
            <input
              type="text"
              id="modell_${deviceNumber}"
              class="Device${deviceNumber}"
            />
          </div>
          <div class="Container">
            <div class="inputtitle">für Mikroskoptyp/Stage:</div>     
            <input type="text" id="fuermic_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Seriennummern:
          </div>
          <div class="Container">
            Touch-Controller SN:
            <input type="text" id="touchsn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            T-Unit SN.:
            <input type="text" id="tunitsn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            CO2/O2-Unit SN:
            <input type="text" id="co2sn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Air-Pump SN:
            <input type="text" id="airpumpsn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            active Humidifier SN:
            <input type="text" id="humidifiersn_${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Firmwarevs.:
            <input type="text" id="fwvs_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            <div class="inputtitle">Inkubator:</div>
            <input type="text" id="inkubator_${deviceNumber}" class="Device${deviceNumber} " />
          </div>
          <div class="Container">
            <div class="inputtitle">CO2-Chamber:</div>        
            <input type="text" id="co2chamber_${deviceNumber}" class="Device${deviceNumber} " />
          </div>
          <div class="Container">
            Objektivheizer:
            <input type="text" id="objektivheizer_${deviceNumber}" class="Device${deviceNumber} " />
          </div>
          <div class="Container">
            <div class="inputtitle">Halterahmen:</div>
            <input type="text" id="inserts1_${deviceNumber}" class="Device${deviceNumber} " />
          </div>
          <div class="Container">
            Kommentare:
            <input type="text" id="comments_${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="OutputChecksSpecial" id="outputchecks_inkubation_${deviceNumber}">
            <div class="OutputChecksHeader">Ausgangs-Checks Speziell für Inkubation</div>
            <div class="OutputChecksGrid">
              <label><input type="checkbox" id="tempsensorchamberverpackt_${deviceNumber}" class="Device${deviceNumber}"> Tempsensor (Chamber)</label>
              <label><input type="checkbox" id="tempsensorsampleverpackt_${deviceNumber}" class="Device${deviceNumber}"> Tempsensor (Sample)</label>
              <label><input type="checkbox" id="co2tubesverpackt_${deviceNumber}" class="Device${deviceNumber}"> CO2-Schläuche</label>
              <label><input type="checkbox" id="druckmindererverpackt_${deviceNumber}" class="Device${deviceNumber}"> Druckminderer</label>
              <label><input type="checkbox" id="airfiltertubesverpackt_${deviceNumber}" class="Device${deviceNumber}"> Luftfilter/Schläuche</label>
              <label><input type="checkbox" id="mitsampleco2sensor_${deviceNumber}" class="Device${deviceNumber}"> Sample CO2/Humidity sensor</label>
              <label><input type="checkbox" id="co2controllerverpackt_${deviceNumber}" class="Device${deviceNumber}"> CO2-Controller</label>
              <label><input type="checkbox" id="humidifierverpackt_${deviceNumber}" class="Device${deviceNumber}"> Humidifier</label>
              <label><input type="checkbox" id="temperaturecontrollerverpackt_${deviceNumber}" class="Device${deviceNumber}"> Temperature Controller</label>
              <label><input type="checkbox" id="co2chamberverpackt_${deviceNumber}" class="Device${deviceNumber}"> CO2 Chamber</label>
              <label><input type="checkbox" id="airpumpverpackt_${deviceNumber}" class="Device${deviceNumber}"> Air Pump</label>
              <label><input type="checkbox" id="incubatorverpackt_${deviceNumber}" class="Device${deviceNumber}"> Incubator</label>
              <label><input type="checkbox" id="objectiveheaterverpackt_${deviceNumber}" class="Device${deviceNumber}"> Objective Heater</label>
              <label><input type="checkbox" id="controlpodverpackt_${deviceNumber}" class="Device${deviceNumber}"> Control Pod</label>
              </div>
            <div class="OutputChecksFooter">Checked by: <input type="text" id="inkubation_checked_by_${deviceNumber}" class="Device${deviceNumber}"></div>
          </div>

        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  addProcurementFields(deviceNumber);
  return deviceNumber;
}
function addDualCam() {
  //var deviceNumber = document.getElementsByClassName("Devices").length;
  var deviceNumber = 1;
  while (document.getElementById(`Device${deviceNumber}`) != null) {
    deviceNumber = deviceNumber + 1;
  }

  //var deviceID = `${deviceNumber}`;
  var element = document.createElement("div");
  element.classList.add("Devices");
  element.classList.add("DualCam");
  element.id = `Device${deviceNumber}`;
  element.innerHTML = `<div class="Device DualCam" id="custom">
          <div class="Deviceheader">
            <span class="Devicename" id="Name${deviceNumber}">DualCam/Splitter ${deviceNumber}</span>
            <span class="button-group"><button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button><button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button></span>
          </div>
          <div class="Devicebody" id="Body${deviceNumber}">
             <div class="Container">
              Hersteller:
              <input type="text" id="brand_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              Modell:
              <input
                type="text"
                id="modell_${deviceNumber}"
                class="Device${deviceNumber}"
              />
            </div>
            <div class="Container">
              Seriennummer:
              <input type="text" id="serialnr_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              <div class="inputtitle">Filterrad-Controller:</div>
                     
              <input type="text" id="filterradcontrollersn_${deviceNumber}" class="Device${deviceNumber} " />
            </div>
            <div class="Container">
              <div class="inputtitle">Filterwürfel/Filter1:</div>       
              <input type="text" id="filtercombi1_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
            <div class="Container">
              <div class="inputtitle">Filterwürfel/Filter2:</div>
              <input type="text" id="filtercombi2_${deviceNumber}" class="Device${deviceNumber} " />
            </div>
            <div class="Container">
              <div class="inputtitle">Filterwürfel/Filter3:</div>
              <input type="text" id="filtercombi3_${deviceNumber}" class="Device${deviceNumber} " />
            </div>
            <table class="table">
              <tr>
                <th>Position</th>
                <th>Filterrad 1</th>
                <th>Filterrad 2</th>
              </tr>
              <tr>
                <td> Pos1 </td>
                <td><input type="text" id="row1col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row1col3_${deviceNumber}" class="Device${deviceNumber}" /></td>               
              </tr>
              <tr>
                <td> Pos2</td>
                <td><input type="text" id="row2col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row2col3_${deviceNumber}" class="Device${deviceNumber}" /></td>            
              </tr>
              <tr>
                <td>Pos3</td>
                <td><input type="text" id="row3col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row3col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>Pos4</td>
                <td><input type="text" id="row4col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row4col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>Pos5</td>
                <td><input type="text" id="row5col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row5col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
              <tr>
                <td>Pos6</td>
                <td><input type="text" id="row6col2_${deviceNumber}" class="Device${deviceNumber}" /></td>
                <td><input type="text" id="row6col3_${deviceNumber}" class="Device${deviceNumber}" /></td>
              </tr>
            <div class="Container">
              Sonstiges:
              <input type="text" id="else1_${deviceNumber}" class="Device${deviceNumber}" />
            </div>
          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  document
    .getElementById(`modell_${deviceNumber}`)
    .addEventListener("change", function () {
      updateHeader(`Name${deviceNumber}`, `modell_${deviceNumber}`);
    });
  addProcurementFields(deviceNumber);
  
  return deviceNumber;
}

// Add procurement / manufacturing fields to a device body
function addProcurementFields(deviceNumber){
  try{
    let device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    let body = device.querySelector('.Devicebody');
    if (!body) return;
    const procHtml = `
        <div class="procurement" id="procurement_${deviceNumber}">
          <div class="block-title">Procurement</div>
          <div class="row"><label for="purchaser_${deviceNumber}">Purchaser</label><input type="text" id="purchaser_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="ordernr_${deviceNumber}">Order Nr.</label><input type="text" id="ordernr_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="order_date_${deviceNumber}">Order Date</label><input type="date" id="order_date_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="est_delivery_${deviceNumber}">Estimated Delivery</label><input type="date" id="est_delivery_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="orderfile_${deviceNumber}">Order File (URL)</label><input type="url" id="orderfile_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="quote_${deviceNumber}">Quotes (URL)</label><input type="url" id="quote_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="supplierconf_${deviceNumber}">Supplier Conf. (URL)</label><input type="url" id="supplierconf_${deviceNumber}" class="Device${deviceNumber}" /></div>
        </div>`;
    body.insertAdjacentHTML('beforeend', procHtml);
  }catch(e){console.log('addProcurementFields error',e)}
}

// Month-grid calendar UI: show a month grid with color-coded items
const calendarState = {
  year: (new Date()).getFullYear(),
  month: (new Date()).getMonth() // 0-based
};

// Click-outside and Esc handlers for calendar modal
function _calendarOutsideClickListener(e){
  try{
    const cal = document.getElementById('CalendarView');
    if (!cal) return;
    // if click is outside the calendar element, hide it
    if (cal.style.display !== 'none' && !cal.contains(e.target)){
      hideCalendar();
    }
  }catch(err){console.log('outside click handler error',err)}
}

function _calendarEscListener(e){
  try{
    if (e.key === 'Escape' || e.key === 'Esc'){
      const cal = document.getElementById('CalendarView');
      if (cal && cal.style.display !== 'none'){
        hideCalendar();
      }
    }
  }catch(err){console.log('esc handler error',err)}
}

// Show/hide calendar and manage attaching/removing listeners
function showCalendar(){
  const cal = document.getElementById('CalendarView');
  if (!cal) return;
  cal.style.display = 'block';
  // position near the CalendarToggleIcon if present
  try{
    const icon = document.getElementById('CalendarToggleIcon');
    if (icon){
      const rect = icon.getBoundingClientRect();
      // place calendar slightly below and left-aligned to the icon
      cal.style.position = 'fixed';
      cal.style.top = (rect.bottom + 8) + 'px';
      // avoid overflowing right edge
      const left = Math.min(window.innerWidth - cal.offsetWidth - 12, rect.right - cal.offsetWidth + 24);
      cal.style.left = (left > 12 ? left : (rect.left - cal.offsetWidth + rect.width)) + 'px';
      cal.style.transform = 'none';
    }
  }catch(e){}
  const showBtn = document.getElementById('ShowCalendar');
  const hideBtn = document.getElementById('HideCalendar');
  if (showBtn) showBtn.style.display = 'none';
  if (hideBtn) hideBtn.style.display = 'inline';
  renderCalendar(calendarState.year, calendarState.month);
  // attach listeners (use capture for clicks to detect outside clicks)
  document.addEventListener('click', _calendarOutsideClickListener, true);
  document.addEventListener('keydown', _calendarEscListener, true);
}

function hideCalendar(){
  // remove listeners first
  document.removeEventListener('click', _calendarOutsideClickListener, true);
  document.removeEventListener('keydown', _calendarEscListener, true);
  const cal = document.getElementById('CalendarView');
  if (cal) cal.style.display = 'none';
  const showBtn = document.getElementById('ShowCalendar');
  const hideBtn = document.getElementById('HideCalendar');
  if (showBtn) showBtn.style.display = 'inline';
  if (hideBtn) hideBtn.style.display = 'none';
}

// Toggle wrapper used by the fixed calendar icon
function toggleCalendar(){
  const cal = document.getElementById('CalendarView');
  if (!cal) return;
  if (cal.style.display && cal.style.display !== 'none') hideCalendar();
  else showCalendar();
}

function prevMonth(){
  if (calendarState.month === 0){ calendarState.month = 11; calendarState.year -= 1; }
  else { calendarState.month -= 1; }
  renderCalendar(calendarState.year, calendarState.month);
}
function nextMonth(){
  if (calendarState.month === 11){ calendarState.month = 0; calendarState.year += 1; }
  else { calendarState.month += 1; }
  renderCalendar(calendarState.year, calendarState.month);
}

function collectEvents(){
  const events = [];
  const devices = document.getElementsByClassName('Devices');
  for (let i=0;i<devices.length;i++){
    const id = devices[i].id.replace('Device','');
    const deviceNameEl = document.getElementById(`modell_${id}`);
    // If the device container has class 'VV', prefer the short label 'VV' for calendar entries
    const deviceEl = devices[i];
    let name = '';
    if (deviceEl && deviceEl.classList && deviceEl.classList.contains('VV')){
      name = 'VV';
    } else {
      name = (deviceNameEl && deviceNameEl.value && deviceNameEl.value.trim() !== '') ? deviceNameEl.value.trim() : `device${id}`;
    }
    const order_date = document.getElementById(`order_date_${id}`)?.value || '';
    const est_delivery = document.getElementById(`est_delivery_${id}`)?.value || '';
  // device_delivery removed from procurement fields; look for production end for manufacturing devices
  const production_end = document.getElementById(`production_end_${id}`)?.value || '';
    const orderfile = document.getElementById(`orderfile_${id}`)?.value || '';
    const quote = document.getElementById(`quote_${id}`)?.value || '';
    const supplierconf = document.getElementById(`supplierconf_${id}`)?.value || '';

    if (order_date) events.push({date: order_date, type: 'order', id, name, url: orderfile});
    if (est_delivery) events.push({date: est_delivery, type: 'est', id, name, url: quote});
  if (production_end) events.push({date: production_end, type: 'production', id, name});

    // Also scan device-local fields for laser-specific order / delivery dates
    try{
      const localEls = devices[i].querySelectorAll('[id]');
      Array.from(localEls).forEach(el => {
        if (!el.id) return;
        const lid = el.id.toLowerCase();
        // match patterns like 'firstlasorderdate_1', 'thirdlasdelivery_2', 'secondlasorder_3'
        if (lid.includes('lasorderdate') || lid.includes('lasdelivery') || /lasorder(_|date)/.test(lid)){
          const val = document.getElementById(el.id)?.value || '';
          if (!val) return;
          // accept only ISO-like date strings (YYYY-MM-DD)
          if (!/^\d{4}-\d{2}-\d{2}/.test(val)) return;
          const etype = lid.includes('order') ? 'order' : 'est';
          // extract position prefix if present (e.g. 'first','second') for nicer label
          const posMatch = lid.match(/^([a-z]+)las/);
          const pos = posMatch && posMatch[1] ? posMatch[1] : 'laser';
          const eventName = `${name} (${pos})`;
          events.push({date: val, type: etype, id, name: eventName, url: ''});
        }
      });
    }catch(e){/* ignore local laser date parsing errors */}
  }

  // system delivery (global basics field)
  const systemDelivery = document.getElementById('system_delivery_dt')?.value || '';
  if (systemDelivery) {
    // systemDelivery is date-only input (YYYY-MM-DD)
    events.push({date: systemDelivery, type: 'system', id: 'system', name: 'System Delivery'});
  }
  // Testphase (global basics fields) - expand to full inclusive date range
  const testStart = document.getElementById('testphase_start')?.value || '';
  const testEnd = document.getElementById('testphase_end')?.value || '';
  try{
    if (testStart) {
      // if no end provided, treat as single-day range
      const startDate = new Date(testStart);
      let endDate = testEnd ? new Date(testEnd) : new Date(testStart);
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        // invalid dates, fallback to single entries
        if (testStart) events.push({date: testStart, type: 'test', id: 'testphase', name: 'Testphase'});
        if (testEnd) events.push({date: testEnd, type: 'test', id: 'testphase', name: 'Testphase'});
      } else {
        // if end < start, swap
        if (endDate < startDate){ const tmp = endDate; endDate = startDate; startDate.setTime(tmp.getTime()); }
        // iterate days inclusive
        const cur = new Date(startDate);
        while (cur <= endDate){
          const dstr = cur.toISOString().slice(0,10);
          events.push({date: dstr, type: 'test', id: 'testphase', name: 'Testphase'});
          cur.setDate(cur.getDate()+1);
        }
      }
    } else if (testEnd) {
      // only end provided, treat as single-day
      events.push({date: testEnd, type: 'test', id: 'testphase', name: 'Testphase'});
    }
  }catch(e){console.log('testphase range parse error',e);}
  // Verpackung / Versand (packaging/shipping) - single date
  const shipping = document.getElementById('verpackung_versand')?.value || '';
  if (shipping) events.push({date: shipping, type: 'shipping', id: 'shipping', name: 'Verpackung/Versand'});
  return events;
}

function renderCalendar(year, month){
  const container = document.getElementById('CalendarContent');
  container.innerHTML = '';

  // header with nav
  const header = document.createElement('div');
  header.className = 'calendar-nav';
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  header.innerHTML = `<button onclick="prevMonth()">◀</button><span class="calendar-title">${monthNames[month]} ${year}</span><button onclick="nextMonth()">▶</button>`;
  container.appendChild(header);

  // weekday names
  const weekdays = document.createElement('div');
  weekdays.className = 'calendar-weekdays';
  const dnames = ['Mo','Tu','We','Th','Fr','Sa','Su'];
  dnames.forEach(dn => { const w = document.createElement('div'); w.className='calendar-weekday'; w.textContent = dn; weekdays.appendChild(w); });
  container.appendChild(weekdays);

  // grid
  const grid = document.createElement('div');
  grid.className = 'calendar-grid';

  // first day of month (ISO: treat Monday as first)
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7; // 0=Mon
  const daysInMonth = new Date(year, month+1, 0).getDate();
  // render 6 weeks (6*7=42 cells)
  const events = collectEvents();

  for (let cell=0; cell<42; cell++){
    const dayIndex = cell - startDay + 1;
    const cellEl = document.createElement('div');
    cellEl.className = 'calendar-day';
    if (dayIndex >=1 && dayIndex <= daysInMonth){
      const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(dayIndex).padStart(2,'0')}`;
      const num = document.createElement('div'); num.className='date-number'; num.textContent = dayIndex; cellEl.appendChild(num);

      // find events on that date
      const evs = events.filter(ev => ev.date === dateStr);
      evs.forEach(ev => {
        const badge = document.createElement('span');
        badge.className = 'event-badge event-'+ev.type;
        badge.title = `${ev.type.toUpperCase()}: ${ev.name} ${ev.datetime?(' @ '+ev.datetime):''}`;
        badge.textContent = ev.name.length>10?ev.name.slice(0,9)+'…':ev.name;
        badge.onclick = function(e){ if (ev.url) window.open(ev.url,'_blank'); e.stopPropagation(); };
        cellEl.appendChild(badge);
      });

      // highlight today
      const today = new Date();
      if (today.getFullYear()===year && today.getMonth()===month && today.getDate()===dayIndex){
        cellEl.classList.add('calendar-today');
      }
    } else {
      cellEl.className = 'calendar-day calendar-empty';
    }
    grid.appendChild(cellEl);
  }
  container.appendChild(grid);

  // legend
  const legend = document.createElement('div'); legend.className='calendar-legend';
  legend.innerHTML = `<span><span class='event-badge event-order'></span> Order</span>
                      <span><span class='event-badge event-est'></span> Estimated</span>
                      <span><span class='event-badge event-production'></span> Production end</span>
                      <span><span class='event-badge event-system'></span> System Delivery</span>
                      <span><span class='event-badge event-test'></span> Testphase</span>
                      <span><span class='event-badge event-shipping'></span> Verpackung/Versand</span>`;
  container.appendChild(legend);
}

// Add manufacturing-specific fields for devices that are built in-house
function addManufacturingFields(deviceNumber){
  try{
    let device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    let body = device.querySelector('.Devicebody');
    if (!body) return;
    const manHtml = `
      <div class="manufacturing" id="manufacturing_${deviceNumber}">
        <div class="block-title">Manufacturing</div>
        <div class="row"><label for="responsible_${deviceNumber}">Responsible</label><input type="text" id="responsible_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="production_end_${deviceNumber}">Planned End of Production</label><input type="date" id="production_end_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label for="prod_comment_${deviceNumber}">Production Comment</label><input type="text" id="prod_comment_${deviceNumber}" class="Device${deviceNumber}" /></div>
          <div class="row"><label>Production Status</label>
            <div class="ProdStatusRow">
              <label><input type="radio" id="prodstatus_partsmissing_${deviceNumber}" name="production_status_radio_${deviceNumber}" value="parts missing" onchange="document.getElementById('production_status_${deviceNumber}').value=this.value"> parts missing</label>
              <label><input type="radio" id="prodstatus_inproduction_${deviceNumber}" name="production_status_radio_${deviceNumber}" value="In production" onchange="document.getElementById('production_status_${deviceNumber}').value=this.value"> In production</label>
              <label><input type="radio" id="prodstatus_intest_${deviceNumber}" name="production_status_radio_${deviceNumber}" value="in test" onchange="document.getElementById('production_status_${deviceNumber}').value=this.value"> in test</label>
              <label><input type="radio" id="prodstatus_complete_${deviceNumber}" name="production_status_radio_${deviceNumber}" value="production complete" onchange="document.getElementById('production_status_${deviceNumber}').value=this.value"> production complete</label>
            </div>
          </div>
          <input type="hidden" id="production_status_${deviceNumber}" class="Device${deviceNumber}" value="" />
      </div>`;
    body.insertAdjacentHTML('beforeend', manHtml);
  }catch(e){console.log('addManufacturingFields error',e)}
}

// Add a general output checks flexbox for each device
function addGeneralOutputChecks(deviceNumber){
  try{
    const markerId = `outputchecks_${deviceNumber}`;
    if (document.getElementById(markerId)) return; // already added
    const device = document.getElementById(`Device${deviceNumber}`);
    if (!device) return;
    const body = device.querySelector('.Devicebody');
    if (!body) return;

    const html = `
      <div class="OutputChecks" id="${markerId}">
        <div class="OutputChecksHeader">Ausgangs-Checks Allgemein</div>
        <div class="OutputChecksGrid">
          <label><input type="checkbox" id="sauber_${deviceNumber}" class="Device${deviceNumber}"> Sauber</label>
          <label><input type="checkbox" id="funktion_${deviceNumber}" class="Device${deviceNumber}"> Funktion</label>
          <label><input type="checkbox" id="vslabel_${deviceNumber}" class="Device${deviceNumber}"> VSLabel</label>
          <label><input type="checkbox" id="tools_${deviceNumber}" class="Device${deviceNumber}"> Tools</label>
          <label><input type="checkbox" id="manual_${deviceNumber}" class="Device${deviceNumber}"> Manual</label>
          <label><input type="checkbox" id="keys_${deviceNumber}" class="Device${deviceNumber}"> Keys</label>
          <label><input type="checkbox" id="interlock_${deviceNumber}" class="Device${deviceNumber}"> Interlock</label>
          <label><input type="checkbox" id="datenkabel_${deviceNumber}" class="Device${deviceNumber}"> Datenkabel</label>
          <label><input type="checkbox" id="interface_${deviceNumber}" class="Device${deviceNumber}"> Interface</label>
          <label><input type="checkbox" id="triggerkabel_${deviceNumber}" class="Device${deviceNumber}"> Triggerkabel</label>
          <label><input type="checkbox" id="dongle_${deviceNumber}" class="Device${deviceNumber}"> Dongle</label>
          <label><input type="checkbox" id="stromkabel_${deviceNumber}" class="Device${deviceNumber}"> Stromkabel</label>
          <label><input type="checkbox" id="netzteil_${deviceNumber}" class="Device${deviceNumber}"> Netzteil</label>
          <label><input type="checkbox" id="v230_${deviceNumber}" class="Device${deviceNumber}"> 230V</label>
          <label><input type="checkbox" id="v120_${deviceNumber}" class="Device${deviceNumber}"> 120V</label>
          <label><input type="checkbox" id="fiber_llg_${deviceNumber}" class="Device${deviceNumber}"> Fiber/LLG</label>
          <label><input type="checkbox" id="sn_${deviceNumber}" class="Device${deviceNumber}"> S/N</label>
          <label><input type="checkbox" id="supportjacks_${deviceNumber}" class="Device${deviceNumber}"> Support Jacks</label>
          <label><input type="checkbox" id="geraetverpackt_${deviceNumber}" class="Device${deviceNumber}"> Gerät verpackt</label>
        </div>
        <div class="OutputChecksFooter">
          <label>Checked by: <input type="text" id="checked_by_${deviceNumber}" class="Device${deviceNumber}"></label>
        </div>
      </div>
    `;
    body.insertAdjacentHTML('beforeend', html);
  }catch(e){console.warn('addGeneralOutputChecks error', e)}
}

// Auto-attach general output checks to newly added devices
document.addEventListener('DOMContentLoaded', function(){
  try{
    const list = document.getElementById('DeviceList');
    if (!list) return;
    // add for existing devices
    Array.from(list.getElementsByClassName('Devices')).forEach(dev => {
      const id = dev.id && dev.id.replace && dev.id.replace('Device','');
      if (id) addGeneralOutputChecks(id);
    });
    // observe future additions
    const mo = new MutationObserver(function(muts){
      muts.forEach(m => {
        m.addedNodes && m.addedNodes.forEach(n => {
          if (n.nodeType === 1 && n.classList && n.classList.contains('Devices')){
            const id = n.id && n.id.replace && n.id.replace('Device','');
            if (id) addGeneralOutputChecks(id);
          }
        });
      });
    });
    mo.observe(list, {childList: true});
  }catch(e){console.warn('OutputChecks observer attach error', e)}
});