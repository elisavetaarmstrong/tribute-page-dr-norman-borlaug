const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal("#main", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#tribute-info li", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".footer", {
  ...scrollRevealOption,
  interval: 500,
});
