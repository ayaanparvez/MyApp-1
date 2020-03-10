var canvas, backgroundImage;
var database;
var signup,login,homepage
var userName,userEmailID,userAge,userGender,userDOB,userPassword
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  signup=new SignUp();
  login=new Login();
  homepage=new HomePage();
}


function draw(){
  signup.display()
}
 async function getLocation(){
   var response=await fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAhgvT9DhSykENcnziBd9Wik1uIoWxSjnk")
    
  }