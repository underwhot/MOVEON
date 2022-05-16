// ↓ ibg ↓ //
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// ↑ ibg ↑ //


// BURGER
$(document).ready(function() {
  $('.menu__burger').click(function(event) {
    $('.menu__burger,.menu__links').toggleClass('active');
    $('.head').toggleClass('none');
    $('.menu__links_mob').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
// BURGER