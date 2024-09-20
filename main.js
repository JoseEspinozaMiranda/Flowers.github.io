onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

gsap.timeline({ repeat: -1, yoyo: true })
   .to(".flower--4 .flower__leaf", {
      scaleY: 0.9,  /* Menor escala para cerrar los pétalos */
      scaleX: 0.9,
      rotate: 300,  /* Menos rotación para un cierre más compacto */
      duration: 6,
      ease: "power3.inOut",
      stagger: 0.3
   });
