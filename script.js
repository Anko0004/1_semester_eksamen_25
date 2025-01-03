document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active"); // Tilføj 'active' klasse til det link, der svarer til den nuværende side
    }
  });
});
