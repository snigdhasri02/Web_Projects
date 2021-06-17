function validateFname(){
    let field=document.regform.fname;
    let err=document.getElementById("errFname");

    if(field.value==""){
        err.style.display="block";
        return false;
    }
    else{
        err.style.display="none";
    }
    return true;
}

function validateLname(){
    let field=document.regform.lname;
    let err=document.getElementById("errLname");

    if(field.value==""){
        err.style.display="block";
        return false;
    }
    else{
        err.style.display="none";
    }
    return true;
}

function validateEmail(){
    let field=document.regform.email;
    let emailPattern = /^[a-zA-z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;
    let err=document.getElementById("errEmail");
    let errvalid=document.getElementById("errValidEmail");

    if(field.value==""){
        err.style.display="block";
        return false;        
    }else{
        err.style.display="none";
        if(!emailPattern.test(field.value)) { 
            errvalid.style.display="block";
            return false;
        }else{
            errvalid.style.display="none";
        }
    }
    return true;
}

function validateMobile(){
    let field=document.regform.MobNum;
    let err=document.getElementById("errMobile");
    let errvalid=document.getElementById("errValidMobile");
    let mobilePattern = /^\d{10}$/;

    if(field.value==""){
        err.style.display="block";
        return false;        
    }else{
        err.style.display="none";
        if(!mobilePattern.test(field.value)) { 
            errvalid.style.display="block";
            return false;
        }else{
            errvalid.style.display="none";
        }
    }
    return true;
}

function validateGender(){
    let field=document.regform.gender;
    let err=document.getElementById("errGender");
    if(!(field.value=="male" || field.value=="female")){
        err.style.display="block";
        return false;
    }else{
        err.style.display="none";
    }
    return true;
}

function validatePassword(){
    let field=document.regform.pwd;
    let emailPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\@\%\$]).{8,12}$/;
    let err=document.getElementById("errPwd");
    let errvalid=document.getElementById("errValidPwd");

    if(field.value==""){
        err.style.display="block";
        return false;        
    }else{
        err.style.display="none";
        if(!emailPattern.test(field.value)) { 
            errvalid.style.display="block";
            return false;
        }else{
            errvalid.style.display="none";
        }
    }
    return true;
}

function validateRePassword(){
    let field1=document.regform.pwd;
    let field2=document.regform.repwd;
    let err=document.getElementById("errRePwd");

    if(field1.value!=field2.value) { 
        err.style.display="block";
        return false;
    }else{
        err.style.display="none";
    }
    return true;
}

function validateForm(){

    let fname = validateFname();
    let lname = validateLname();
    let email = validateEmail();
    let mobile = validateMobile();
    let gender = validateGender();
    let pwd = validatePassword();
    let repwd = validateRePassword();

    if(fname && lname && email && mobile && gender && pwd && repwd){
        return true;
    }else{
        return false;
    }

}

function clearErrs(){
    document.getElementById("errFname").style.display="none";
    document.getElementById("errLname").style.display="none";
    document.getElementById("errEmail").style.display="none";
    document.getElementById("errValidEmail").style.display="none";
    document.getElementById("errMobile").style.display="none";
    document.getElementById("errValidMobile").style.display="none";
    document.getElementById("errGender").style.display="none";
    document.getElementById("errPwd").style.display="none";
    document.getElementById("errValidPwd").style.display="none";
    document.getElementById("errRePwd").style.display="none";
}


/*const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach((ele,idx)=>{
    ele.addEventListener('blur',(e)=>{
        let err = e.target.nextElementSibling.nextElementSibling;
        if(e.target.value==""){
            err.style.display="block";
            return false;
        }else{
            err.style.display="none";
        }
        console.log (e.target);
        return true;
    });
});*/
