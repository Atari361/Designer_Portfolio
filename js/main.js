$(document).ready(function(){
	var head_slider = $('#head-slider').bxSlider({
      slideWidth: 940,
      controls: true,
      auto: true,
      autoStart: true
	});
    var photo_gallery_slider = $('#photo-gallery-slider').bxSlider({
      slideWidth: 458,
      pager:false,
      controls:true,
      auto: true,
      autoStart: true
    });
    
    $('.bx-prev, .bx-next').click(function(e){
            var i = $(this).index();
            head_slider.goToSlide(i);
            head_slider.stopAuto();        
            photo_gallery_slider.goToSlide(i);
            photo_gallery_slider.stopAuto();
            restart=setTimeout(function(){
                head_slider.startAuto();
                photo_gallery_slider.startAuto();
                },200);

            return false;
	});
});