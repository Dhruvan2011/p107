function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-t4N2vrxW/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}