
var hovered_words = $("pic-show"),
    picture_show = $("picture-show"),
    // meme = $("<video autoplay><source src='assets/videos/cats.mov' type='video/mov'></video>"),
    // cat = $("<video autoplay muted><source src='assets/videos/cats.mov' type='video/mov'></video>")
    meme = $("<img src='assets/images/meme0.JPG' alt='meme'>"),
    cat = $("<img src='assets/images/cats0.HEIC' alt='cats'>");

hovered_words.mouseenter(function (event) {
    var target = $(event.target)

    if(target.is("meme"))  {
        picture_show.replaceWith(meme);
    } if(target.is("cat")) {
        picture_show.replaceWith(cat)
    }
});

hovered_words.mouseleave(function (event) {
    var target = $(event.target)

    if(target.is("meme"))  {
        meme.replaceWith(picture_show);
    } if(target.is("cat")) {
        cat.replaceWith(picture_show)
    }
});