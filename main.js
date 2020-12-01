let anime=document.querySelector('#anime');
let one=document.querySelector('.one');
let two=document.querySelector('.two');
//timeout for anime: words sliding from sides
setTimeout(() => {
    anime.style.display='none'
}, 16000);


setTimeout(() => {
    one.style.display='none'
}, 6000);

setTimeout(() => {
    two.style.display='none'
}, 12000);


//Staff and team section

let staff=document.querySelector('.staff');
let stext=document.querySelector('#stext');
let imgCareer=document.querySelector('img.career');

//create event listener for Staff and team section

staff.addEventListener('click', star);
function star(e){
    e.preventDefault();
   //replace truncate  class
    stext.className='flow-text'
    //hide image and show words only
    imgCareer.style.display='none'
//hide button
    staff.style.opacity='0'
}


//Fee section


let fees=document.querySelector('a#fees');
let ftext=document.querySelector('#ftext');
let imgfees=document.querySelector('img#fees');

//create event listener for Staff and team section

fees.addEventListener('click', Fee);
function Fee(f){
    f.preventDefault();
   //replace truncate  class
    ftext.className='flow-text'
    //hide image and show words only
    imgfees.style.display='none'
//hide button
    fees.style.opacity='0'

}


//Additional subject section

let add=document.querySelector('a#add');
let addtext=document.querySelector('p#addtext');
let imgadd=document.querySelector('img#add');

//create event listener for Staff and team section

add.addEventListener('click', Add);
function Add(a){
    a.preventDefault();
   //replace truncate  class
    addtext.className='flow-text'
    //hide image and show words only
    imgadd.style.display='none'
//hide button
    add.style.opacity='0'

}



//disclaimer section

let ds=document.querySelector('h4.ds');

let dis=document.querySelector('a#dis');
let distext=document.querySelector('#distext');
let imgdis=document.querySelector('img#dis');

//create event listener for Staff and team section

dis.addEventListener('click', disclaim);
function disclaim(z){
    z.preventDefault();
   //replace truncate  class
    distext.className='flow-text'
    //hide image and show words only
    imgdis.style.display='none'
//hide button
    dis.style.opacity='0'
    //remove h4
    ds.className='hide-on-large-only'

}



//Services section

let sv=document.querySelector('h4.sv');

let serve=document.querySelector('a#serve');
let servetext=document.querySelector('#servetext');
let imgserve=document.querySelector('img#serve');

//create event listener for Staff and team section

serve.addEventListener('click', serv);
function serv(s){
    s.preventDefault();
   //replace truncate  class
    servetext.className='flow-text'
    //hide image and show words only
    imgserve.style.display='none'
//hide button
    serve.style.opacity='0'
    //remove h4
    sv.className='hide-on-large-only'

}


const review= [

    { id: "1",
     name: "Stan Cizungu",
    job: "Web Designer",
    text: "The school is amazing. It only has few learners in such a big space to facilitate the children that are present.  I know of no other school! You better hurry parents. Space limited! ",
    img: "img/black.jpg"
    
    
    },
    { id: "2",
     name: "Voldi Muyumba",
    job: "Full-Stack Web developer",
    text: "I can still remember the immaculate smile that I received from my son on his first day from the Sunflower Learner center. Priceless!",
    img: "img/smile.jpg"
    
    
    },
    { id: "3",
     name: "Bea Masengo",
    job: "Model, music engineer",
    text: "This school indeed teaches our sunflowers how to fish. My daughter started speaking another language once she started her coding lessons",
    img: "img/yel.jpg"
    
    
    }
    
    ];
    
    const msg=document.querySelector('#msg');
    const person = document.querySelector('h4.name');
    const job = document.querySelector('.job');
    const img = document.querySelector('#img');
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    
    //Get count
    
    let count=0;
    
    // create function to get all items in array depending on count
    
    function getItem(){
        person.innerHTML=review[count].name;
        job.innerHTML=review[count].job;
        img.src =review[count].img;
        msg.innerHTML=review[count].text;
      
    }
    
    
    //next button
    
    next.addEventListener('click',()=>{
       //check if count is greater than review amount  NB: - 1 refers to the last item
        if(count>review.length - 1){
            count=0;
        }
    
        getItem();
       
        count++;
    
    });
    
    prev.addEventListener('click',()=>{
       //if count is less, then  get back to the last item again
       if(count<0){
           count= review.length - 1;
       }
        
       
        getItem();
        count--;
      
    });
    
   
    
    
    
    
    
    
    
    
    
    












