class Form
{
    constructor()
    {
      this.title=createElement('h1');
      this.title.html("WELCOME TO THE");
      this.title2=createElement('h1');
      this.title2.html("TAILORING SOLUTIONS")
      this.input=createInput("PLEASE ENTER YOUR NAME");
      this.button=createButton('CONTINUE');
      this.greeting=createElement('h3');
    }

    hide()
    {
    
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
      this.title.hide();
      this.title2.hide();
  
    }

    display()
{
    this.title.position(410,80);
    this.title2.position(400,150);
    this.input.position(480,250);
    this.button.position(680,550);

    this.button.mousePressed(()=>{
        
     
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        customer=new Customer();
        customer.name=this.input.value();
        customer.update();
        this.greeting.html("HELLO! "+customer.name);
        this.greeting.position(390,100);
        page2=new Form2();
        page2.display();
    })


    
}
  
}