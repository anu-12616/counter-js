//set initial value
let count = 0;

const value = document.querySelector('#value');
const button = document.querySelectorAll('.btn');

// where foreach()performs fun on each element 
button.forEach(function(btn){
    btn.addEventListener('click', function(e){
const styles = e.currentTarget.classList;
if (styles.contains('decrease')){
    count--;
}else if (styles.contains('increase')){
    count++;
}else{
    count =0;
}if(count>0){
value.styles.color ='green'
}if(count<0){
    value.styles.color ='red'  
}if(count===0){
    value.styles.color ='blue'  
}
value.textContent=count;
    })
})

