let Hill1 = document.getElementById('Hill1')
let Hill2= document.getElementById('Hill2')
let Hill3= document.getElementById('Hill3')
let Hill4= document.getElementById('Hill4')

window.addEventListener('scroll' , () =>{
    let value = window.scrollY;


    text.style.marginTop = value *2.5 + 'px';
    Hill2.style.Top = value * -1.5 + 'px';
    Hill3.style.left= value * -1.5 + 'px';
    Hill4.style.right=value* -1.5 + 'px';




}); 


document.getElementById("lo").addEventListener("click", redirectFunction);
function redirectFunction(){
            window.location.href = "login.html";
        }
        let signupBtn = document.getElementById("signupBtn");   
        let signinBtn = document.getElementById("signinBtn"); 
        let nameField = document.getElementById("nameField"); 
        let title = document.getElementById("title");
   
   
   
   
        signinBtn.onclick = function(){
           nameField.style.maxHeight = "0";
           title.innerHTML = "Sign In";
           signupBtn.classList.add("disable");
           signupBtn.classList.remove("disable");
        }
    
        signupBtn.onclick = function(){
           nameField.style.maxHeight = "60px";
           title.innerHTML = "Sign In";
           signupBtn.classList.remove("disable");
           signupBtn.classList.add("disable");
        }      
