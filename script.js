let targetTextarea = document.querySelector(".textarea");
let targetbtn = document.querySelectorAll("button");
let targetCaps = document.querySelector("#capslock_btn");
// let shiftBtn = document.querySelector("#shift");
// let backBtn = document.querySelector("#backspace");
// let spaceBtn = document.querySelector(".space");

 
// targetTextarea.value += e.target.innerText

for(let i=0;i<targetbtn.length;i++){
    targetbtn[i].addEventListener("click",(e)=>{
    //    console.log(e.target.className)

    if(e.target.innerText !=="Backspace" && e.target.innerText !=="Enter" && e.target.innerText !=="CapsLock" && e.target.innerText !=="Shift" && e.target.innerText !=="Tab" && e.target.innerText !=="Alt" && e.target.innerText !=="Ctrl" && e.target.innerText !=="Space" && e.target.innerText !=="Delete"){
        targetTextarea.value += e.target.innerText;
    }
    if(e.target.innerText ==="Backspace"){
        targetTextarea.value = targetTextarea.value.slice(0, targetTextarea.value.length - 1);
    }
    if(e.target.innerText ==="Tab"){
        targetTextarea.value += '    ';
    }
    if(e.target.innerText ==="Space"){
        targetTextarea.value += ' ';
    }
    if(e.target.innerText ==="Delete"){
        targetTextarea.value ="";
    }
    if(e.target.id === "capslock_btn"){
        capitalWord()
    }
    if(e.target.innerText ==="Enter"){
        targetTextarea.value += '\n';
    }
    })
}

function capitalWord() {
    targetCaps.classList.toggle("show");
    for (let j = 0; j < targetbtn.length; j++) {
        if (targetCaps.classList.contains("show")){
            if (targetbtn[j].innerText !=="Backspace" && targetbtn[j].innerText !=="Enter"&& targetbtn[j].innerText !=="CapsLock" && targetbtn[j].innerText !=="Shift" && targetbtn[j].innerText !=="Tab" && targetbtn[j].innerText !=="Alt" && targetbtn[j].innerText !=="Ctrl" && targetbtn[j].innerText !=="Space" && targetbtn[j].innerText !=="Delete") {
                targetbtn[j].innerText = targetbtn[j].innerText.toUpperCase();
            }
        }
        else{
            if(targetbtn[j].innerText !=="Backspace" && targetbtn[j].innerText !=="Enter"&& targetbtn[j].innerText !=="CapsLock" && targetbtn[j].innerText !=="Shift" && targetbtn[j].innerText !=="Tab" && targetbtn[j].innerText !=="Alt" && targetbtn[j].innerText !=="Ctrl" && targetbtn[j].innerText !=="Space" && targetbtn[j].innerText !=="Delete"){
                targetbtn[j].innerText = targetbtn[j].innerText.toLowerCase();
            }     
        }
        
    }
}
