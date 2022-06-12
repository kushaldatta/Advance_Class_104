var camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("output").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}
console.log('ml5 version:', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8AG1tFIdK/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}