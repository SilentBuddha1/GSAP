import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const cardContainers = document.querySelectorAll(".card-container");
  const stickyHeader = document.querySelector(".sticky-header h1");

  let isGapAnimationCompleted = false;
  let isFlipAnimationCompleted = false;

  function initAnimation() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const mm = gsap.matchMedia();

    mm.add("")
  }

  initAnimation();

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initAnimation();
    }, 250);   
  });
});
