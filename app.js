
let homeBottun = document.querySelector(".home")
let loginBottun = document.querySelector(".login")
let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let prag = document.querySelector(".introduction")
let image = document.querySelector("img")
let imgBottun = document.querySelector(".change-photo")
let dontTouch = document.querySelector(".dontTouch")
let greetings = document.querySelector(".enterName")




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
h1.classList.remove("toggler")

};

homeBottun.onclick = function(){
  prag.classList.toggle("prag")

}

imgBottun.addEventListener("mouseover", function(){
  this.classList.add("red")
});

imgBottun.addEventListener("mouseout", function(){
  this.classList.remove("red")
});

imgBottun.onclick = function(){
    changedImage();
    image.classList.add("width")
    

}

dontTouch.addEventListener("mouseover", function(){
  this.classList.add("red")
});

dontTouch.addEventListener("mouseout", function(){
  this.classList.remove("red")
});



dontTouch.onclick = function(){
  h1.classList.toggle("toggler")
  h1.textContent = "I Told You";
  image.setAttribute('src', "https://cdnb.artstation.com/p/assets/images/images/002/828/955/large/sabbas-apterus-blood-red-and-cyan.jpg?1466184215")
  image.classList.add("width")
  
}

greetings.onclick = function(){
  sayHello();
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


  function sayHello(){
    let hello = prompt("Please, Enter you Name")
    localStorage.setItem('name', hello)
    h1.textContent = 'Guest Name, ' + hello;

    if(!localStorage.getItem('name') ) {
      sayHello();
    }   if ( hello === null){
           h1.textContent = "Why Dont you like me :("
    }
    
      else {
        let storedName = localStorage.getItem('name');
        h1.textContent = 'Hello'+ ' ' + storedName + ',' + 'welcome ';
    }
  }


