let a = Math.round(Math.random()*99+1)
console.log(a);
let raqam=document.getElementById('olma')
raqam.textContent=a
if(a>50){
raqam.style.color='rad'
}
else(
    raqam.style.color='blue'
)