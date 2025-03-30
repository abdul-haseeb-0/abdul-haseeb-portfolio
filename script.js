// script.js

// // 🌙🔆 Dark/Light Mode Toggle Functionality
// const darkModeToggle = document.getElementById('darkModeToggle');
// const body = document.body;

// darkModeToggle.addEventListener('click', () => {
//     body.classList.toggle('light-mode');
//     darkModeToggle.textContent = body.classList.contains('light-mode') ? '🌙' : '🔆';
// });

// ✨ Custom Cursor Functionality
const cursor = document.querySelector('.custom-cursor');
const bodyElement = document.body;

bodyElement.addEventListener('mousemove', e => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

bodyElement.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-click');
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect');
    clickEffect.style.left = `${event.clientX}px`;
    clickEffect.style.top = `${event.clientY}px`;
    document.body.appendChild(clickEffect);
    setTimeout(() => {
        clickEffect.remove();
    }, 500);
});

bodyElement.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-click');
});

// 🦸 Hero Section Live Typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [ "CLOUD NATIVE APPLIED AI ENGINEER", "PROMPT ENGINEER", "AI DEVELOPER", "Accountant"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current text and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // Typing finished, start erasing
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // Erasing finished, move to the next text
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ✨ Floating Particles (Initialized in the <script> tag in HTML)