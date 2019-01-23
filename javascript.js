
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var param = document.getElementById("parameters");
var body = document.querySelector("body");

function setGradient(col1, col2) {
    body.style.backgroundImage = "linear-gradient(to right, "
        + col1 + ", " + col2 + ")";
}

color1.addEventListener("input", function () {
    setGradient(color1.value, color2.value);
    param.innerText = body.style.backgroundImage;

});

color2.addEventListener("input", function () {
    setGradient(color1.value, color2.value);
    param.innerText = body.style.backgroundImage;
});


