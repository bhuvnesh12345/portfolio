//console.log("inside script js file")

const cards= Array.from(document.querySelectorAll('.card'));
console.log(cards)
//console.log(typeof cards)

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       //console.group(entry)
        entry.target.classList.toggle("show",entry.isIntersecting)
    })
},{
   
})
//console.log(observer)
cards.forEach((card)=>{
    observer.observe(card)
})



const a1=Array.from(document.getElementsByClassName("card-parent"))
const a2=Array.from(document.getElementsByClassName("card-div"))
const a3=Array.from(document.getElementsByClassName("card-h"))
// console.log(a1)
// console.log(a2)
// console.log(a3)

a1.forEach((entry)=>{
  entry.addEventListener("mouseover",()=>{

   const child1=entry.querySelector('.card-div');
   const child2=entry.querySelector('.card-h');
   child1.style.opacity=1
   child1.style.height="200px"
   child2.style.transform='translate(0px,-195px)'
  })

  entry.addEventListener("mouseout",()=>{

  const child1=entry.querySelector('.card-div');
   const child2=entry.querySelector('.card-h');
   child1.style.opacity=0
   child1.style.height=0
   child2.style.transform='translate(0px,0px)'

  })
})


// a1.addEventListener("mouseover",()=>{
//   a2.style.opacity=1
//   a2.style.height="82px"
//   a3.style.transform='translate(0px,-80px)'
// })

// a1.addEventListener("mouseout",()=>{
//     a2.style.opacity=0
//     a2.style.height=0

//     a3.style.transform='translate(0px,0px)'
//     /////////////
//     //a1.style.transform='skew(0deg)'
//   })

//   a1.addEventListener("mousemove",()=>{
//     a1.style.transform='skew(25deg)'
//   })


const nav=Array.from(document.getElementsByClassName("nav"))

nav.forEach((div)=>{
  div.addEventListener("mouseover",()=>{
    div.classList.add("navs-btn")
  })

  div.addEventListener("mouseout",()=>{
    div.classList.remove("navs-btn")
  })
})

const movingskills=document.getElementById("keypost")

const array=["Software Engineer","Frontened Developer","Backend Developer","Full Stack Developer"]



function runInfinite()
{
  array.forEach((element,i)=>{

    setTimeout(()=>{
      movingskills.textContent=element
    },i*1000)
    
  })

  setTimeout(function() {
    runInfinite()
}, array.length * 1000);
}

runInfinite()


// const skill=Array.from(document.getElementsByClassName("skill"))
// console.log(skill)

// const observer1=new IntersectionObserver(entries, options);

// skill.forEach((s)=>{
//   observer1.observe(s)
// })


const edu_cards=Array.from(document.getElementsByClassName("edu-card"))

const observer2=new IntersectionObserver((entries)=>{
     
  entries.forEach((entry)=>{
    // console.group(entry)
     entry.target.classList.toggle("shows",entry.isIntersecting)
 })
    
},{
  
})

edu_cards.forEach((card)=>{
  observer2.observe(card)
})