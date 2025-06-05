function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*roles*/

const roles = document.querySelectorAll('.role-animation span');
let currentRoleIndex = 0;

function cycleRoles() {
  roles[currentRoleIndex].classList.remove('active');
  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  roles[currentRoleIndex].classList.add('active');
}

// Start cycling roles
setTimeout(() => {
  setInterval(cycleRoles, 2000);
}, 1000); // initial delay for first role


/*button bottom to top Timeline */

const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});