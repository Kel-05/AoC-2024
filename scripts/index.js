function loadScript(url, onloadFunction) {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.onload = onloadFunction;
    
    document.head.appendChild(script);
}

function load() {
    const consoleOutput = document.getElementById("consoleOutput");
    
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    
    console.log = function(message) {
        originalConsoleLog(message);
	
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        consoleOutput.appendChild(newMessage);
	
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    };

    console.error = function(message) {
        originalConsoleError(message);
	
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.classList.add('error');
        consoleOutput.appendChild(newMessage);
	
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    };

    loadScript("scripts/switch-script.js", false);
}

addEventListener("DOMContentLoaded", load);
