let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset/totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
let accordion = document.querySelectorAll('.faq');

// accordion.forEach((element,index)=> {
//     element.addEventListener('click', function () {
//         let test =  document.querySelector(`.pic${index}`)
//         console.log(test.className)
//       })
// });
for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){

         
      let tes=  document.querySelectorAll(`.acc-btn`);
      // alert(tes.)
      // if(tes.getAttribute('icon-name') == "add"){
      //   tes.setAttribute('icon-name', 'minus')
      
      //   // alert("contains")
      // }else{
      //   tes.setAttribute('icon-name', 'add')
        
      
      // }
      tes.forEach(function myFunction (icon){
        icon.setAttribute('icon-name', 'add')
      })
      let testing =  document.querySelector(`.btn-${i+1}`);
      testing.setAttribute('icon-name', 'minus')

        let allPics = document.querySelectorAll('.tab-pane');
        // allPics.forEach(pic => pic.classList.remove('active'));
        allPics.forEach(function myFunction (pic){
            pic.classList.remove('active')   
          
            pic.classList.remove('show')

        })


        let test =  document.querySelector(`.pic${i+1}`);
        
        test.classList.add("active");
        test.classList.add("animate__animated")
        test.classList.add("animate__fadeIn")
       
        test.classList.add('show')
       
        console.log(test.className);


     
      
   
      
    })



   
    
  };



//counter

let section_counter = document.querySelector('.counter')
let counters = document.querySelectorAll('.value');

let speed = 200;


//scroll animation
let CounterObserver = new IntersectionObserver((entries, observer) => {
  let [entry] = entries;
  if (!entry.isIntersecting) return;
  
  let speed = 200;
  counters.forEach((counter,index) => {
    function UpdateCounter(){
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;

        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          
          setTimeout(UpdateCounter, 70) 
        }
    }
    UpdateCounter();
    
    if(counter.parentElement.style.animation){
      counter.parentElement.style.animation = "";
    } else { 
      counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5}s`;
    }
});
}, 
{
  root: null,
 threshold:0.4,

});
CounterObserver.observe(section_counter);




/*Nav bar*/ 

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    fixedBlurNav();
});

function fixedBlurNav() {
    if (window.pageYOffset >= 250) {
        navbar.classList.add("new-navbar");
        navbar.classList.add("fixed-top");
        navbar.classList.add("animate__fadeInDown")
        navbar.classList.remove("animate__fadeInUp")
    } else {
        navbar.classList.remove("new-navbar");
        navbar.classList.remove("fixed-top");
        navbar.classList.remove("animate__fadeInDown")
        navbar.classList.add("animate__fadeInUp")
    } 
    
}
fixedBlurNav();


/* Loader*/
var loaderWrapper = document.querySelector('.wrapper');


// setTimeout (() => {
//     spinnerwrapper.style.opacity = '0';

// },1000);
window.addEventListener('load', () =>{
    loaderWrapper.style.opacity = '0';

    setTimeout(() =>{
        loaderWrapper.style.display = 'none';
    },1000)
})