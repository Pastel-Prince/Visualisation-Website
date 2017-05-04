var img;
var hearts = [];
var animal = 0; //0 cats, 1 dogs
var gender = 0; //0 male, 1 female, 2 prefer, 3 other
var count = 100

function preload(){
    dog = loadImage("DogIcon.png");
    cat = loadImage("CatIcon.png");
    for (var i=0; i<=count; i++){
      hearts.push(new Heart());
    }
}

function setup() {
  var cnv = createCanvas(600,600)
  cnv.class('scr')
}

function draw(){

  switch(gender){
    case 0:
      background(102,220,255)
      text("41", 70, 420)
      textSize(48)
      text("59", 470, 420)
      textSize(48)
      break;
    case 1:
      background(252,178,255)
      text("48", 70, 420)
      textSize(48)
      text("52", 470, 420)
      textSize(48)
      break;
    case 2:
      background(255,166,176)
      text("50", 70, 420)
      textSize(48)
      text("50", 470, 420)
      textSize(48)
      break;
    case 3:
      background(166,255,166)
      text("70", 70, 420)
      textSize(48)
      text("30", 470, 420)
      textSize(48)
  }

  image(dog,25,250, 73.7*2, 66*2)
  image(cat,420,250, 73.7 *2, 66*2)

  for(var i=0; i<hearts.length; i++){
    hearts[i].display()

    if (gender == 0){
      if (animal == 0){
        if(i<=41){
          hearts[i].color = (0)
          hearts[i].moveLeft();
        }
        else if (i>41) {
          hearts[i].color = (255)
          hearts[i].moveRight();
        }
      }
    }

    if (gender == 1){
      if (animal == 0){
        if(i<=48){
          hearts[i].color = (0)
          hearts[i].moveLeft();
        }
        else if (i>48) {
          hearts[i].color = (255)
          hearts[i].moveRight();
        }
      }
    }

    if (gender == 2){
      if (animal == 0){
        if(i<=50){
          hearts[i].color = (0)
          hearts[i].moveLeft();
        }
        else if (i>50) {
          hearts[i].color = (255)
          hearts[i].moveRight();
        }
      }
    }

    if (gender == 3){
      if (animal == 0){
        if(i<=70){
          hearts[i].color = (0)
          hearts[i].moveLeft();
        }
        else if (i>70) {
          hearts[i].color = (255)
          hearts[i].moveRight();
        }
      }
    }

  }
}

var Heart = function() {
  this.x = random(600);
  this.y = random(600);
  this.color = 0;
  this.velocity = 0;
  this.velocityY = 0;

  this.moveLeft = function() {
    if (this.x < 100){
      this.velocity += 0.01
    }
    else if (this.x > 100){
      this.velocity -= 0.01
    }
    if (this.y < 300){
      this.velocityY += 0.01
    }
    if (this.y > 300){
      this.velocityY -= 0.01
    }
    this.x += this.velocity
    this.y += this.velocityY
    this.x = constrain(this.x, 0,600)
  };

  this.moveRight = function(){
    if (this.x < 470){
      this.velocity += 0.01
    }
    else if (this.x > 470){
      this.velocity -= 0.01
    }
    if (this.y < 300){
      this.velocityY += 0.01
    }
    if (this.y > 300){
      this.velocityY -= 0.01
    }
    this.x += this.velocity
    this.y += this.velocityY
    this.x = constrain(this.x, 0,600)
  }

  this.display = function(){
    fill(this.color)
    noStroke()
    ellipse(this.x, this.y, 10, 10)
    ellipse(this.x-8, this.y, 10, 10)
    triangle(this.x-13.25, this.y, this.x-4, this.y+10, this.x+5.5,this.y)

    if(gender == 4){
      textSize(24)
      text("Press Left / Right to change gender", 110, 595  )
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && gender > 0) {
    gender -= 1;
    print(gender)
  } else if (keyCode === RIGHT_ARROW && gender < 3) {
    gender += 1;
    print(gender)
  } else if (keyCode === 80 && gender != 4) {
    gender = 4;
    print(gender)
  } else if (keyCode === 80 && gender == 4) {
    gender = 0;
    print(gender)
  }
}
