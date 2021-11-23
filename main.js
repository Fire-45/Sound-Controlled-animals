function Hear(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kA5q21Nc6/", modelReady);
}

function modelReady(){
console.log("model is ready");
classifier.classify(gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
}