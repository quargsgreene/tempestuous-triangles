let img,sound_1, t;

function preload(){
  img = loadImage('bg5.jpg');
  sound_1 = loadSound('1.mp3');
  let fr = 10;
  frameRate(fr);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);  
  let col = color(255, 247, 0);
 //lyric 
  let message = createP('Tree');
  message.position(width/8,height/8);
  message.style('font-size','1.5em');
  message.style('color',col);
  message.style('font-family','Courier');
  
  let button = createButton('Sliver');
button.position(3*width/4,height/8);

	
  
//play audio snippet
function soundControl(audio){
    if(!audio.isPlaying()){
      audio.play(); 
      button.html('No!');
    }else{
      audio.pause();
      button.html('Sliver');
    }
  }
  
button.mousePressed(function (){
  soundControl(sound_1);
});
//invisible button  
let invisible_button = createButton(':/)');
  
invisible_button.position(width/4,height/4);

invisible_button.style('opacity','0');
	
	invisible_button.style('width','1px');
		invisible_button.style('height','1px');
	invisible_button.style('font-size','1px');
  
invisible_button.mousePressed(hiddenAlert);
	
	

t = new Triangle ();
	
//sentence
let sentence = createP('I sat near droves of tents under bridges, and he, near a place where sentient beings used to suffocate to death on the regular while unclothed. ');
sentence.position(width/10,height/2);
sentence.style('color','white');
sentence.style('font-family','Monaco');
	
//clock
	
	
 function displayClock() {
    let h = hour();
    let m = minute();
	 	let offset = floor(random(4));
    let c = createElement("time", abs(h-offset) + ":" + m);
    c.style("color", "rgba(200,200,200,0.1)");
    c.style("font-family", "Monaco");
    c.position(random(width), random(height));
    if (m < 10) {
      c.html(
        abs(h-offset) + ":0" +m,
        0,
        random(200),
        random(400)
      );
    } else {
      c.html(
        abs(h-offset) + ":" + m,
        0,
        random(200),
        random(400)
      );
    }
    setInterval(displayClock, 60000);
  }

  displayClock();

}

function draw() {
  
t.display();
  
push();

  
//lines
push();
strokeWeight(0.5);

for(let i = 0; i<20; i++){
  stroke(150);
  line(width/4+2*i, 0, width/4 +2*i, height);
}
for( let i =0; i<50; i++){
  stroke(25);                  
	line(0,3*height/4+2*i,width,3*height/4+2*i);
}

pop();

//number
let col = color(random(255));
fill(col); 
stroke(25);
strokeWeight(0.2);
textSize(random(1,12));
text('1/4',random(width),random(height));

//blob
scale(2);
translate(width/4,height/8);
blob((width+height)/80);
  
}

function blob(number){
  
let col_1 = color(148, 196, 2);
push();
  
let col_2 = color(0);

let col_3 = lerpColor(col_1,col_2,sin(millis()/1000));
  
  stroke(col_3);
  strokeWeight(number/20);
  noFill();  ellipse(number+width/(2*number),number+height/(2*number),number*(number-2),number*(number-1));
  
  let newNumber = number-1;
  if(newNumber>0){
    blob(newNumber);
  }
pop();
  

  

}




function windowResized (){
   createCanvas(windowWidth, windowHeight);
  background(img);
}



//hidden text
function hiddenAlert(){
  alert('qmwnebrvtcyxuz check somewhere else! qmwnebrvtcyxuz qmwnebrvtcyxuz qmwnebrvtcyxuz qmwnebrvtcyxuz qmwnebrvtcyxuz err err arr orr' );
}



class Triangle {
  constructor (){ 
    this.x1=width/3;
    this.y1=height/3;
    this.x2=width/2;
    this.y2=height/2;
    this.x3=width/3;
    this.y3=3*height/4;
    this.r = 10;
  }
  display (){ 


    push();
fill(232, 93, 0,5);
triangle(this.x1+mouseX,this.y1+mouseY,this.x2+mouseX,this.y2+mouseY,this.x3+mouseX,this.y3+mouseY);    
   
     pop();
    push();
    fill(225,20);
    circle(this.x1+mouseX,this.y1+mouseY,this.r*sin(mouseX));
    pop();
    push();
    fill(0,92,0,20);
    circle(this.x2+mouseX,this.y2+mouseY,this.r*cos(mouseY));
    pop();
    push();
    fill(91, 2, 173,30);
    circle(this.x3+mouseX,this.y3+mouseY,this.r);
    pop();

 }
}

