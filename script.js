// script.js

// Function to toggle visibility of additional experience points
function toggleMorePoints(experienceId) {
    const morePointsElement = document.getElementById(`morePoints_${experienceId}`);
    morePointsElement.classList.toggle('hidden');
}

// Function to toggle visibility of future scopes for projects
function toggleFutureScope(futureScopeId) {
    const futureScopeElement = document.getElementById(futureScopeId);
    futureScopeElement.classList.toggle('hidden');
}

// Example code: toggle a class on click
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('hidden');
});
