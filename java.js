window.addEventListener("DOMContentLoaded", (event) => {
  const menubar = document.getElementById("Menubar");
  const ncl = document.getElementById("NewChecklist");
  const tdvs = document.getElementById("ToggleDevices");
  
  if (menubar) {
    menubar.addEventListener("click", (event) => toggle(event, "NavBar"));
    ncl.addEventListener("click", newChecklist);
    tdvs.addEventListener("click", function (event) {
      toggleFlex("DBC");
    });
    // refresh calendar when procurement fields change
    const deviceList = document.getElementById('DeviceList');
    if (deviceList){
      let debounceTimer = null;
      deviceList.addEventListener('input', function(e){
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(()=>{
          if (typeof refreshCalendar === 'function') refreshCalendar();
        },300);
      });
    }
  }
  // convert any legacy <img> toggles to buttons
  try{ convertImgToggles(); }catch(e){}
});

/* window.onclick = function (event) {
  if (!event.target.matches(".Menubar")) {
    document.getElementsByClassName("NavBar")[0].style.display = "none";
  }
}; */

function updateHeader(destination, source) {
  let sou = document.getElementById(source);
  /* if (sou.tagName == "SELECT"){
    let x = sou.options[sou.selectedIndex].innerHTML;
  }
  else{
    let x = sou.value;
  }  */
  //alert(sou.tagName);

  let x = sou.value;
  document.getElementById(destination).innerHTML = x;
}
function changeVisibility(bodyID, buttonID) {
  x = document.getElementById(bodyID);
  y = document.getElementById(buttonID);
  // Ensure toggle control is a text-button. If an <img> exists (old templates), replace it with a button preserving id/class/onclick.
  try{
    if (y && y.tagName === 'IMG'){
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = y.id;
      btn.className = y.className;
      // preserve inline onclick if present
      if (y.getAttribute && y.getAttribute('onclick')) btn.setAttribute('onclick', y.getAttribute('onclick'));
      // replace in DOM
      y.parentNode.replaceChild(btn, y);
      y = document.getElementById(buttonID);
    }
  }catch(e){}

  if (x.style.display == "none") {
    x.style.display = "block";
    if (y) y.textContent = '▲';
  } else {
    x.style.display = "none";
    if (y) y.textContent = '▼';
  }
  // console.log(document.getElementById("brand1").options[document.getElementById('brand1').selectedIndex].text);
  // console.log(document.getElementById("brand1").value);
}
function newChecklist() {
  // If there are devices, offer to save first
  try{
    const deviceList = document.getElementById("DeviceList");
    const deviceCount = deviceList ? deviceList.getElementsByClassName('Devices').length : 0;
    if (deviceCount > 0){
      if (confirm("Es existieren Geräte in dieser Checklist. Möchtest du zuerst speichern?")){
        try{ createXML2(); }catch(e){console.warn('createXML2 save failed', e)}
      }
    }
  }catch(e){}

  // Final confirmation to reset
  if (!confirm('Neues Checklist erstellen? Dies entfernt alle Geräte und setzt Basis-Felder zurück.')) return;

  // reset visible UI blocks
  try{ const dbc = document.getElementById("DBC"); if (dbc) dbc.style.display = "flex"; }catch(e){}
  try{ const basics = document.getElementById("Basics"); if (basics) basics.style.display = "block"; }catch(e){}
  try{ const nav = document.getElementById("NavBar"); if (nav) nav.style.display = "none"; }catch(e){}

  // Reset all basic inputs (class Info)
  try{
    const infos = Array.from(document.querySelectorAll('input.Info, select.Info, textarea.Info'));
    infos.forEach(inp => {
      try{
        const tag = (inp.tagName||'').toUpperCase();
        const type = inp.getAttribute('type') || inp.type || '';
        if (type === 'checkbox' || type === 'radio') { inp.checked = false; }
        else if (type === 'date' || tag === 'INPUT' && (type==='text' || type==='')) { inp.value = ''; }
        else if (tag === 'SELECT') { inp.selectedIndex = -1; }
        else { inp.value = ''; }
      }catch(e){}
    });
    // clear hidden order_status and its radios
    try{ const hidden = document.getElementById('order_status'); if (hidden) hidden.value = ''; const radios = document.querySelectorAll('input[name="order_status_radio"]'); radios.forEach(r=>r.checked=false); }catch(e){}
  }catch(e){console.warn('reset basics failed', e)}

  // Remove all device elements
  try{
    const devices = Array.from(document.getElementsByClassName('Devices'));
    devices.forEach(d => { try{ d.remove(); }catch(e){} });
  }catch(e){console.warn('remove devices failed', e)}

  // ensure any UI refreshers run
  try{ if (typeof updateAllDeviceHeaders === 'function') updateAllDeviceHeaders(); }catch(e){}
  try{ if (typeof populateMissingOrders === 'function') populateMissingOrders(); }catch(e){}
}

