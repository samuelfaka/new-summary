function proceed(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });  
}

function cancel(){
    const usd = document.querySelector(".usd")
    Swal.fire({
        icon: "error",
        text: "order canceled",
      });
      usd.textContent = '$59.9/year'      
}

function changeprice(){
    const pop = document.querySelector(".both2")
    pop.style.display = "flex"
    pop.style.scale = "1"
}

function ok() {
    const minprices = 20;
    const pop = document.querySelector(".both2");
    const erorprice = document.querySelector(".eror-price");
    const eror = document.querySelector(".eror");
    const usd = document.querySelector(".usd");
    let priceInput = document.querySelector(".prices").value;
    let prices = parseFloat(priceInput);

    if (!priceInput) {
        eror.style.display = "flex";
        erorprice.style.display = "none";
        pop.style.display = "none";
    } 
    
    else if (prices <= minprices || prices === minprices) {
        eror.style.display = "none";
        erorprice.style.display = "flex";
        pop.style.display = "none";
    } 
    
    else {
        eror.style.display = "none";
        erorprice.style.display = "none";
        pop.style.display = "none";
        usd.textContent = `$${prices}/year`;
    }
}