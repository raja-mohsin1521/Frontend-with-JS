
let text=document.getElementById('text')
const onload=()=>{
    setTimeout(()=>
    text.textContent="Web Design"
    ,0)
    setTimeout(()=>
    text.textContent="Marketing"
    ,3000)
    setTimeout(()=>
    text.textContent="Social Skills"
    ,6000)
    setTimeout(()=>
     text.textContent="Programming"
    ,9000)
    
}
onload()
setInterval(onload,12000);





const card1data = [
    {
        src: 'https://ezitech.org/wp-content/uploads/2023/07/DartProgramming-aptlearn-300x225.webp',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-300x225.webp',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-300x225.png',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'https://ezitech.org/wp-content/uploads/2023/07/FrontEnd-870x440-1-300x225.webp',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'https://ezitech.org/wp-content/uploads/2023/07/photoshop-course-300x225.png',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },


]
const card2data = [
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/09/sta-je-javascript-300x225.jpeg',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/09/cd5bdea6-d171-4b15-b911-8e1086222374_2736x1228-300x225.jpeg',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/10/react-300x225.jpeg',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/10/flutter-use-cases-mobile-app-development-1-300x225.jpeg',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/11/lqAnYIWetmy83To78KmRLYFY2Pb6INY7nVqpfrfE-300x225.jpg',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },


]
const card3data = [
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/10/what-is-copywriter-hero-300x225.png',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/10/1294-Thumbnail.width-1200-300x225.jpg',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-300x225.png',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/10/linkedin-search-630834c87e29b-sej-1520x800-1-300x225.png',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs500'
    },
    {
        src: 'http://ezitech.org/wp-content/uploads/2022/10/post-3-300x225.jpg',
        p1: 'IOS & AND',
        heading: 'Flutter & Dart - The Complete Course With Projects',
        timming: '3 Months',
        points: '7508',
        price: 'Rs5000'
    },


]

const card1 = document.getElementById('card')
let done1=false
let done2=false
let done3=false
let done4=false
let done5=false
let a=card1data.filter(a)
function ab(p){
p=='Rs5000'
}
let create1Card = () => {
    if(!done1){
        done1=true;
        
    card1data.map((card1data) => {


        const createCards = document.createElement('div')
        createCards.classList.add('col-md-2', 'col-sm-5', 'col-12', 'my-5', 'courses', 'course1')

        createCards.innerHTML = `
<div class="row text-center img">
    <img src=" ${card1data.src}" alt="">
  </div>
  <div class="row main px-2">
    <div class="col-12">
    <p>IOS & AND</p>
    <h6>Flutter & Dart - The Complete Course With Projects</h6>
    <div class="row timming">
      <div class="col-8">
        <p>3 Months</p>
      </div>
      <div class="col-4">
       <p> 7508</p>
      </div>
      <div class="row price">
        <div class="col-8">
          <p>3 Months</p>
        </div>
        <div class="col-4">
         <h6><b>RS.7508</b></h6>
        </div>
    </div>
  </div>
  </div>
  </div>
`
        card1.append(createCards)


    })

}
}
let create2Card = () => {
    if(!done2){
        done2=true;
    card2data.map((card2data) => {


        const createCards = document.createElement('div')
        createCards.classList.add('col-md-2', 'col-sm-5', 'col-12', 'my-5', 'courses', 'course2')

        createCards.innerHTML = `
<div class="row text-center img">
    <img src=" ${card2data.src}" alt="">
  </div>
  <div class="row main px-2">
    <div class="col-12">
    <p>IOS & AND</p>
    <h6>Flutter & Dart - The Complete Course With Projects</h6>
    <div class="row timming">
      <div class="col-8">
        <p>3 Months</p>
      </div>
      <div class="col-4">
       <p> 7508</p>
      </div>
      <div class="row price">
        <div class="col-8">
          <p>3 Months</p>
        </div>
        <div class="col-4">
         <h6><b>RS.7508</b></h6>
        </div>
    </div>
  </div>
  </div>
  </div>
`
        card1.append(createCards)


    })

}
}
let create3Card = () => {
    if(!done3){
        done3=true;
    card3data.map((card3data) => {


        const createCards = document.createElement('div')
        createCards.classList.add('col-md-2', 'col-sm-5', 'col-12', 'my-5', 'courses' , 'course3')

        createCards.innerHTML = `
<div class="row text-center img">
    <img src=" ${card3data.src}" alt="">
  </div>
  <div class="row main px-2">
    <div class="col-12">
    <p>IOS & AND</p>
    <h6>Flutter & Dart - The Complete Course With Projects</h6>
    <div class="row timming">
      <div class="col-8">
        <p>3 Months</p>
      </div>
      <div class="col-4">
       <p> 7508</p>
      </div>
      <div class="row price">
        <div class="col-8">
          <p>3 Months</p>
        </div>
        <div class="col-4">
         <h6><b>RS.7508</b></h6>
        </div>
    </div>
  </div>
  </div>
  </div>
`
        card1.append(createCards)


    })

}
}



create1Card()
create2Card()
create3Card()
let course1=document.getElementsByClassName('course1')
let course2=document.getElementsByClassName('course2')
let course3=document.getElementsByClassName('course3')
for (let i = 0; i < course1.length; i++) {
    course1[i].style.display = "block";
}
for (let i = 0; i < course2.length; i++) {
    course2[i].style.display = "none";
}
for (let i = 0; i < course3.length; i++) {
    course3[i].style.display = "none";
}

let c1=()=>{
    for (let i = 0; i < course1.length; i++) {
        course1[i].style.display = "block";
    }
    for (let i = 0; i < course2.length; i++) {
        course2[i].style.display = "none";
    }
    for (let i = 0; i < course3.length; i++) {
        course3[i].style.display = "none";
    }
}
let c2=()=>{
    for (let i = 0; i < course1.length; i++) {
        course1[i].style.display = "none";
    }
    for (let i = 0; i < course2.length; i++) {
        course2[i].style.display = "block";
    }
    for (let i = 0; i < course3.length; i++) {
        course3[i].style.display = "none";
    }
}
let c3=()=>{
    for (let i = 0; i < course1.length; i++) {
        course1[i].style.display = "none";
    }
    for (let i = 0; i < course2.length; i++) {
        course2[i].style.display = "none";
    }
    for (let i = 0; i < course3.length; i++) {
        course3[i].style.display = "block";
    }
}


let btndiv = document.getElementById('buttons')
for (let i = 0; i < 3; i++) {
    let btn = document.createElement('button')

    btn.innerHTML = i + 1;
    btn.classList.add('pagebtn')
    btn.setAttribute("id", 'btn' + (i + 1))
    btn.setAttribute("onclick", 'click' + (i + 1) + '()')
    btndiv.append(btn)

}


let b1 = document.getElementById('btn1')
let b2 = document.getElementById('btn2')
let b3 = document.getElementById('btn3')
b1.classList.add('active')

let click1 = () => {

    c1()
    b1.classList.add('active')
    b2.classList.remove('active')
    b3.classList.remove('active')
    
}
let click2 = () => {
c2()
b2.classList.add('active')
b1.classList.remove('active')
b3.classList.remove('active')
}
let click3 = () => {

   c3()
   b3.classList.add('active')
   b1.classList.remove('active')
b2.classList.remove('active')
}
