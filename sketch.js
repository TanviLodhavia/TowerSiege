const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Base (displayWidth/2, 780, displayWidth, 20);
    left = new Base(displayWidth-10, displayHeight/2, 20, displayHeight);
    ground1 = new Base(550, 600, 315, 20);
    ground2 = new Base(900, 400, 315, 20);

    box1 = new Bob (415, 575);
    box2 = new Bob (445, 575);
    box3 = new Bob (475, 575);
    box4 = new Bob (505, 575);
    box5 = new Bob (535, 575);
    box6 = new Bob (565, 575);
    box7 = new Bob (595, 575);
    box8 = new Bob (625, 575);
    box9 = new Bob (655, 575);
    box10 = new Bob (685, 575);

    box11 = new Bob2 (430, 520);
    box12 = new Bob2 (460, 520);
    box13 = new Bob2 (490, 520);
    box14 = new Bob2 (520, 520);
    box15 = new Bob2 (550, 520);
    box16 = new Bob2 (580, 520);
    box17 = new Bob2 (610, 520);
    box18 = new Bob2 (640, 520);
    box19 = new Bob2 (670, 520);

    box20 =  new Bob3(445, 465);
    box21 =  new Bob3(475, 465);
    box22 =  new Bob3(505, 465);
    box23 =  new Bob3(535, 465);
    box24 =  new Bob3(565, 465);
    box25 =  new Bob3(595, 465);
    box26 =  new Bob3(625, 465);
    box27 =  new Bob3(655, 465);

    bob28 = new Bob4(460, 410);		
    bob29 = new Bob4(490, 410);		
    bob30 = new Bob4(520, 410);		
    bob31 = new Bob4(550, 410);		
    bob32 = new Bob4(580, 410);		
    bob33 = new Bob4(610, 410);		
    bob34 = new Bob4(640, 410);		

    bob35 = new Bob5(475, 355);
    bob36 = new Bob5(505, 355);
    bob37 = new Bob5(535, 355);
    bob38 = new Bob5(565, 355);
    bob39 = new Bob5(595, 355);
    bob40 = new Bob5(625, 355);

    box41 = new Bob6 (765, 375);
    box42 = new Bob6 (795, 375);
    box43 = new Bob6 (825, 375);
    box44 = new Bob6 (855, 375);
    box45 = new Bob6 (885, 375);
    box46 = new Bob6 (915, 375);
    box47 = new Bob6 (945, 375);
    box48 = new Bob6 (975, 375);
    box49 = new Bob6 (1005, 375);
    box50 = new Bob6 (1035, 375);  

    box51 = new Bob7 (780, 320);
    box52 = new Bob7 (810, 320);
    box53 = new Bob7 (840, 320);
    box54 = new Bob7 (870, 320);
    box55 = new Bob7 (900, 320);
    box56 = new Bob7 (930, 320);
    box57 = new Bob7 (960, 320);
    box58 = new Bob7 (990, 320);
    box59 = new Bob7 (1020, 320);

    bob60 = new Bob8 (795, 265);
    bob61 = new Bob8 (825, 265);
    bob62 = new Bob8 (855, 265);
    bob63 = new Bob8 (885, 265);
    bob64 = new Bob8 (915, 265);
    bob65 = new Bob8 (945, 265);
    bob66 = new Bob8 (975, 265);
    bob67 = new Bob8 (1005, 265);

    bob68 = new Bob9 (810, 210);
    bob69 = new Bob9 (840, 210);
    bob70 = new Bob9 (870, 210);
    bob71 = new Bob9 (900, 210);
    bob72 = new Bob9 (930, 210);
    bob73 = new Bob9 (960, 210);
    bob74 = new Bob9 (990, 210);

    bob75 = new Bob10 (825, 155);
    bob76 = new Bob10 (855, 155);
    bob77 = new Bob10 (885, 155);
    bob78 = new Bob10 (915, 155);
    bob79 = new Bob10 (945, 155);
    bob80 = new Bob10 (975, 155);




    //ground = new Ground(600,400,1200,20);
    //platform = new Ground(150, 305, 300, 170);
    //ground1 = new Ground(displayWidth/2, displayHeight/2, 200, 20);
    //box1 = new Box(700,400,30,40);
    //box2 = new Box(920,400,30,40);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);
    //box3 = new Box(700,400,30,40);
    //box4 = new Box(920,400,30,40);
    //pig3 = new Pig(810, 220);
    //three = new Base(300,300,30,30);
    //log3 =  new Log(810,180,300, PI/2);
    //box5 = new Box(810,400,30,40);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,420);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:420});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    left.display();
    ground1.display();
    ground2.display();


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    bob28.display();
    bob29.display();
    bob30.display();
    bob31.display();
    bob32.display();
    bob33.display();
    bob34.display();

    bob35.display();
    bob36.display();
    bob37.display();
    bob38.display();
    bob39.display();
    bob40.display();

    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();

    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box56.display();
    box57.display();
    box58.display();
    box59.display();

    bob60.display();
    bob61.display();
    bob62.display();
    bob63.display();
    bob64.display();
    bob65.display();
    bob66.display();
    bob67.display();

    bob68.display();
    bob69.display();
    bob70.display();
    bob71.display();
    bob72.display();
    bob73.display();
    bob74.display();

    bob75.display();
    bob76.display();
    bob77.display();
    bob78.display();
    bob79.display();
    bob80.display();






    

    //box1.display();
    //box2.display();
    //ground.display();
    //ground1.display();
    //pig1.display();
    //pig1.score();
    //log1.display();
    //three.display();
    //box3.display();
    //box4.display();
    //pig3.display();
    //pig3.score();
    //log3.display();
    //box5.display();
    //log4.display();
    //log5.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory =[];
        Matter.Body.setPosition(bird.body,{x:200,y:50});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}