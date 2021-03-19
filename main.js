Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

var camera = document.getElementById("webcam");
Webcam.attach('#webcam');

console.log('ml5 version:', ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tveyVNIt9/model.json', modelLoaded);;

function modelLoaded() {

    console.log('model loaded');

}




function takeSnapshot() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capturedImg" src="'+data_uri+'">'
    });
    
}
function check() {

    img = document.getElementById('capturedImg');
    classifier.classify(img, gotResult);
    
}

function gotResult(error, results) {

    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("ObjectName").innerHTML = results[0].label;
        document.getElementById("ObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}