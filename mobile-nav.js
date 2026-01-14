// Toggle the mobile nav by adding/removing the 'open' class on the header
document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.hamburger');
  toggles.forEach(btn => {
    btn.addEventListener('click', function () {
      const header = btn.closest('.header');
      if (!header) return;
      header.classList.toggle('open');
    });
  });
});
