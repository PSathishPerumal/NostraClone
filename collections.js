var productContainer=document.getElementById("products")
var search=document.getElementById("product-search")
var productlist=productContainer.querySelectorAll("div")

var filtercontainer=document.getElementById("filters")
var buttons=document.querySelector(".buttons")
var tshirt=document.getElementById("t-shirt")
var shirt=document.getElementById("shirt")
var kid=document.getElementById("kid")
var layeroutfits=document.getElementById("layeroutfits")
var filterbutton=document.querySelector(".filterbutton")


tshirt.addEventListener("click",function(event){
var tshirtvalue=event.target.innerText.toUpperCase()
console.log("sathish",tshirtvalue,event)

for(let count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textContent
        console.log("sathish2",productname)
        const productnamelist=String(productname.toUpperCase()).split(" ")
 console.log("sathish3",productnamelist,tshirtvalue,productnamelist.includes(tshirtvalue))
        if(!productnamelist.includes(tshirtvalue))

        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }
    
    
    }

})


shirt.addEventListener("click",function(event){
    var shirtvalue=event.target.innerText.toUpperCase()
    console.log("sathish",shirtvalue,event)
    
    for(let count=0;count<productlist.length;count=count+1)
        {
            var productname=productlist[count].querySelector("p").textContent
            console.log("sathish2",productname)
            const productnamelist=String(productname.toUpperCase()).split(" ")
     console.log("sathish3",productnamelist,shirtvalue,productnamelist.includes(shirtvalue))
            if(!productnamelist.includes(shirtvalue))
    
            {
                productlist[count].style.display="none"
            }
            else
            {
                productlist[count].style.display="block"
            }
        
        
        }
    
    })
    

    
kid.addEventListener("click",function(event){
    var kidvalue=event.target.innerText.toUpperCase()
    console.log("sathish",kidvalue,event)
    
    for(let count=0;count<productlist.length;count=count+1)
        {
            var productname=productlist[count].querySelector("p").textContent
            console.log("sathish2",productname)
            const productnamelist=String(productname.toUpperCase()).split(" ")
     console.log("sathish3",productnamelist,kidvalue,productnamelist.includes(kidvalue))
            if(!productnamelist.includes(kidvalue))
    
            {
                productlist[count].style.display="none"
            }
            else
            {
                productlist[count].style.display="block"
            }
        
        
        }
    
    })

        
    layeroutfits.addEventListener("click",function(event){
    var layeroutfitsvalue=event.target.innerText.toUpperCase()
    console.log("sathish",layeroutfitsvalue,event)
    
    for(let count=0;count<productlist.length;count=count+1)
        {
            var productname=productlist[count].querySelector("p").textContent
            console.log("sathish2",productname)
            const productnamelist=String(productname.toUpperCase()).split(" ")
     console.log("sathish3",productnamelist,layeroutfitsvalue,productnamelist.includes(layeroutfitsvalue))
            if(!productnamelist.includes(layeroutfitsvalue))
    
            {
                productlist[count].style.display="none"
            }
            else
            {
                productlist[count].style.display="block"
            }
        
        
        }
    
    })



search.addEventListener("keyup",function(event){
var enteredValue=event.target.value.toUpperCase()

for(count=0;count<productlist.length;count=count+1)
{
    var productname=productlist[count].querySelector("p").textContent
    if(productname.toUpperCase().indexOf(enteredValue)<0)
    {
        productlist[count].style.display="none"
    }
    else
    {
        productlist[count].style.display="block"
    }


}})

document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.getElementById("resetBtn");
    resetButton.addEventListener("click", function() {
        location.reload();
    });
});

var sidenavbar=document.querySelector(".side-navbar-links")

function shownavbar()
{
    sidenavbar.style.left="0"
}

function closenavbar()
{
    sidenavbar.style.left="-60%"
}

