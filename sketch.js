var gameState = "screen1"
var male, female, player1, submit1, submit2
var binImg, bin, hImg, hello, boyImg, boy, girlImg, girl, groundImg, ground

function preload() {
  binImg = loadImage("bin.png");
  hImg = loadImage("hello.png");
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl (2).png");
  groundImg = loadImage("background.png");

  screen3=loadImage("data:image/jpeg;base64,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")
}

function setup() {
  createCanvas(800, 400);
  ground = createSprite(400, 250);
  ground.addImage(groundImg);
  ground.scale = 0.8

  male = createSprite(300, 300, 10, 10)
  male.addImage(boyImg)
  male.scale = 0.02


  bin = createSprite(650, 90);
  bin.addImage("throw", binImg);
  bin.scale = 0.13
}

function draw() {

  if (gameState === "screen1") {
    background(250, 246, 0);
    textSize(50)
    fill(255, 0, 250)
    text("throw the garbage", 200, 100)
    text(".............................", 200, 120)
    textSize(25);
    fill("red")
    text("please press space to start", 250, 200)
    male.visible = false
    if (keyCode === 32) {
      gameState = "screen2"
    }
  }

  if (gameState === "screen2") {
    background(0, 250, 255)
    bin.visible = false;
    male.visible = true
    // male = createButton("MALE")
    // male.position(300, 300)

    // female = createButton("FEMALE")
    // female.position(400, 300)
    // hello = createSprite(400, 80);
    // hello.addImage(hImg);
    // hello.scale = 0.3;
    // boy = createSprite(320, 250);
    // boy.addImage(boyImg);
    // boy.scale = 0.05
    // girl = createSprite(450, 250);
    // girl.addImage(girlImg);
    // girl.scale = 0.12

    textSize(25);
    fill("blue")
    text("please fill enteries to start!!", 250, 170)


    if (mousePressedOver(male)) {
      player1 = createInput("NAME")
      player1.position(235, 330);
      submit1 = createButton('SUBMIT');
      submit1.position(235, 370)

      submit1.mousePressed(() => {
        gameState = "screen3"
        background(screen3)
        player1.hide()
        submit1.hide()
      })
    }

    // male.mousePressed(() => {
    //   //console.log("it is working")    
    //   player1 = createInput("NAME")
    //   player1.position(235, 330);
    //   submit1 = createButton('SUBMIT');
    //   submit1.position(235, 370)
    //   submit1.mousePressed(()=>{
      //     gameState="screen3" 
      //     submit1.hide()
    //     player1.hide()  
    //   })
    // })
    
    // female.mousePressed(() => {
      //   //console.log("it is working")
    //   player1 = createInput("NAME")
    //   player1.position(400, 330);
    //   submit2 = createButton("SUBMIT")
    //   submit2.position(400, 370)
    //   submit2.mousePressed(() => {
      //     gameState = "screen4"
    //     player2.hide()
    //     submit2.hide()
    //   })
    // })
  }

  if (gameState === "screen3") {
    ground.visible=false
    console.log("I am here.!! yipppieee!!!")
    male.visible = false
    
  }
  drawSprites();
}


// hide(){
//   male.hide()
//   female.hide()
//   player1.hide()
//   player2.hide()
//   submit1.hide()
//   submit2.hide()
// }




