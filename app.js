document.addEventListener("DOMContentLoaded", function() {
    const logoText = document.querySelector('.logo a').childNodes[1];
    const text = logoText.textContent;
    logoText.innerHTML = '';

    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        logoText.appendChild(span);
    });
});