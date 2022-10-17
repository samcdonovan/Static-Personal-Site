var mode_button = $(".mode-icon");
var icon;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  change_mode();
}

$(".mode-icon").click(change_mode);

function change_mode() {

  $(".mode-icon i").toggleClass("fa-sun");
  $(".mode-icon i").toggleClass("fa-moon");

  if($(".mode-icon i").hasClass("fa-sun")){
    $(".mode-text").text("Sol!");
    $(".mode-text").fadeIn();
    $(".cloud").attr("src", "img/cloud.png");
  } else{
    $(".mode-text").text("Luna!");
    $(".mode-text").fadeIn();
    $(".cloud").attr("src", "img/cloud_stars.png");
  }

  $(".mode-text").fadeOut();

  $(".navbar").toggleClass("navbar-light");
  $(".navbar").toggleClass("navbar-dark");
  $(":root").toggleClass("dark-mode");
}
