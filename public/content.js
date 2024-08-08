// content.js

document.addEventListener('mouseup', function() {
    let selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        let range = window.getSelection().getRangeAt(0);
        let rect = range.getBoundingClientRect();
        
        // Create the popup
        let popup = document.createElement('div');
        popup.style.position = 'absolute';
        popup.style.top = `${rect.top + window.scrollY - 40}px`;  // Adjust Y offset for positioning above
        popup.style.left = `${rect.left + window.scrollX}px`;
        popup.style.background = '#333';
        popup.style.color = '#fff';
        popup.style.padding = '5px';
        popup.style.borderRadius = '5px';
        popup.style.zIndex = 1000;

        popup.textContent = "Translate | Search | Note";

        // Add functionality to the popup
        popup.addEventListener('click', function() {
            alert('Option clicked!');
            // Implement your functionality here
        });

        document.body.appendChild(popup);

        // Remove the popup when clicking elsewhere
        document.addEventListener('mousedown', function(event) {
            if (!popup.contains(event.target)) {
                popup.remove();
            }
        }, { once: true });
    }
});

