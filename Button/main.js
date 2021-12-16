const pushed = document.getElementById("circle");
const msg = document.getElementById("msg");


document.getElementById("text").innerHTML = "DO NOT PUSH THE BUTTON!";

pushed.addEventListener('click', pushedButton);


function pushedButton(){
    console.log(text)
    document.getElementById("text").innerHTML = "WHY DID YOU PUSH THE BUTTON??!!";
    pushed.classList.add('stop');
}