function toggle(event, ID) {
  x = document.getElementById(ID);

  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleFlex(ID) {
  x = document.getElementById(ID);

  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  document.getElementById("NavBar").style.display = "none";
}

// Convert any legacy <img class="Toogle"> or <img class="Delete"> elements into button elements
function convertImgToggles(){
  // Toogle images
  const imgs = Array.from(document.querySelectorAll('img.Toogle, img.Delete'));
  imgs.forEach(img => {
    try{
      const isToggle = img.classList.contains('Toogle');
      const isDelete = img.classList.contains('Delete');
      const btn = document.createElement('button');
      btn.type = 'button';
      if (img.id) btn.id = img.id;
      btn.className = img.className;
      // copy onclick if present
      if (img.getAttribute && img.getAttribute('onclick')) btn.setAttribute('onclick', img.getAttribute('onclick'));
      // set glyph
      if (isToggle) btn.textContent = (img.style && img.style.display === 'none') ? '▼' : '▲';
      if (isDelete) btn.textContent = '❌';
      img.parentNode.replaceChild(btn, img);
    }catch(e){}
  });
}
// Collapse all device bodies (hide) and set their toggle icons to open.png
function collapseAllDevices(){
  const bodies = document.querySelectorAll('.Devicebody');
  bodies.forEach((b)=>{
    b.style.display = 'none';
  });
  // update all toggle images
  const toggles = document.querySelectorAll('.Toogle');
  toggles.forEach((t)=>{
    try{
      if (t.tagName === 'IMG'){
        // replace with button preserving id/class/onclick
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = t.id;
        btn.className = t.className;
        if (t.getAttribute && t.getAttribute('onclick')) btn.setAttribute('onclick', t.getAttribute('onclick'));
        t.parentNode.replaceChild(btn, t);
        t = document.getElementById(btn.id);
      }
  if (t) t.textContent = '▼';
    }catch(e){}
  });
}

// Expand all device bodies (show) and set their toggle icons to close.png
function expandAllDevices(){
  const bodies = document.querySelectorAll('.Devicebody');
  bodies.forEach((b)=>{
    b.style.display = 'block';
  });
  // update all toggle images
  const toggles = document.querySelectorAll('.Toogle');
  toggles.forEach((t)=>{
    try{
      if (t.tagName === 'IMG'){
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = t.id;
        btn.className = t.className;
        if (t.getAttribute && t.getAttribute('onclick')) btn.setAttribute('onclick', t.getAttribute('onclick'));
        t.parentNode.replaceChild(btn, t);
        t = document.getElementById(btn.id);
      }
  if (t) t.textContent = '▲';
    }catch(e){}
  });
}
/* function insertDate(id) {
  var today = new Date();
  document.getElementById(id).value = today.toLocaleDateString("de-DE");
} */
function entfernen(id) {
  if (confirm("Willst du dieses Device löschen?")) {
    document.getElementById(id).remove();
  }
}

/* function addCamera() {
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
          <button type="button" id="CloseButton${deviceNumber}" class="Toogle" onclick="changeVisibility('Body${deviceNumber}', 'CloseButton${deviceNumber}')">▲</button>
          <button type="button" id="DeleteButton${deviceNumber}" class="Delete" onclick="entfernen('Device${deviceNumber}')">❌</button>
        </div>
        <div class="Devicebody" id="Body${deviceNumber}">
          <div class="Container">
            Hersteller:
            <input type="text" id="Brand${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Modell:
            <input
              type="text"
              id="Model${deviceNumber}"
              class="Device${deviceNumber}"
              onchange="updateHeader('Name${deviceNumber}','Model${deviceNumber}')"
            />
          </div>
          <div class="Container">
            Seriennr.
            <input type="text" id="Serialnr${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Treibervs.:
            <input type="text" id="Driver${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Firmwarevs.:
            <input type="text" id="FW${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Interface:
            <input type="text" id="Interface${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Netzkabel:
            <input type="text" id="PowerCable${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Netzteil:
            <input type="text" id="Netzteil${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
          <div class="Container">
            Datenkabel:
            <input type="text" id="DataCable${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Fenster sauber?
            <input type="checkbox" id="Clean${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Performance?
            <input type="checkbox" id="Performance${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Visitron Label?
            <input type="checkbox" id="Label${deviceNumber}" class="Device${deviceNumber}" />
          </div>
          <div class="Container">
            Sonstiges:
            <input type="text" id="Else${deviceNumber}" class="Device${deviceNumber}"/>
          </div>
        </div>`;

  document.getElementById("DeviceList").appendChild(element);
  //document.getElementById(`Device${deviceID}`).className="Device"; 
  // 
  // }*/
