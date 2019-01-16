/* UNDERLINE HOVERS */
var underline = $("u"),
    center_box = $("div"),
    thomas = $("<img src='media/thomas.png' alt='me.' class='overlay' style='width:20%; height:auto;'>"),
    comp = $("<img src='media/computer.png' alt='computer science.' class='overlay' style='width:20%; height:auto;'>"),
    ling = $("<img src='media/linguistics.png' alt='linguistics.' class='overlay' style='width:20%; height:auto;'>"),
    uni = $("<img src='media/uga.png' alt='uni.' class='overlay' style='width:20%; height:auto;'>"),
    athens = $("<img src='media/arches.png' alt='arches.' class='overlay' style='width:20%; height:auto;'>"),
    turing = $("<img src='media/turing.png' alt='turing test.' class='overlay' style='width:20%; height:auto;'>"),
    fashion = $("<img src='media/balenciaga.png' alt='balenciaga.' class='overlay'>"),
    veggie = $("<img src='media/veggies.png' alt='veggies.' class='overlay' style='width:20%; height:auto;'>"),
    cat = $("<img src='media/cat.png' alt='cat.' class='overlay' style='width:20%; height:auto;'>"),
    orange = $("<img src='media/juiced-oranges.png' alt='juiced-oranges.' class='overlay' style='width:20%; height:auto;'>"),
    follow = $("<img src='media/follow.png' alt='follow.' class='overlay' style='width:20%; height:auto;'>"),
    prof = $("<img src='media/professional.png' alt='professor x.' class='overlay' style='width:30%; height:auto;'>");
    frank = $("<img src='media/frank.png' alt='frank.' class='overlay' style='width:20%; height:auto;'>");

underline.mouseenter(function (event){
    var target = $(event.target);

    if(target.is("#thomas")){
        center_box.replaceWith(thomas);
    } if(target.is("#comp")){
        center_box.replaceWith(comp);
    } if(target.is("#ling")){
        center_box.replaceWith(ling);
    } if(target.is("#uni")){
        center_box.replaceWith(uni);
    } if(target.is("#athens")){
        center_box.replaceWith(athens);
    } if(target.is("#turing")){
        center_box.replaceWith(turing)
    } if(target.is("#fashion")){
        center_box.replaceWith(fashion);
    } if(target.is("#veggie")){
        center_box.replaceWith(veggie);
    } if(target.is("#cat")){
        center_box.replaceWith(cat);
    } if(target.is("#orange")){
        center_box.replaceWith(orange);
    } if(target.is("#follow")){
        center_box.replaceWith(follow);
    } if(target.is("#prof")){
        center_box.replaceWith(prof);
    } if(target.is("#frank")){
        center_box.replaceWith(frank);
    }
});

underline.mouseleave(function (event){
    var target = $(event.target);

    if(target.is("#thomas")){
        thomas.replaceWith(center_box);
    } if(target.is("#comp")){
        comp.replaceWith(center_box);
    } if(target.is("#ling")){
        ling.replaceWith(center_box);
    } if(target.is("#uni")){
        uni.replaceWith(center_box);
    } if(target.is("#athens")){
        athens.replaceWith(center_box);
    } if(target.is("#turing")){
        turing.replaceWith(center_box)
    } if(target.is("#fashion")){
        fashion.replaceWith(center_box);
    } if(target.is("#veggie")){
        veggie.replaceWith(center_box);
    } if(target.is("#cat")){
        cat.replaceWith(center_box);
    } if(target.is("#orange")){
        orange.replaceWith(center_box);
    } if(target.is("#follow")){
        follow.replaceWith(center_box);
    } if(target.is("#prof")){
        prof.replaceWith(center_box);
    } if(target.is("#frank")){
        frank.replaceWith(center_box);
    }
});


/* BETWEEN TEXT */
var text = ["_", "T_", "TH_", "THO_", "THOM_", "THOMA_", "THOMAS_", "THOMASC_", "THOMASCO_",
            "THOMASCOL_", "THOMASCOLE_", "THOMASCOLEM_", "THOMASCOLEMA_", "THOMASCOLEMAN_",
            "THOMASCOLEMANE_", "THOMASCOLEMANED_", "THOMASCOLEMANEDG_", "THOMASCOLEMANEDGE_",
            "THOMASCOLEMANEDGE ", "THOMASCOLEMANEDGE_", "THOMASCOLEMANEDGE_", "THOMASCOLEMANEDGE "],
    elem = $("title"),
    counter = 0;

setInterval(function (){

    elem.empty();
    elem.append(text[counter]);
    counter++;

    if(counter >= text.length){
        counter = 0;
    }
}, 600);
