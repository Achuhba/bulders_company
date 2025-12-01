const openBtn = document.querySelectorAll('.open_btn')
const closeBtn = document.querySelector(".close_btn"); 
const modal = document.querySelector(".modal_wrapper"); 
closeBtn.addEventListener('click', function(){ 
    modal.style.display = 'none';
});
for (let i = 0;i<openBtn.length;i++){
    openBtn[i].addEventListener('click',function(){
        modal.style.display = "block"
    })
    
}
const transBtn = document.querySelectorAll(".trans_btn")
const transImg = document.querySelector(".trans_img")
for (let i = 0; i<transBtn.length;i++){
     if(transBtn[i].textContent==="Экскаваторы"){
        transBtn[i].addEventListener('click',()=>{
            transImg.innerHTML = '<img src="img/trans1.webp" alt="">'
        })
     }else if  (transBtn[i].textContent==="Тралы"){
        transBtn[i].addEventListener('click',()=>{
            transImg.innerHTML = '<img src="img/trans2.webp" alt="">'
        })
     }else if  (transBtn[i].textContent==="Погрузчики"){
        transBtn[i].addEventListener('click',()=>{
            transImg.innerHTML = '<img src="img/trans3.webp" alt="">'
        })}else if  (transBtn[i].textContent==="Бульдозеры"){
        transBtn[i].addEventListener('click',()=>{
            transImg.innerHTML = '<img src="img/trans4.webp" alt="">'
        })}else if  (transBtn[i].textContent==="Катки"){
        transBtn[i].addEventListener('click',()=>{
            transImg.innerHTML = '<img src="img/trans5.webp" alt="">'
        })}
}
    