var animate = gsap.timeline({repeat:-1})

gsap.from(".nav h3", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  stagger: 0.3,
});


gsap.from("h1", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
})

// gsap.from(".box-body", {
//     opacity: 0,
//     duration: 1,
//     delay: 1.5,
// })

animate.from(".box1", {
    opacity: 0,
    duration: 1,
    delay: 1,
})

animate.from(".box2", {
    opacity: 0,
    duration: 1,
})

animate.from(".box3", {
    opacity: 0,
    duration: 1,
})