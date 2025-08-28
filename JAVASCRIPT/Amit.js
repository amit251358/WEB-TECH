document.addEventListener('DOMContentLoaded', function() {

    const message = document.createElement('h1');
    message.textContent = 'Welcome to Amit.html!';
    document.body.appendChild(message);

    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.onclick = function() {
        alert('Hello from Amit.js!');
    };
    document.body.appendChild(button);
});