//your JS code here. If required.
function onDOMLoad() {
            // Create a new text node with the content
            var textNode = document.createTextNode("DOM load success");

            // Get a reference to the body element
            var body = document.body;

            // Append the text node to the body
            body.appendChild(textNode);
        }

        // Add an event listener for the "DOMContentLoaded" event
        document.addEventListener("DOMContentLoaded", onDOMLoad);
