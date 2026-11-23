// Adds .is-visible to [data-reveal] elements when they enter the viewport.
// Content stays visible without JS and with prefers-reduced-motion.
// A clip-path reveal hides its own box, so for data-reveal="clip" the observer watches a sentinel
// child that is not clipped by the element itself (Chrome intersects the clipped area).
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible"));
} else {
  const owner = new Map<Element, HTMLElement>();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        owner.get(e.target)?.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
  items.forEach((el) => {
    let target: Element = el;
    if (el.dataset.reveal === "clip") {
      const probe = document.createElement("span");
      probe.setAttribute("aria-hidden", "true");
      probe.className = "reveal-probe";
      el.before(probe);
      target = probe;
    }
    owner.set(target, el);
    io.observe(target);
  });
  // Safety net: anything still hidden after the page is printed or captured stays readable.
  window.addEventListener("beforeprint", () => items.forEach((el) => el.classList.add("is-visible")));
}
