// carousel scripts
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// right click event
function productClick(s) {
  let rightclick;
  let e = window.event;
  if (e.button === 2) {
    console.log(s.children[2].children[0].children[0].innerText);
  } else {
    console.log("RIGHT CLICK PLEASE!");
  }
}
