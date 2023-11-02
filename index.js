const modeinput = document.querySelector("#darkmode-toggle");
const darkmode = () => {
  document.querySelector("body").setAttribute("theme", "dark");
  localStorage.setItem("theme","dark");
};
const lightmode = () => {
  document.querySelector("body").setAttribute("theme", "light");
  localStorage.setItem("theme","light");
};
const localStorage_theme = localStorage.getItem("theme");

if (localStorage_theme === "light") {
  lightmode()
}



const changemode = (e) => {
 e.target.checked?darkmode():lightmode()
};

modeinput.addEventListener("change", changemode);


const innerContainer= document.querySelector(".innercontainer")

const counters=document.querySelectorAll(".counters")
let isActivated=false;
window.addEventListener("scroll",()=>{
 console.log(scrollY)

 console.log(innerContainer.offsetTop)
  if(scrollY>innerContainer.offsetTop-innerContainer.offsetHeight-200&& isActivated==false){

    counters.forEach(count=>{

   const eachH1= count.getElementsByTagName("span").item(0);
   eachH1.innerHTML=0;
    let numberCount=0;
  
   

    // update function
    function updater(){
      
      const target= parseInt(eachH1.dataset.set)
      
      if(numberCount<target){
        numberCount++
        eachH1.innerHTML=numberCount;
        setTimeout(updater,50)
      }else{

        eachH1.innerText=target;
      }
      
    }

    updater()
      isActivated=true
    })
  }else if(
    scrollY<innerContainer.offsetTop-innerContainer.offsetHeight-500||scrollY===0 && isActivated===true
  ){

    counters.forEach(count=>{
      const eachH1=count.getElementsByTagName("span").item(0);
      eachH1.innerText=0
    })

    isActivated=false
  }
})