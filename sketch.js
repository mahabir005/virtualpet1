var dog,happyDog,database,foodS,foodStock;


function preload()
{
	dogIMG = loadImage("Dog.png");
	happydogIMG = loadImage("happydog.png");
}

function setup() {
	database = firebase.database();
	createCanvas(500, 500);
	dog = createSprite(200,330,30,30);
	dog.addImage(dogIMG);
	dog.scale = 0.2;
	foodStock = database.ref('Food');
	foodStock.on("value",readstock);
     



  
}


function draw() {
  background("green");
  
if(keyWentDown(UP_ARROW)){
	writeStock(foodS);
	dog.addImage(happydogIMG);
}
drawSprites();
textSize(20);
fill("white");
text("Food Stock:"+foodS,80,200);
text("Press up arrow key to feed the dog.",80,100);
  
 
}


function readstock(data){
	foodS = data.val();
	}


function writeStock(x){
	if(x<=0){
	   x=0;
	}
	else{
		x=x-1;
	}
    database.ref('/').update({
		Food:x
    })

}


