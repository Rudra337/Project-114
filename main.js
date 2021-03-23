MustachX =0;
MustachY =0;
function preload() {
  Mustach = loadImage('https://i.postimg.cc/4dtgK7CV/moustache-PNG16.png')
}
function draw()
{
 image(video, 0, 0, 300, 300,);
 fill(255,0,0);
 stroke(255,0,0);
 
 image(Mustach, MustachX, MustachY, 80, 35);
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        MustachX = results[0].pose.nose.x;
        MustachY = results[0].pose.nose.y;
        console.log("nose x = " + MustachX);
        console.log("nose y = " + MustachY);
    }
}
