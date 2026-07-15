const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealItems = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

const marquee = document.querySelector(".interest-marquee div");
if (marquee) marquee.innerHTML += marquee.innerHTML;

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
