const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const copyDiscord = document.getElementById("copyDiscord");
const toast = document.getElementById("toast");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

copyDiscord.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("Mis1ek");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = "Mis1ek";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  toast.classList.add("show");

  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
});


// Mocniejsza animacja liter
document.querySelectorAll(".split-text").forEach((element, lineIndex) => {
  const text = element.dataset.text || element.textContent;
  element.textContent = "";

  [...text].forEach((character, index) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = character === " " ? "\u00A0" : character;
    span.style.animationDelay = `${0.18 + lineIndex * 0.32 + index * 0.045}s`;
    element.appendChild(span);
  });
});

// Subtelne, ale widoczne cząsteczki tła
const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
  const particleCount = window.innerWidth < 700 ? 16 : 30;

  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${65 + Math.random() * 45}%`;
    particle.style.animationDuration = `${7 + Math.random() * 9}s`;
    particle.style.animationDelay = `${Math.random() * -12}s`;
    particle.style.transform = `scale(${0.5 + Math.random()})`;
    particlesContainer.appendChild(particle);
  }
}
