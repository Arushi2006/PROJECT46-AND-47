var customer;
var page1,page2,page3,page4,page5,page6;
var girlImage;
var menImage;
var database;

function preload()
{
    menImage=loadImage("men.jpg");
    girlImage=loadImage("girl.jpg")
}

function setup()
{
    createCanvas(500,500);
    database=firebase.database();
    page1=new Form();
    
 

}

function draw()
{
    page1.display();
}