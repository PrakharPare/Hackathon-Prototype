// Example JavaScript for interactivity - this could be expanded based on requirements
document.querySelectorAll('section').forEach(section => {
  section.addEventListener('click', () => {
      alert(`Explore more about ${section.querySelector('h2').innerText}`);
  });
});
