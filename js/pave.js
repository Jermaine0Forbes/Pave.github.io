var autoSlide = (function(){

var slides = document.getElementsByClassName('slide'),
 texts = document.getElementsByClassName('text'),
 leftBtn = document.getElementsByClassName('s-click')[0],
 riteBtn = document.getElementsByClassName('s-click')[1],
 num = 0,
 auto;

  function invisible(){
      for(var i = 0; i< slides.length; i++){
      slides[i].className = "slide";
       texts[i].className = "text ";
    }
  }// invisible

function slideNext(){
  switch (num){
      case 0 :
              invisible();
              slides[num].className="slide secondary";
              num++;

             slides[num].className="slide active";
             texts[num].className = "text appear";


              break;
      case 1:
             invisible();
             slides[num].className="slide secondary";
              num++;
             slides[num].className="slide active";
             texts[num].className = "text appear";


              break;
    case 2:
            invisible();
            slides[num].className="slide secondary";
              num = 0;
             slides[num].className="slide active";
             texts[num].className = "text appear";


              break;

  }//end switch

}//end slideNext


 function leftSlide(){

  switch (num){
      case 0 :
              invisible();
              slides[num].className = "slide secondary";
              // texts[num].className = "text ";
              num=2;
             slides[num].className="slide activeL";
             texts[num].className = "text appearL";

              break;
      case 1:
              invisible();
              slides[num].className = "slide secondary";
              // texts[num].className = "text ";
              num--;
             slides[num].className="slide activeL";
             texts[num].className = "text appearL";
              break;
    case 2:
            invisible();
            slides[num].className = "slide secondary";
              // texts[num].className = "text ";
              num--;
             slides[num].className="slide activeL";
             texts[num].className = "text appearL";
              break;
  }//end switch
}// leftSlide


return {
  left:function(){
          leftBtn.onclick = function (){
        clearInterval(auto);

        leftSlide();
        auto = setInterval(slideNext,5000)

          }
  },
  right: function(){
        riteBtn.onclick = function(){
      clearInterval(auto)
      slideNext();
      auto = setInterval(slideNext,5000)
        }

  },
  start:function(){
   this.left();
   this.right();
   auto = setInterval(slideNext,5000);
}
};//return object

})();

autoSlide.start();
