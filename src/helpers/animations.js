import { animate } from "motion";

export function animateNumbers(from = 0, to = 10, element) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(from, to, {
            duration: 2,
            ease: "circOut",
            onUpdate: (latest) => {
              if (element) {
                element.innerHTML = `${Math.round(latest)}`;
              }
            },
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (element) {
    observer.observe(element);
  }
}