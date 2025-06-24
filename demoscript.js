
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const moreContent = button.nextElementSibling;
    moreContent.classList.toggle('hidden');
    button.textContent = moreContent.classList.contains('hidden') ? 'Read More' : 'Read Less';
  });
});
