let counterElement=document.getElementById("countervalue");

function onIncrement(){
        let prevvalue=counterElement.textContent;
        let updatevalue=parseInt(prevvalue)+1;  
        counterElement.textContent=updatevalue;
       

}
function onDecrement(){
        let prevvalue=counterElement.textContent;
        let updatevalue=parseInt(prevvalue)-1;  
        counterElement.textContent=updatevalue;
}
function onReset(){
    let countervalue=0;
    counterElement.textContent=countervalue;
}
