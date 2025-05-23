// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Basic animations for project cards
gsap.set(".project-card", { y: 50, opacity: 0 });
ScrollTrigger.batch(".project-card", {
  start: "top bottom-=100px",
  onEnter: batch => {
    gsap.to(batch, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8
    });
  }
});

// Animate progress bars
gsap.set(".progress-bar", { width: 0 });
ScrollTrigger.batch(".progress-bar", {
  start: "top bottom-=100px",
  onEnter: batch => {
    batch.forEach(bar => {
      gsap.to(bar, {
        width: bar.dataset.progress + "%",
        duration: 1.5
      });
    });
  }
});

// Animate section titles
gsap.set(".section-title, .section-subtitle", { y: 30, opacity: 0 });
ScrollTrigger.batch(".section-title, .section-subtitle", {
  start: "top bottom-=100px",
  onEnter: batch => {
    gsap.to(batch, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8
    });
  }
});