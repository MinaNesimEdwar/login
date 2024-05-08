let userNameRegister=document.getElementById("userNameRegister");
let userEmailRegister=document.getElementById("userEmailRegister");
let userPasswordRegister=document.getElementById("userPasswordRegister");
let nameAlert=document.getElementById("nameAlert");
let emailAlert=document.getElementById("emailAlert");
let passwordAlert=document.getElementById("passwordAlert");
let successAlert=document.getElementById("successAlert");
let loginEmail=document.getElementById("loginEmail");
let loginPassword=document.getElementById("loginPassword");
let successLogin=document.getElementById("successLogin");
let great=document.getElementById("great");

let successUser;

let users;
if (localStorage.getItem('users')){
users=JSON.parse(localStorage.getItem('users'))
}else{
    users=[];
}


//function to addAccount
function addAccount(){
    if(validateUserName()===true&&validateUserEmail()===true&&validateUserPassword()===true){
     let user ={
        name:userNameRegister.value,
        email:userEmailRegister.value,
        password:userPasswordRegister.value,
    };
    successAlert.classList.replace("d-none","d-block");
    users.push(user);
    addToLocalStorage();
    clearInputs();
    setTimeout(function(){
        window.open("./index.html","_self")
    },1000)
    }else if(validateUserName()===false){
        nameAlert.classList.replace("d-none","d-block");
    }else if(validateUserEmail()===false){
        emailAlert.classList.replace("d-none","d-block");
    }else if(validateUserPassword()===false){
        passwordAlert.classList.replace("d-none","d-block");
    }

}



// function to addToLocalStorage
function  addToLocalStorage(){
localStorage.setItem('users',JSON.stringify(users))
}

// clear inputs
function clearInputs(){
    userNameRegister.value="";
    userEmailRegister.value="";
    userPasswordRegister.value="";
}


//function to validateUserName
function validateUserName(){
    let regex=/^[A-Za-z0-9]{3,15}$/;
    if(regex.test(userNameRegister.value)){
        userNameRegister.classList.add('is-valid');
        userNameRegister.classList.remove('is-invalid');
        nameAlert.classList.replace("d-block","d-none");
          return true;
      }else{
        userNameRegister.classList.add('is-invalid');
        userNameRegister.classList.remove('is-valid');
        nameAlert.classList.replace("d-none","d-block");
        return false ;
      }
}


//function to validateUserEmail
function validateUserEmail(){
    let regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(userEmailRegister.value)){
        userEmailRegister.classList.add('is-valid');
        userEmailRegister.classList.remove('is-invalid');
        emailAlert.classList.replace("d-block","d-none");
          return true;
      }else{
        userEmailRegister.classList.add('is-invalid');
        userEmailRegister.classList.remove('is-valid');
        emailAlert.classList.replace("d-none","d-block");
        return false ;
      }
}


//function to validateUserPassword
function validateUserPassword(){
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regex.test(userPasswordRegister.value)){
        userPasswordRegister.classList.add('is-valid');
        userPasswordRegister.classList.remove('is-invalid');
        passwordAlert.classList.replace("d-block","d-none");
          return true;
      }else{
        userPasswordRegister.classList.add('is-invalid');
        userPasswordRegister.classList.remove('is-valid');
        passwordAlert.classList.replace("d-none","d-block");
        return false ;
      }
}

let data=JSON.parse(localStorage.getItem('users'));
// function checkLogin
function checkLogin(){

    for(let i=0 ;i<data.length;i++){
        if(loginEmail.value===data[i].email&&loginPassword.value===data[i].password){
            successUser=data[i].name;
            localStorage.setItem("successUser",successUser);
            successLogin.classList.replace("d-none","d-block");
            setTimeout(function(){
                window.open("./home.html","_self");
            },1000)
            console.log(successUser);
            
        }else{
            successLogin.classList.replace("d-none","d-block");
            successLogin.classList.replace("alert-success","alert-danger");
            successLogin.innerHTML="Email or Password isn't exist";
        }
        
    }

}


great.innerHTML=`Welcome ${localStorage.getItem("successUser")}`



// function lgo out
function logout(){
    window.open("./index.html","_self");
}