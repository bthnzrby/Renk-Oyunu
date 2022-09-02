const rgbDegeri = document.querySelector(".rgb-degeri")
const box = document.querySelectorAll(".box")
const quadrilateral = document.querySelector(".quadrilateral")
const header = document.querySelector(".header")
const newColors = document.querySelector(".new-colors")
const tryAgain = document.querySelector(".try-again")



for (i = 0 ; i < box.length  ; i++ ){
    const r = Math.ceil(Math.random ()* 255);
    const g = Math.ceil(Math.random ()* 255);
    const b = Math.ceil(Math.random ()* 255);

    box[i].style.background = "rgb("+ r +","+ g +","+ b +")";
    box[i].addEventListener("click", clickEvent)
}

let x = Math.round(Math.random() * 5)

rgbDegeri.textContent = box[x].style.background;

quadrilateral.style.background = " rgb(35,35,35)";
if (rgbDegeri.textContent === quadrilateral.style.background ){
    const r = Math.ceil(Math.random ()* 255);
    const g = Math.ceil(Math.random ()* 255);
    const b = Math.ceil(Math.random ()* 255);
    quadrilateral.style.background = "rgb("+ r +","+ g +","+ b +")";       
}


function clickEvent(){
    if (this.style.background === rgbDegeri.textContent){
        for(i=0; i< box.length; i++){
            box[i].style.background = rgbDegeri.textContent;
        }
        header.style.background = this.style.background
        newColors.firstChild.textContent = "Play Again"
        tryAgain.textContent="Congratulations"
    }else{
        this.style.background = quadrilateral.style.background;
    }
        tryAgain.style.visibility="visible"
}