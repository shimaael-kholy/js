 var allProducts = document.querySelectorAll(".list1 li")
 var div1 = document.querySelector("#div1")
 var btn1 = document.querySelector("#btnPrice")
 var totalPrice = 0
 var div2 = document.querySelector(".div2")

  allProducts.forEach(function(item){
     item.onclick=function(){
        totalPrice+= +(item.getAttribute("price"))
        div1.innerHTML+=item.textContent+"/"

       if(div1.innerHTML !=""){
         btn1.style.display="block"
       }
    }
  })
  btn1.onclick=function(){
    div2.innerHTML=totalPrice
  }