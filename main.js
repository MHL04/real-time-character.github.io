const textAreaEL=document.getElementById("textarea")
const totalCounterEL=document.getElementById("total-counter")
const totalRemainingEl=document.getElementById("total-remaining")

//entendre l evenement du keyboard(keyup)
textAreaEL.addEventListener("keyup",()=>{
    updateCounter()
});


//counter total caracter=longeur valeur tape dans le champ,
//maximum caractere predefini dans index.html,getattribute pour rappatrier maxlenght=50;
//total caracter restant=maxlenght(50)-longueur valeur saisi dans le champs
let updateCounter=()=>{
    totalCounterEL.innerText= textAreaEL.value.length
    totalRemainingEl.innerText= textAreaEL.getAttribute("maxlenght") - textAreaEL.value.length;
    //empecher d ecrire plus de 100 caractere
    textAreaEL.onkeydown = function() {
        if (this.value.length >= 100) {
            return false;
        }
    };
}

updateCounter();