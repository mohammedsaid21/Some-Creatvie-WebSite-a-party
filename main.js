
let pCard = document.querySelector('.main-card-review > p')

    
let textP = pCard.textContent.split(' ')

console.log(textP)
    textP.forEach(el => {
        if(el === ''){

        }else{
            console.log(el + el)
        }
    });


let toggle = document.querySelector('.fuck'),
    settingContianer = document.getElementById('setting-container')
let colorS = document.querySelectorAll('.ulColor li')

    toggle.onclick = function(){
        settingContianer.classList.toggle('open')
        document.querySelector('.toggle').classList.toggle('open2')
    }

let mainColor = localStorage.getItem('ulColor')    
if(mainColor !== null){
    document.documentElement.style.setProperty('--main-color',mainColor);
}
colorS.forEach(el => {
    el.onclick = function(li){

document.documentElement.style.setProperty('--main-color',li.target.dataset.color);
        
// Storge Color Is not Exsist 
localStorage.setItem('ulColor' , li.target.dataset.color);

// console.log(li.target.dataset.color)
    }
});

// Slider Show 
// Get Slider Items \__/ From ES6 [Array.from]
let sliderImage = Array.from(document.querySelectorAll('.slider-container img'));

//  Get Number Of Slides
let slidesCount = sliderImage.length -1 ,
    firstElement = 1;  
// 
let sliderNumber= document.getElementById('slider-number'),
        prevBut = document.getElementById('prev'),
        nextBut = document.getElementById('next');

    let nextSpan = document.getElementById('spanNext'),
        prevSpan = document.getElementById('spanPrev')
// Click on To Next And Prev
    prevBut.onclick = previmg;
    nextBut.onclick = nextimg;
    prevSpan.onclick = previmg;
    nextSpan.onclick = nextimg;

// Create Ul & Li
let slider_Ul = document.createElement('ul')
    slider_Ul.setAttribute('id','hello_world')
    console.log('id is = ' + sliderImage.length)

    for(let i = 1; i <= sliderImage.length; i++ ){
        // Create Li
        let slider_Li = document.createElement('li')
        slider_Li.setAttribute('data-index' , i)

        slider_Li.appendChild(document.createTextNode(i))
        slider_Ul.appendChild(slider_Li)
    }
// Add The New Ul On The Page And [In The Span (indicators)]
document.getElementById('indicators').appendChild(slider_Ul)

// Get The New Created Ul 
let newCreatedUl = document.getElementById('hello_world')

// Get  Items \/ From ES6 [Array.from]
let bullets = Array.from(document.querySelectorAll('#hello_world li'));
// For Loop when i click on button move in 

for(let i = 0; i < bullets.length; i++){

    bullets[i].onclick = function(){
        firstElement = parseInt(this.getAttribute('data-index'))
        checkSlider();
    }
}
checkSlider();
// Function do Next Image
function nextimg(){
    if(nextBut.classList.contains('disabled')){
        firstElement = 1
        checkSlider();
    }
    else{
        firstElement++
        checkSlider();
    }
}
// Function Do previous Image
function previmg(){
    if(prevBut.classList.contains('disabled')){
        firstElement = 5
        checkSlider();
    }
    else{
        firstElement--
        checkSlider();
    }
}
// Function To Do check The Slider 
function checkSlider(){
    // Set The Slider Number
    removeAllChild();

    document.getElementById('slider-number').textContent = 'Slide #' + (firstElement) + ' of ' + (slidesCount +1);
    
    sliderImage[firstElement - 1].classList.add('active');

    if(firstElement == 1){ // OR (sliderImage[firstElement - 1])
            // Add Class 'disabled' To Make The prve but small 
        prevBut.classList.add('disabled'); 
    } else { 
        prevBut.classList.remove('disabled');
    }
    
    if(firstElement == sliderImage.length){ // OR (LastElement == 1)
            // Add Class 'disabled' To Make The Next but small 
        nextBut.classList.add('disabled');
    } else {
        nextBut.classList.remove('disabled');  
    }
       newCreatedUl.children[firstElement - 1].classList.add('active');
    // بدي أخلي لما اضغط على رجوع من على زر واحد يروح على زر 5 
    }

function removeAllChild(){

    sliderImage.forEach(function (img){
        img.classList.remove('active');
    });

    bullets.forEach(function (bullet){
        bullet.classList.remove('active')
    });
}

let create = document.querySelector('.main-card-review')
// 1
let createElement = document.createElement('div')
    createElement.className = 'main-card-review'

    document.querySelector('.dadThe').appendChild(createElement)
// 2
let createElement2 = document.createElement('div')
    createElement2.className = 'header-Review'

    createElement.appendChild(createElement2)
// 3
let createElement3 = document.createElement('img')
    createElement3.src = "img/pic-1.png"

    createElement2.appendChild(createElement3)
// 4
let createElement4 = document.createElement('div')
    createElement4.className = 'content-info'

    createElement2.appendChild(createElement4)
// 5
let createElement5 = document.createElement('h3'),
    textnode1 = document.createTextNode('Osama Elzero')
    createElement5.appendChild(textnode1)
    createElement4.appendChild(createElement5)

let createElement6 = document.createElement('p'),
    textnode2 = document.createTextNode('Happy Client')
    createElement6.appendChild(textnode2)
    createElement4.appendChild(createElement6)

//6 
let createElement7 = document.createElement('i')
    createElement7.className = 'fas fa-quote-right'

    createElement2.appendChild(createElement7)
// 7
let createElement8 = document.createElement('p')
                                            let haha = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi,magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.'
    textnode2 = document.createTextNode(haha)
    createElement8.appendChild(textnode2)
    createElement.appendChild(createElement8)


    console.log()
