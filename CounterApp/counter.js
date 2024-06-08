let counterElement=document.getElementById("countervalue");

function onIncrement(){
        let prevvalue=counterElement.textContent;
        let updatevalue=parseInt(prevvalue)+1;  
     
       if(updatevalue>0){
        counterElement.style.color="green";
       }
       else if(updatevalue<0){
        counterElement.style.color="red";
       }
       else{
        counterElement.style.color="black"
       }
       counterElement.textContent=updatevalue;

}
function onDecrement(){
        let prevvalue=counterElement.textContent;
        let updatevalue=parseInt(prevvalue)-1;  
        
        if(updatevalue>0){
                counterElement.style.color="green";
               }
        else if(updatevalue<0){
                counterElement.style.color="red";
               }
        else{
                counterElement.style.color="black"
               }
               counterElement.textContent=updatevalue;
}
function onReset(){
    let countervalue=0;
    counterElement.textContent=countervalue;
      
        counterElement.style.color="black"
       
      
}
