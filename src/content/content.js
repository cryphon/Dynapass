document.addEventListener('mouseup', function () {
  const selection = window.getSelection().toString().trim();
  if (selection.length > 0) {
    console.log('Selection detected:', selection);
    
    const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    const coords = {
      top: rect.top + window.scrollY - 125, // Adjust 50px above the selection
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
    popupContainer.style.backgroundColor = '#f5f5f5';
    popupContainer.style.border = '2px solid #d9e1e6';
    popupContainer.style.padding = '10px';
    popupContainer.style.zIndex = 10000;
    popupContainer.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    popupContainer.style.width = '300px';
    popupContainer.style.borderRadius = '10px';

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
