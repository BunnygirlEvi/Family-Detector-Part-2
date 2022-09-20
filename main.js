webkitCancelAnimationFrame.toString({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );




function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/1jCpx49Nr3AwQtgb8I5MIRTxYKL2PNH8c/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}