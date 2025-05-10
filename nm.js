// Load GSAP and ScrollTrigger
const script1 = document.createElement('script');
script1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
document.head.appendChild(script1);

const script2 = document.createElement('script');
script2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
document.head.appendChild(script2);

script2.onload = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate header
  gsap.from("header", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "bounce"
  });

  // Animate nav links
  gsap.from("nav a", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    delay: 0.5
  });

  // Animate sections
  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
  });

  // Animate cards
  gsap.utils.toArray(".card").forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      x: 100,
      opacity: 0,
      duration: 1
    });
  });
};
