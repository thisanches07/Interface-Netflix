$('.owl-carousel').owlCarousel({
  loop: true, //efeito de loop
  margin: 10, //margem de 10 entre os filmes
  nav: false, //setas de navegacao
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
