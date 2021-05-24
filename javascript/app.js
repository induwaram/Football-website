const resizeBtns = document.querySelector('.resize-btn');
const menuBtn = document.querySelector('.menu-btn');
const incDecBtns = document.querySelectorAll('.inc-dec-size');
let opacity = 0; 
let openNav = false;

menuBtn.addEventListener('click', navigationCheck);

function navigationCheck(){
    if(openNav === true){
    openNav = false;
  }
  else{
    openNav = true;    
  }
  showresizeBtns();
}

function showresizeBtns(){  
  
      let resizerBtnOpacity = openNav ? 0.05 : -0.05;
    
      let visibility = setInterval(() =>{
        if((resizerBtnOpacity > 0 && opacity > 1) ||(resizerBtnOpacity < 0 && opacity < 0) ){
          clearInterval(visibility);
        }
        opacity += resizerBtnOpacity;
        resizeBtns.style.opacity = opacity;
      }, 10) 
    
  
}


function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
}



function addToCart() {
  const boots = document.getElementById("item-1").value;
  const bootPrice = 5000 * boots;

  const shorts = document.getElementById("item-2").value;
  const shortsPrice = 2500 * shorts;

  const shirts = document.getElementById("item-3").value;
  const shirtsPrice = 2500 * shirts;

  const socks = document.getElementById("item-4").value;
  const socksPrice = 1000 * socks;

  const gloves = document.getElementById("item-5").value;
  const glovesPrice = 1000 * gloves;

  if (boots > 0) msgForBoots = "Boots: " + boots + "\n";
  else msgForBoots = "";
  if (shorts > 0) msgForShorts = "Shorts: " + shorts + "\n";
  else msgForShorts = "";
  if (shirts > 0) msgForShirts = "Shirts: " + shirts + "\n";
  else msgForShirts = "";
  if (socks > 0) msgForSocks = "Socks: " + socks + "\n";
  else msgForSocks = "";
  if (gloves > 0) msgForGloves = "Gloves: " + gloves + "\n";
  else msgForGloves = "";

  const totalAmount = bootPrice + shortsPrice + shirtsPrice + socksPrice + glovesPrice;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const addressValidation = /^[#.0-9a-zA-Z\s,-]+$/;
  const emailValidation = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8}?$)/;

  if (name.value.trim() == "") {
    alert("Please enter your Name");
  }
  else if (email.value.trim() == "") {
    alert("Please enter your Email");
  }
  else if (!emailValidation.test(email.value)) {
    alert("Please enter a valid email");
  }
  else if (address.value.trim() == "") {
    alert("Please enter your Address");
  }
  else if (!addressValidation.test(address.value)) {
    alert("Please enter a valid Address")
  }
  else if (city.value.trim() == "") {
    alert("Please enter your City");
  }
  else if (totalAmount == 0) {
    alert("You Haven't Selected Any Items!");
  }
  else {
    alert("Dear " + name.value + " You Have Ordered The Following Items\n" + 
    msgForBoots + msgForShorts + msgForShirts + msgForSocks + msgForGloves +
    "Your Items Will Be Shipped To" + address.value + ", " + city.value + 
    "And Your Total Will be " + totalAmount +
    ". \nThank You For Shopping With Us!! Please Shop With Us Again!!");
  }
}
