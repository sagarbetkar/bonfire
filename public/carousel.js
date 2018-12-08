$('.carousel').carousel({interval: false});
//Handles the carousel thumbnails
$('[id^=carousel-selector-]').click(function() {
  var id = this.id.substr(this.id.lastIndexOf('-') + 1);
  var id = parseInt(id);
  $('#carouselExampleIndicators').carousel(id);
});
