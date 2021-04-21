var trashBtn=Array.from(document.getElementsByClassName('fas fa-trash'))
for (var i=0;i<trashBtn.length;i++){
    let btn=trashBtn[i]
    btn.addEventListener('click',function(event){
        var btnclicked=event.target
        btnclicked.parentElement.parentElement.remove()
        total()
    })
}



var heartBtn=Array.from(document.getElementsByClassName('far fa-heart'))
for (var i=0;i<heartBtn.length;i++){
    let btn=heartBtn[i]
    btn.addEventListener('click',function(){
        if(btn.style.backgroundColor='#b4b4b4')
        {btn.style.backgroundColor='red'}
        else {btn.style.backgroundColor='#b4b4b4'}
    })
}



var plusBtn= document.getElementsByClassName('incrementBtn')
var QuantityValue=document.getElementsByClassName('QuantityValue')
for (let i=0; i<plusBtn.length;i++){
    let btn=plusBtn[i]
    btn.addEventListener("click", function() {
        QuantityValue[i].innerHTML++
        total()
      });
}

var minusBtn= document.getElementsByClassName('decrementBtn')
for (let i=0; i<minusBtn.length;i++){
    let btn=minusBtn[i]
    btn.addEventListener("click", function() {
        if(QuantityValue[i].innerHTML>1){
            QuantityValue[i].innerHTML--
        }
        total()
      });
      
}

function total() {
    let qte = Array.from(document.querySelectorAll(".QuantityValue"));
    let price = Array.from(document.querySelectorAll(".productPrice"));
    let s = 0;
    for (let i = 0; i < qte.length; i++) {
      s += qte[i].innerHTML * price[i].innerHTML;
    }
    return (document.getElementById("sum").innerHTML ="Total Price : " + s + "TND")
  }