/** 
 * This files load the code before lunch the mainWinfow
*/
const enableVersion = (version, idSelector )=>{
    let elem = document.getElementById(idSelector);
    if(elem){
        elem.innerText = version;
    }

};

window.addEventListener('DOMContentLoaded',()=>{
    const componentes = ['Node','Chromium','Electron'];
    for (const c of componentes) {
        enableVersion(process.versions[c.toLowerCase()],`version${c}`);
    }
});