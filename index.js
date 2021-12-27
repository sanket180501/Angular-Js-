var input_field = document.querySelectorAll(".form-control");
var login = document.querySelector("#login");

input_field.forEach(function(input_item){
  input_item.addEventListener("input",function(){
     if(input_item.value.length > 8){
        console.log(input_item.value);
     } 
  })  
})

function validation(){
    var emailaddress = document.querySelector("#emailaddress");
    var password = document.querySelector("#password");
    var error_msg = document.querySelector(".error_msg");

    if(emailaddress.value.length <= 8 || password.value.length <= 8){
        error_msg.style.display = "inline-block";
        emailaddress.style.border = "1px solid #f74040";
        password.style.border = "1px solid #f74040";
        return  false;
    }
    else{
        return true;
    }
}