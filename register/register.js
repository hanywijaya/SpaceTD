function change(x){
    x.classList.toggle("change");

    const words = document.getElementsByClassName('words')
    
    words[0].classList.toggle("active")
    words[1].classList.toggle("active")
    words[2].classList.toggle("active")
    words[3].classList.toggle("active")

    const header = document.getElementsByClassName('header')[0]
    header.classList.toggle("active")
}

function formValidation(e){
    e.preventDefault();

    var name = document.getElementById("fullname")
    var female =  document.getElementById("female")
    var male  = document.getElementById("male")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var dob = document.getElementById("dob")
    var country = document.getElementById("country")


    //validate all fields not empty
    if(fullname.value.length == 0){
        document.getElementById("msg-1").innerHTML = "This field is required!"
    }else{
        document.getElementById("msg-1").innerHTML = " "
    }

    if(!male.checked && !female.checked){
        document.getElementById("msg-2").innerHTML = "This field is required!"
    }else{
        document.getElementById("msg-2").innerHTML = " "
    }

    if(dob.value.length == 0 ){
        document.getElementById("msg-3").innerHTML = "This field is required!"
    }else{
        //validate age >18
        var monthDifference = Date.now() - new Date(dob.value).getTime();
        var ageInDate = new Date(monthDifference);
        var year = ageInDate.getUTCFullYear();
        var age = Math.abs(year - 1970);

        if(age < 18){
            document.getElementById("msg-3").innerHTML = "Age must be older than 18!"
        }else{
            document.getElementById("msg-3").innerHTML = " "
        }
    }

    if(country.value.length == 0 ){
        document.getElementById("msg-4").innerHTML = "This field is required!"
    }else{
        document.getElementById("msg-4").innerHTML = " "
    }

    if(email.value.length == 0 ){
        document.getElementById("msg-5").innerHTML = "This field is required!"
    }else{
        //validate use gmail
        if(!email.value.endsWith("@gmail.com")){
            document.getElementById("msg-5").innerHTML = "Email has to end with '@gmail.com'!"
        }else{
            document.getElementById("msg-5").innerHTML = " "
        }
        
    }

    if(password.value.length == 0 ){
        document.getElementById("msg-6").innerHTML = "This field is required!"
    }else{  
        //validate password length > 8 characters
        if(password.value.length < 9){
            document.getElementById("msg-6").innerHTML = "Password must have more than 8 characters!"
        }else{
            document.getElementById("msg-6").innerHTML = " "
        }  
    }

}