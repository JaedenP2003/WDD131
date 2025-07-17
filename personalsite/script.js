const gearContainer = document.getElementById('gear-container');
const charContainer = document.getElementById('character-container');

let gearIndex = 0;
let charIndex = 0;
let currentGearFilter = "All";
let currentCharFilter = "All";
let itemsPerPage = 5;

import { characters } from './characters.js';
import { gearItems } from './gear.js';

export function renderGearCarousel(type = "All") {
  gearContainer.innerHTML = '';

const width = window.innerWidth;
if (width < 1000) {
  itemsPerPage = 1;
} 
else if (width < 1425) {
  itemsPerPage = 3;
} 
else {
  itemsPerPage = 5;
}

  const filtered = type === "All"
    ? gearItems
    : gearItems.filter(item => item.type === type);

  const maxIndex = Math.max(0, filtered.length - itemsPerPage);
  gearIndex = Math.min(gearIndex, maxIndex); // Clamp to bounds

  const visibleItems = filtered.slice(gearIndex, gearIndex + itemsPerPage);

  visibleItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('gear-card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="open-modal" data-name="${item.name}" data-desc="${item.description}">
      <h3>${item.name}</h3>
      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Game:</strong> ${item.game}</p>
      <p><strong>Location:</strong> ${item.location}</p>
    `;
    gearContainer.appendChild(card);
  });
}

export function renderCharCarousel(type = "All") {
  charContainer.innerHTML = '';

const width = window.innerWidth;
if (width < 1000) {
  itemsPerPage = 1;
} 
else if (width < 1425) {
  itemsPerPage = 3;
} 
else {
  itemsPerPage = 5;
}

  const filtered = type === "All"
    ? characters
    : characters.filter(char => char.type === type);

  const maxIndex = Math.max(0, filtered.length - itemsPerPage);
  charIndex = Math.min(charIndex, maxIndex);

  const visibleChars = filtered.slice(charIndex, charIndex + itemsPerPage);

  visibleChars.forEach(char => {
    const card = document.createElement('div');
    card.classList.add('character-card', 'open-modal');
    card.setAttribute('data-name', char.name);
    card.setAttribute('data-desc', char.description);
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}" class="open-modal" data-name="${char.name}" data-desc="${char.description}">
      <h3>${char.name}</h3>
      <p><strong>Race:</strong> ${char.race}</p>
      <p><strong>Role:</strong> ${char.role}</p>
    `;
    charContainer.appendChild(card);
  });
}

document.getElementById('gear-prev-btn').addEventListener('click', () => {
  gearIndex = Math.max(0, gearIndex - itemsPerPage);
  renderGearCarousel(currentGearFilter);
});

document.getElementById('gear-next-btn').addEventListener('click', () => {
  const filtered = currentGearFilter === "All"
    ? gearItems
    : gearItems.filter(item => item.type === currentGearFilter);

  if (gearIndex + itemsPerPage < filtered.length) {
    gearIndex += itemsPerPage;
    renderGearCarousel(currentGearFilter);
  }
});

// Do the same for character buttons
document.getElementById('char-prev-btn').addEventListener('click', () => {
  charIndex = Math.max(0, charIndex - itemsPerPage);
  renderCharCarousel(currentCharFilter);
});

document.getElementById('char-next-btn').addEventListener('click', () => {
  const filtered = currentCharFilter === "All"
    ? characters
    : characters.filter(char => char.type === currentCharFilter);

  if (charIndex + itemsPerPage < filtered.length) {
    charIndex += itemsPerPage;
    renderCharCarousel(currentCharFilter);
  }
});

renderGearCarousel();
renderCharCarousel();

window.addEventListener('resize', () => {
  renderGearCarousel("All");
  renderCharCarousel("All");
});



// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const logo = document.getElementById('logo');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Switch logo based on theme
  logo.src = isDark ? 'images/logo-dark.png' : 'images/New_Zelda_Informer_Logo.png';
});

// Filter buttons
const filterButtons = document.getElementById('filter-buttons');
filterButtons.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    currentGearFilter = e.target.dataset.type;
    gearIndex = 0
    renderGearCarousel(currentGearFilter);
  }
});
const filterButtonsChar = document.getElementById('filter-buttons-char');
filterButtonsChar.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    currentCharFilter = e.target.dataset.type;
    charIndex = 0;
    renderCharCarousel(currentCharFilter);
  }
});

// Modal logic
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('open-modal')) {
    modalTitle.textContent = e.target.dataset.name;
    modalDesc.textContent = e.target.dataset.desc;
    modalImage.src = e.target.src;
    modal.classList.remove('hidden');
  }
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// On page load
window.addEventListener('DOMContentLoaded', () => {
  renderGearCarousel();
  renderCharCarousel();
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});