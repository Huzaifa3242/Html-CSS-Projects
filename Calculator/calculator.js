
const show = document.getElementById("show");

function display(value){
    show.value += value;
}
function del(){
    show.value= show.value.slice(0,-1)
}
function clean(){
    show.value = "";
}

function compute(){
    try{
        show.value = eval(show.value);
    }
    catch(err){
        show.value = "Error";
    }}