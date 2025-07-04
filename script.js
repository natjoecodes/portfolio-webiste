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

/* Vanta.js WAVES effect for #leadership section */
document.addEventListener("DOMContentLoaded", function () {
  VANTA.FOG({
    el: "#leadership",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    highlightColor: 0x6ecdf4,     // Arctic blue — luminous accent
    midtoneColor: 0x1a2639,       // Midnight slate — refined balance
    lowlightColor: 0x0a0f1a,      // Abyssal black-blue — depth and mystery
    baseColor: 0xeaf6ff,          // Icy white-blue — for fresh contrast
    blurFactor: 0.28,             // Balanced haze
    speed: 1.1,
    zoom: 1.05
  });
});


/* Vanta.js WAVES effect for #leadership page */
document.addEventListener("DOMContentLoaded", function () {
  VANTA.FOG({
    el: "#vanta-leadership",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    highlightColor: 0x6ecdf4,     // Arctic blue — luminous accent
    midtoneColor: 0x1a2639,       // Midnight slate — refined balance
    lowlightColor: 0x0a0f1a,      // Abyssal black-blue — depth and mystery
    baseColor: 0xeaf6ff,          // Icy white-blue — for fresh contrast
    blurFactor: 0.28,             // Balanced haze
    speed: 1.1,
    zoom: 1.05
  });
});

/* PROJECT PAGE */

document.addEventListener("DOMContentLoaded", function () {
  const vantaProject = document.getElementById("vanta-project");
  if (vantaProject) {
    VANTA.NET({
  el: "#vanta-project",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff3f81,              // Elegant white lines
  backgroundColor: 0x23153c,    // Deep navy (like GitHub dark mode)
  points: 10.0,
  maxDistance: 20.0,
  spacing: 15.0
});
  }
});

/* RESUME PAGE */

document.addEventListener("DOMContentLoaded", function () {
  const vantaResume = document.getElementById("vanta-resume");
  if (vantaResume) {
  VANTA.BIRDS({
      el: "#vanta-resume",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      backgroundColor: 0xeaf6ff,
      color1: 0x1a2639,
      color2: 0x6ecdf4,
      birdSize: 2.5,
      wingSpan: 20.0,
      speedLimit: 4.0,
      separation: 30.0,
      alignment: 50.0,
      cohesion: 50.0,
      quantity: 3.0
    });
  }
});

/* CONTACT PAGE */

document.addEventListener("DOMContentLoaded", function () {
  const vantaContact = document.getElementById("vanta-contact");
  if (vantaContact) {
    VANTA.WAVES({
    el: "#vanta-contact",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  color: 0x7a9ba8,           // Balanced between bluish and grey
  shininess: 50.00,
  waveHeight: 20.00,
  waveSpeed: 0.5,
  zoom: 0.85,
  backgroundColor: 0x0c171c
    });
  }
});
