document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");

  // Hent stien fra den nuværende URL
  const currentPath = window.location.pathname;

  menuLinks.forEach((link) => {
    // Sammenlign kun stien uden protokollen og domænet
    if (link.pathname === currentPath) {
      link.classList.add("active"); // Tilføj 'active' klasse til det link, der svarer til den nuværende side
    }
  });
});
