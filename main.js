//https://teachablemachine.withgoogle.com/models/5nE6HClmk/

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5nE6HClmk/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}
var barking = 0;
var meowing = 0;
var mooing = 0;
var roaring = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
r=Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_number").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("result_class").innerHTML = 'Accuracy -' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_class").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_number").style.color="rgb("+r+","+g+","+b+")";
        img = document.getElementById('image');
        if (results[0].label == "barking") {
            img.src = 'dog1.jpg';
        } else if (results[0].label == "meowing") {
            img.src = 'cat1.jpg';
            
        } else if (results[0].label=="mooing") {
            img.src = 'cow1.jpg';
            
        } else if (results[0].label=="roaring"){
            img.src = 'download.jpg';
            
        }
        else {
            img.src = 'Capture.PNG';  
        }
    }
}