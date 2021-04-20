var trashBtn=Array.from(document.getElementsByClassName('fas fa-trash'))
for (var i=0;i<trashBtn.length;i++){
    let btn=trashBtn[i]
    btn.addEventListener('click',function(event){
        var btnclicked=event.target
        btnclicked.parentElement.remove()
    })
}

var plusBtn= document.getElementsByClassName('incrementBtn')
var QuantityValue=document.getElementsByClassName('QuantityValue')
for (let i=0; i<plusBtn.length;i++){
    let btn=plusBtn[i]
    btn.addEventListener("click", function() {
        QuantityValue[i].innerHTML++
      });
}

var minusBtn= document.getElementsByClassName('decrementBtn')
for (let i=0; i<minusBtn.length;i++){
    let btn=minusBtn[i]
    btn.addEventListener("click", function() {
        if(QuantityValue[i].innerHTML>1){
            QuantityValue[i].innerHTML--
        }
      });
      
}

var total=document.getElementsByClassName('total')
for (let i=0; i<total.length;i++){
let productTotal=total[i]
function total(){
    let priceValue=document.getElementsByClassName('productPrice').innerHTML
    productTotal=QuantityValue.innerHTML*priceValue
}
}





