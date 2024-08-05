 var screen=document.querySelectorAll(".screen")
 var startbtn=document.querySelector("button")
 var creature=document.querySelectorAll(".creature")
 var playground=document.querySelector(".playground")
 var scorecount=document.querySelector(".score-time h5 span")
 var totalTime=document.querySelector(".score-time h4 span")
 var finalStart=document.querySelector(".Start-over button")
 var gameOver=document.querySelector(".start-over span")
 var startOver=document.querySelector(".Start-over")
 var end=document.querySelector(".Start-over h4")
 var highscore=document.querySelector(".Start-over h3")
 var highscorevalu=document.querySelector(".Start-over h3 span")
 var restart=document.querySelector("#restart")
 
 var time=0
 var score=0
 var salected=""

 startbtn.addEventListener("click",function(){
    screen[1].style.transform="translateY(-100%)"
 })
 function image(){
   creature.forEach(function(elem){
      elem.addEventListener("click",function(){
          screen[2].style.transform="translateY(-200%)"
          selected=elem.childNodes[3].getAttribute("src")
  
          finalStart.addEventListener("click",function(){
               startOver.style.display="none"
               setInterval(function(){
                 createimg()
                },1000)
          })
          setInterval(function(){
           createimg()
          },1000)
      })
   })
 }
 creature.forEach(function(elem){
    elem.addEventListener("click",function(){
        screen[2].style.transform="translateY(-200%)"
        selected=elem.childNodes[3].getAttribute("src")

        finalStart.addEventListener("click",function(){
             startOver.style.display="none"
        })
        

    })

 })
 function createimg(){
   
   var newImage=document.createElement("img")
   var x=Math.random()*100
   var y=Math.random()*100
   var rot=Math.random()*100
   newImage.setAttribute("src",selected)
   newImage.style.top=x+"%"
   newImage.style.left=y+"%"
   newImage.style.rotate=rot+"deg"
   playground.appendChild(newImage)

   catchimg()
   setTimeout(function(){
      // catchimg()
      playground.removeChild(newImage)
   },1500)
 }
 var totalScore=0;
 function catchimg(){
   var count=document.querySelectorAll(".playground img")
   count.forEach(function(item){
      item.addEventListener("click",function(){
         totalScore = score ++
         scorecount.innerHTML= totalScore
      })

   })

 }
 var tt=60
 finalStart.addEventListener("click",function(){
   setInterval(function(){
      createimg()
     },1000)
   
   startOver.style.display="none"
    playground.style.display="block"
    var lnt=setInterval(function(){
       totalTime.innerHTML=tt--
       if(tt==0){
         clearInterval(lnt);
         playground.style.display="block"
         startOver.style.display="block"

       
        finalStart.style.display=`none`
        end.style.scale=1
        highscore.style.scale=1
        restart.style.scale=1
        highscorevalu.innerHTML=totalScore
       }
    },1000)
 })



restart.addEventListener('click', function() {
  screens.forEach(function(screen) {
      screen.style.transform = 'translateY(0)';
  });
  startOver.style.display = 'none';
  end.style.display = 'none';
  highscore.style.display = 'none';
  finalStart.style.display = 'block';
  clearInterval(gameTimer);
  tt = 6;
  totalTime.textContent = tt;
  score = 0;
  scorecount.textContent = score;
  playground.innerHTML = ''; 
});
