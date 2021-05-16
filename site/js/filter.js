function initFilter(){

  console.log('init');

    function filter(){
        var currentTags = [];
        $('.filter-link.current').each(function(){
            var tag = $(this).data("tag");
            currentTags.push(tag);
        });

        $('.tile').each(function(){
            var tile = $(this);
            var show = false;
            for(var i=0; i<currentTags.length; i++){
                if (tile.hasClass(currentTags[i])){
                    show = true;
                    break;
                }
            }
            if(show){
                tile.show();
            }
            else {
                tile.hide();
            }
        });
    }

    $('.filter-link').click(function(){
        console.log('click');
        if($(this).hasClass("all")){
            if(!($(this).hasClass("current"))){
                $('.filter-link').removeClass("current");
                $(this).addClass("current");
                $('.tile').show();
            }
        }
        else {
            $(".filter-link.all").removeClass('current');
            $(this).toggleClass("current");
            if(!($('.filter-link').hasClass('current'))){
                $('.filter-link.all').addClass('current');
                $('.tile').show();
            }
            else {
                filter();
            }
        }
        // $grid.masonry('layout');
        // $(window).trigger('filter');
    });
}

$(document).ready(function(){
  initFilter();
});