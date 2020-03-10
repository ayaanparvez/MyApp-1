class SignUp{
    constructor(){
        this.input=createInput("Password");
        this.input2=createInput("Gender");
        this.input3=createInput("DateOfBirth");
        this.input4=createInput("Age");
        this.input5=createInput("EmailID");
        this.input6=createInput("Name");
        this.button=createButton("Sign Up");
        this.button2=createButton("Have an account? Login instead")
        this.greeting=createElement('h2');
        this.title=createElement('h2')
    }
    
        getName(){
      var userNameRef=database.ref('/Credentials')
      userNameRef.on("value",function(data){
        userName=this.input6.val()
      })
      }
      update(name){
database.ref('/').update({
  userName:name,
})}
     getEmailID(){
       var userEmailIDRef=database.ref('/Credentials')
       userEmailIDRef.on("value",function(data){
         userEmailID=this.input5.val()
       })
     }
     update(emailID){
       database.ref('/').update({
         userEmailID:emailID
       })
     }
     getAge(){
       var userAgeRef=database.ref('/Credentials')
       userAgeRef.on("value",function(data){
         userAge=this.input4.val()
       })
     }
     update(age){
       database.ref('/').update({
         userAge:age
       })
     }
     getDOB(){
       var userDOBRef=database.ref('/Credentials')
       userDOBRef.on("value",function(data){
         userDOB=this.input3.val();
       })
     }
     update(DOB){
       database.ref('/').update({
         userDOB:DateOfBirth
       })
     }
     getGender(){
       var userGenderRef=database.ref('/Credentials')
       userGenderRef.on("value",function(data){
         userGender=this.input2.val();
       })
     }
     update(gender){
       database.ref('/').update({
         userGender:gender
       })
     }
     getPassword(){
       var userPasswordRef=database.ref('/Credentials')
       userPasswordRef.on("value",function(data){
         userPassword=this.input.val()
       })
     }
     update(password){
       database.ref('/').update({
         userPassword:password
       })
     }
setName(){
  database.ref('/Credentials/name').set({
  'name':userName
  })
}
    display(){
        this.title.html("Welcome to My App");
        this.title.position(displayWidth/2-100,0);
        this.input.position(displayWidth/2 - 40 , displayHeight/2-100);
        this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 120);
        this.input3.position(displayWidth/2 - 40 , displayHeight/2 - 140);
        this.input4.position(displayWidth/2 - 40 , displayHeight/2 - 160);
        this.input5.position(displayWidth/2 - 40 , displayHeight/2 - 180);
        this.input6.position(displayWidth/2 - 40 , displayHeight/2 - 200);

        this.button.position(displayWidth/2 + 30, displayHeight/2-50);
        this.button2.position(displayWidth/2-40, displayHeight/2);

       this.button.mousePressed(function(){
            this.input.hide();
            this.input2.hide();
            this.input3.hide();
            this.input4.hide();
            this.input5.hide();
            this.input6.hide();
            this.button.hide();
            this.button2.hide();
            homepage.display();
          });
           
       this.button2.mousePressed(()=>{
            this.input.hide();
            this.input2.hide();
            this.input3.hide();
            this.input4.hide();
            this.input5.hide();
            this.input6.hide();
            this.button.hide();
            this.button2.hide();
            login.display();
          })
    }
    }