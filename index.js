let barE = document.getElementById("barEmail")
let barK = document.getElementById("barKey")
let em = document.getElementById("email")
let ke = document.getElementById("key")
let btn = document.getElementById("btnLogin")

    barE.onclick = function(){
         em.style.transform = "translateY(-35px)";
         em.style.animation = `
         transitionEm 1s ease
         `
    }
    barK.onclick = function(){
        ke.style.transform = "translateY(-35px)";
        ke.style.animation = `
         transitionKe 1s ease
         `
    }   
    btnLogin.onclick = function(){
        if(barK.value == "secretcode"){
            barK.style.color = "violet"
        }
        barE.value = ""
        barK.value = ""

        em.style.transform = "translateY(0px)";
        em.style.animation = `
        CancelAniEm 1s ease
        `
        ke.style.transform = "translateY(0px)";
        ke.style.animation = `
        CancelAniKe 1s ease 
        `
}
    em.onclick = function(){
         em.style.transform = "translateY(-35px)";
         em.style.animation = `
         transitionEm 1s ease
         `
    }
    ke.onclick = function(){
         ke.style.transform = "translateY(-35px)";
         ke.style.animation = `
         transitionKe 1s ease
         `
    }
    