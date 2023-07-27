
var allProduct = document.querySelectorAll(".menu-items .menu-item")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn")
var totalPrice =document.querySelector("#money")
var total = 0 ;

allProduct.forEach(function(item){
    item.onclick = function(){
        total += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + "&"
       

        if(content.innerHTML !=" "){
            btn.style.display = "block";
        }
    }
})
 btn.onclick = function(){
    totalPrice.innerHTML = total
    

 }