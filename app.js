// Modal opens when user clicks on brand logo
$(".navbar-brand").on("click", function() {
    $("#myModal").modal("show");
})

// Function to generate a random color
function getRandomColor(brightness){

    // Six levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
}

// Click function for changing the background color
$("#bg").on("click", function() {
    var newBG = getRandomColor(5);  
    console.log(newBG);
    $("#canvas").css("background-color", newBG);
  });

// Function to place a random shape on the page
$("#shape").click(function() {
   var newShape = $("<div>");
   $("#canvas").append(newShape);
   newShape.attr("class", "art");
   $(".art").css({
       "position": "absolute",
       "top": Math.floor((Math.random() * 400) + 1),
       "right": Math.floor((Math.random() * 700) + 1),
       "width": Math.floor((Math.random() * 200) + 1),
       "height": Math.floor((Math.random() * 200) + 1),
       "background-color": getRandomColor(5)
   });
   $(".art").removeClass("art")
});

// Reset game
$("#reset").on("click", function() {
    $("#canvas").empty();
    $("#canvas").css("background-color",  "darkgray");
})