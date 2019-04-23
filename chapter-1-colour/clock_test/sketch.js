let minuteStrokeWeight=4;
let minuteStrokeColor;
let hourStrokeColor;
let hourStrokeCap;

function setup(){
    createCanvas(500,500);
    strokeCap(SQUARE);

     minuteStrokeColor=color(30,30,30);
     minuteStrokeCap=SQUARE;
     hourStrokeColor=color(30,30,30);
     hourStrokeCap=SQUARE;

}

function draw(){
    var date= new Date();
    var hours= date.getHours();
    var minutes= date.getMinutes();
    var seconds= date.getSeconds();
    var ms= date.getMilliseconds();
    var v;
    var t;
    var i;

    translate(width/2,height/2);
    background(192);
    ellipse(0,0,450,450);
    //draw minute markers

    for(i=0;i<60;i++){
    v=p5.Vector.fromAngle(i+1)/60 * TAU-HALF_PI;
    v.mult(210);
    if(i%5==4){
    ellipse(v.x,v.y,5,5);
    }
    else{
    ellipse(v.x,v.y,1,1);
    }
     //DrawText
    for(i=0;i<12;i++){
    v=p5.Vector.fromAngle(i+1)/12 * TAU -HALF_PI;
    v.mult(127);
    fill(0);
    text(i+1,v.x,v.y);
    }
    //draw hours hand
    t=(hours+minutes/60+seconds/3600)*TAU/12-HALF_PI;
    v=p5.Vector.fromAngle(t);
    v.mult(210);
    fill(hourStrokeColor);
    strokeWeight(hourStrokeWeight);
    line(0,0,v.x,v.y);

    //draw minutes hand
    t=(minutes+seconds/60+ms/1000/60)*TAU/60-HALF_PI;
    v=p5.Vector.fromAngle(t);
    v.mult(205);
    fill(minuteStrokeColor);
    strokeWeight(minuteStrokeWeight);
    line(0,0,v.x,v.y);

    //draw seconds hand
    t=(minutes+seconds/60+ms/1000)*TAU/60-HALF_PI;
    v=p5.Vector.fromAngle(t);
    v.mult(180);
    fill(255,0,0);
    strokeWeight(1);
    line(0,0,v.x,v.y);

    //centre point
    fill(0);
    noStroke();
    ellipse(0,0,20,20);

}

}
