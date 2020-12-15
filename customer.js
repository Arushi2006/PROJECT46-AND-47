class Customer
{
   constructor()
   {
       this.name=null;
       this.address=null;
       this.phonenumber=null;
       this.gender=null;
       this.email=null;
       this.index=null;
   }

   update()
   {
       var customerIndex="customers/customer"+this.index;
       database.ref(customerIndex).set({
           name:this.name,
           address:this.address,
           email:this.email,
           phonenumber:this.phonenumber,
           gender:this.gender
       })
   }

   static getCustomerInfo()
{
  var customerInforef=database.ref('customers').on("value",(data)=>{
    allcustomers=data.val();
  })
}
}