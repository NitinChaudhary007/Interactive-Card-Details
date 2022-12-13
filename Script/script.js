// alert("its working");
// var element = document.querySelector('#chName');
// console.log(element.children[3].children[0]);
// element.children[3].children[0].innerHTML = "*hello";


var name1 = "";
document.querySelector("#cardholderName").addEventListener("keydown", function (event) {
    if(event.key=="Backspace") {
        name1 = name1.slice(0, -1);
        document.querySelector(".cdName").innerHTML = name1.toUpperCase();
    } else {
        name1 = name1 + event.key;
        document.querySelector(".cdName").innerHTML = name1.toUpperCase();
    }
});

var numb = "";
var count = 0;
document.querySelector("#cardNumber").addEventListener("keydown", function(event){
    if(count<16) {
        
        if(count%4 == 0) {
            numb = numb + " ";
        }
        if(event.key=="Backspace") {
            numb = numb.slice(0, -1);
            document.querySelector(".cdNumber").innerHTML = numb;
            if(count>0) {
                count--;
            }
        }
        if(!isNaN(event.key)) {
            numb = numb + event.key;
            document.querySelector(".cdNumber").innerHTML = numb;
            count++;
        }
    }
});
var datem = "";
var count2 = 0;
document.querySelector("#expDateMM").addEventListener("keydown", function(event){
    
    if(!isNaN(event.key) && count2<2) {
        datem = datem + event.key;
        document.querySelector(".cdExp").innerHTML = datem;
        count2++;
    }
    
});

var count3 = 0;
document.querySelector("#expDateYY").addEventListener("keydown", function(event){
    if(count3==0) datem = datem + "/";
    if(!isNaN(event.key) && count3<2) {
        datem = datem + event.key;
        document.querySelector(".cdExp").innerHTML = datem;
        count3++;
    }
});

var cdCVC = "";
var count4 = 0;
document.querySelector("#cvc").addEventListener("keydown", function(event){
    
    if(!isNaN(event.key) && count4<3) {
        cdCVC = cdCVC + event.key;
        document.querySelector(".cdCvc").innerHTML = cdCVC;
        count4++;
    }
});

// ==============================form validation=======================
// ====================================================================
// ==============================FORM VALIDATiON=======================

// document.querySelector("#confirmBtn").addEventListener("click", validate);


function clearError() {
    var errors = document.querySelectorAll(".formError");
    for (let item of errors) {
        item.innerHTML = "";
    }
    returnVal = true;
}

function setError(id, error) {
    var element = document.querySelector(id);
    element.children[3].children[0].innerHTML = error;
}

var form = document.getElementById("myForm");
function handleForm(event){
     event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);

var returnVal = true;
function validate() {
    clearError();

    var name = document.querySelector('#cardholderName').value;
    if (name.length > 15 || name.length<3) {
        setError("#chName", "*Length too long");
        returnVal = false;
    }

    var cdNum = document.querySelector('#cardNumber').value;
    if (isNaN(cdNum)) {
        setError('#cdNum', "*Enter Numeric value only");
        returnVal = false;
    }
    if (cdNum.length != 16) {
        setError('#cdNum', "*Invalid Number");
        returnVal = false;
       
    }
    // returnVal = true;
    if(returnVal==true) {
        document.querySelector(".form").classList.toggle("displayNone");
        document.querySelector(".thank").classList.toggle("displayNone");
    } else {
        console.log("not working");
    }     

    // return returnVal;
}

// document.querySelector("#confirmBtn").addEventListener("click",  function(){
//     document.querySelector(".form").classList.toggle("displayNone");
//     document.querySelector(".thank").classList.toggle("displayNone");
// });

document.querySelector("#continueBtn").addEventListener("click", function(){
    document.querySelector(".form").classList.toggle("displayNone");
    document.querySelector(".thank").classList.toggle("displayNone");
    window.location.reload();
});
