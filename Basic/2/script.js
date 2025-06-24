var animate = gsap.timeline({repeat: -1})

animate.to(".box1", {
  x: 1000,
  rotate: 360,
  background: "blue",
  duration: 2,
  delay: 1,
  scale: 0.5,
});

animate.from(".box2", {
  x: 1000,
  rotate: 360,
  background: "blue",
  duration: 2,
  delay: 0,
  scale: 0.5
});

animate.to(".box3", {
  x: 1000,
  rotate: 360,
  background: "red",
  duration: 2,
  delay: 0,
  scale: 0.5,
});
