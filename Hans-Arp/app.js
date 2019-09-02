
// Function to generate a random color
function getRandomColor(brightness){

    // Six levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
}

// Click function for changing the background color
$("#bg").click(function() {
    var newBG = getRandomColor(5);  
    $("#canvas").css("background-color", newBG);
  });

