var manifest = chrome.runtime.getManifest();

console.log(`${manifest.name}: Running on version ${manifest.version}.`)

document.addEventListener('load', block(), false);

function block() {
    document.documentElement.innerHTML = '';
    document.body.style.background = 'black';
    console.log(`This website has been blocked by ${manifest.name}`)
};

