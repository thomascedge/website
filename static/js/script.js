
var hovered_words = $("pic-show"),
    picture_show = $("picture-show"),
    meme = $("<video width='20%' autoplay><source src='assets/videos/meme1.mp4' type='video/mp4'></video>"),
    cat = $("<video width='20%' autoplay muted><source src='assets/videos/cats.mp4' type='video/mp4'></video>");

hovered_words.mouseenter(function (event) {
    var target = $(event.target)

    if(target.is("#meme"))  {
        picture_show.replaceWith(meme);
    } if(target.is("#cat")) {
        picture_show.replaceWith(cat);
    }
});

hovered_words.mouseleave(function (event) {
    var target = $(event.target)

    if(target.is("#meme"))  {
        meme.replaceWith(picture_show);
    } if(target.is("#cat")) {
        cat.replaceWith(picture_show);
    }
});