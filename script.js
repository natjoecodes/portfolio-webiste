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


/*LEADERSHIP Timeline */

// Scroll-based animation for timeline
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  items.forEach((item) => observer.observe(item));
});