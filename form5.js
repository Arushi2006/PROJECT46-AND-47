class Form5
{
  constructor()
  {
   this.title=createElement('h2');
   this.title.html("SIZE");
   this.input1=createInput("a");
   this.input2=createInput("b");
   this.input3=createInput("c");
   this.input4=createInput("d");
   this.input5=createInput("e");
   this.input6=createInput("ENTER ADDITIONAL INSTRUCTIONS IF NEEDED");
    //this.back=createButton('BACK');

  

  }  
     
    
display()
{
  this.title.position(400,150);
  this.input1.position(400,250);
  this.input2.position(400,300);
  this.input3.position(400,350);
  this.input4.position(400,400);
  this.input5.position(400,450);
  this.input6.position(400,500);
  // this.back.position(550,580);
  image(menImage,300,100,180,150);
}

}