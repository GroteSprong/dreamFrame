// dreambits JS version: 0.6


//FETCH generik LOAD PAGE ID . Load an existing complete page. "target" is the element loaded from the page, and loaded into the destination. Usually "main".

function gsLoadId(item, target, klasje) {
fetch(item)
.then((response) => {
  return response.text();
})
.then((html) => {
  // Initialize the DOM parser
    var parser = new DOMParser();
  // Parse the text
    var doc = parser.parseFromString(html, "text/html");
  // deel van pagina -target- selecteren:
    var article = doc.querySelector(target).innerHTML;
    target = document.querySelector(target);
    target.innerHTML = article;
   //  console.log(article);
     
     aniTarget = document.querySelector("section");
     aniTarget.classList.add(klasje);
     
     

});
}
//FETCH generik LOAD INCLUDE FILE. Internal include file consisting of "section" blocks. This is not a complete html page.
function gsLoadItem(item, target) {
   console.log(item);
fetch(item)
.then((response) => {
  return response.text();
})
.then((html) => {
  target = document.querySelector(target);
  target.innerHTML = html;
  checkForMore();
  toggleMenu();
});
}



// mobiel menu inklappen als aangeklikt
function toggleMenu() {
  if( document.querySelector("#site-navigation > input") ) {
    document.querySelector("#site-navigation > input").checked = false;
  }
}

//links

 function linkWeb() {gsLoadItem('/inc/webdesign.html','main')}
 function linkHos() {gsLoadItem('/inc/hosting.html','main')}

let images= Array;


 let ani = "Blur";
 let imgpath = "img/slider/";
 let nextImg;


function sliderInit() {
   // console.log("load slider");
           const sliderImg = document.querySelector(".gs-slider img");
            const minmax = document.querySelector(".minmax img")
           const slider = document.querySelector(".gs-slider");
           let curImg = 0;
          
          var sliderShow = String(slider.classList[1]);
           loadImages(sliderShow);
               // console.log(sliderShow);
           
            function nextImg() {
               sliderImg.classList.remove(ani);
               curImg++;
               console.log(curImg);
               if(curImg == images.length  ) {curImg = 0}
               sliderImg.setAttribute("src" , imgpath + images[curImg]);
               void sliderImg.offsetWidth;
               sliderImg.classList.add(ani);
               
            }
            function prevImg() {
               sliderImg.classList.remove(ani);
               curImg--;
               if(curImg < 0  ) {curImg = images.length - 1 }
               sliderImg.setAttribute("src" , imgpath + images[curImg]);
               void sliderImg.offsetWidth;
               sliderImg.classList.add(ani);
               
            }
            function toggleFS() {
                 slider.classList.toggle("lightbox");
                 isFS = slider.classList.contains("lightbox");
                 if(isFS){
                     minmax.src = "img/icons/zoomOut.svg";
                  }else{
                     minmax.src = "img/icons/zoomIn.svg";
                  }
            }

            const forward = document.querySelector('.forward');
            const back = document.querySelector('.back');
            const toggleFullScreen = document.querySelector('.minmax');
            

            forward.addEventListener('click' , nextImg);
            back.addEventListener('click' , prevImg);
            toggleFullScreen.addEventListener('click' , toggleFS)

            let isFS = slider.classList.contains("lightbox");

            // load inition start image
            nextImg();

            
}
function checkForMore() {
   //console.log("checkForMore")
   if( document.querySelector(".gs-slider") ) {
      
      // console.log(slider.classList);
      sliderInit();
   }
}
      
 function loadImages(sliderShow) {
    if (sliderShow === "lemar") {
      
           images= Array(
               "Le-Mar-formentera-90r-2.jpg" ,
               "Le-Mar-formentera-90r-4.jpg" ,
               "Le-Mar-naakt.jpg"
            )
   }
    if (sliderShow === "bunkers") {
      imgpath = "img-bunk/";
      ani = "fadeIn";
           images= Array(
               "625-ab1.jpg" ,
               "625-ab2.jpg" ,
               "630-kkw11.jpg",
               "630-route-mb.jpg"
              
            )
   }
    
   console.log(images);
 }

