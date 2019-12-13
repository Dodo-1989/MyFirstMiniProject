let homeBottun = document.querySelector(".home")
let loginBottun = document.querySelector(".login")
let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let prag = document.querySelector(".introduction")
let image = document.querySelector("img")
let imgBottun = document.querySelector(".change-photo")



//Event Listeners.........................................

homeBottun.addEventListener("mouseover", function(){
  this.classList.toggle("red")
});

homeBottun.addEventListener("mouseout", function(){
  this.classList.toggle("red")
});


loginBottun.addEventListener("mouseover", function(){
  this.classList.toggle("red")
});

loginBottun.addEventListener("mouseout", function(){
  this.classList.toggle("red")
});


loginBottun.onclick = function() {
changeH1();

};

homeBottun.onclick = function(){
  prag.classList.toggle("prag")

}



imgBottun.onclick = function(){
    changedImage();
    image.classList.add("width")

}





//functions.........................

function changeH1(){
 
    if ( h1.textContent === "Oh!, You just changed me :("){
      h1.textContent = "About me";
    }else{
      h1.textContent = "Oh!, You just changed me :("
    }
  }


  function changedImage(){
      let currentSrc = image.getAttribute('src');
      if (currentSrc === "https://t4.ftcdn.net/jpg/02/66/76/83/240_F_266768305_jxxjP3ivAYLHxbOejYQ4095SvaGfTjc3.jpg"){
          image.setAttribute ('src' , 'https://image.shutterstock.com/image-vector/initial-letter-js-logotype-company-260nw-713410882.jpg')
      }else{
        image.setAttribute ('src', 'https://t4.ftcdn.net/jpg/02/66/76/83/240_F_266768305_jxxjP3ivAYLHxbOejYQ4095SvaGfTjc3.jpg') 
      }

  }

