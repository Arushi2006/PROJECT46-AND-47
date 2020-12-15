class Form2
{
    constructor()
    { 
    this.title=createElement('h2');
    this.title.html("ENTER YOUR CREDENTIALS");
    this.title2=createElement('h2');
    this.title2.html("PLEASE SELECT YOUR GENDER");
    this.input1=createInput("ENTER YOUR PHONE NUMBER");
    this.input2=createInput("ENTER YOUR E-MAIL");
    this.input3=createInput("ENTER YOUR ADDRESS");
    this.female=createButton('FEMALE');
    this.male=createButton('MALE');
    this.back=createButton('BACK');

    }

    hide()
    {
    
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.title.hide();
      this.title2.hide();
      this.female.hide();
      this.male.hide();
  
    }


    display()
    {
        this.title.position(410,150);
        this.title2.position(410,380);
        this.input1.position(450,250);
        this.input2.position(450,300);
        this.input3.position(450,350);
        this.female.position(450,450);
        this.male.position(530,450);
        this.back.position(550,580);
    
        this.back.mousePressed(()=>{ 
           page1=new Form;
            page1.display();
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.title.hide();
            this.title2.hide();
            this.female.hide();
            this.male.hide();
            this.back.hide();

        })

    this.male.mousePressed(()=>{
        
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.title.hide();
        this.title2.hide();
        this.female.hide();
        this.male.hide();
    
        page3=new Form3();
        page3.display();
    })
 this.female.mousePressed(()=>
 {
  this.input1.hide();
  this.input2.hide();
  this.input3.hide();
  this.title.hide();
  this.title2.hide();
  this.female.hide();
  this.male.hide();

  page4=new Form4();
  page4.display();
 })
    
 }
}


