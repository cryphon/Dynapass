document.addEventListener('mouseup', function () {
  const selection = window.getSelection().toString().trim();
  if (selection.length > 0) {
    console.log('Selection detected:', selection);
    
    const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    const coords = {
      top: rect.top + window.scrollY - 50, // Adjust 50px above the selection
      left: rect.left + window.scrollX,
    };

    let popupContainer = document.getElementById('custom-popup-container');
    if (!popupContainer) {
      popupContainer = document.createElement('div');
      popupContainer.id = 'custom-popup-container';
      document.body.appendChild(popupContainer);
    }

    popupContainer.style.position = 'absolute';
    popupContainer.style.top = `${coords.top}px`;
    popupContainer.style.left = `${coords.left}px`;
    popupContainer.style.backgroundColor = 'white';
    popupContainer.style.border = '1px solid #ccc';
    popupContainer.style.padding = '10px';
    popupContainer.style.zIndex = 10000;
    popupContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    popupContainer.style.width = '300px';

    const popupRoot = document.createElement('div');
    popupRoot.id = 'popup-root';
    popupContainer.innerHTML = '';
    popupContainer.appendChild(popupRoot);

    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('popup.bundle.js');
    script.onload = () => console.log('Popup script loaded successfully');
    popupContainer.appendChild(script);
  }
});
