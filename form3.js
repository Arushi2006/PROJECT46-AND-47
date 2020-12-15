class Form3
{
  
    constructor()
    { 
    this.button=createButton('submit');
    this.nylon=createButton('nylon');
    this.cotton=createButton('cotton');
    this.silk=createButton('silk');
    this.leather=createButton('leather');
    this.wool=createButton('wool');
    this.denim=createButton('denim');
   //this.back=createButton('BACK');

    }
  
    hide()
    {
      this.button.hide();
      this.nylon.hide();
    this.cotton.hide();
    this.silk.hide();
    this.leather.hide();
    this.wool.hide();
    this.denim.hide();
  
    }


    display()
    {
        this.button.position(600,550);
        

     this.nylon.position(400,200);
    this.cotton.position(400,250);
    this.silk.position(400,300);
    this.leather.position(400,350);
    this.wool.position(400,400);
    this.denim.position(400,450);
   // this.back.position(550,580);

    this.button.mousePressed(()=>{
        this.nylon.hide();
        this.cotton.hide();
        this.silk.hide();
        this.leather.hide();
        this.wool.hide();
        this.denim.hide();

        page5=new Form5();
        page5.display();
    })

   // this.back.mousePressed(()=>{ 
     //   page2=new Form;
       //  page2.display();
         //this.nylon.hide();
        //this.cotton.hide();
         //this.silk.hide();
         //this.leather.hide();
         //this.wool.hide();
         //this.denim.hide();
         //this.back.hide();

    // })

   

    }

}


