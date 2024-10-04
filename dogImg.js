let apiUrl = 'https://dog.ceo/api/breeds/image/random';
let breeds = 'https://dog.ceo/api/breeds/list/all';
let btn = document.querySelector('button')
let val =  document.querySelector('#search-box')
let nxtBtn= document.querySelector("#nxt-btn");
let prev=document.querySelector(".prev");
async function dogImg(){
    let response = await fetch(breeds);
    let data = await response.json();
     checkList(data.message);
}
function checkList(breedList){
    Object.keys(breedList).forEach((breed)=>{
        document.querySelector('#search-box').innerHTML += `
        <option >${breed}</option>
        `;
    })
}
dogImg()

async function getPhoto(){
 let response = await fetch(`https://dog.ceo/api/breed/${val.value}/images/random`)
 let data = await response.json();
 console.log(data)
loadPhoto(data.message);
//  document.querySelector('.img-section').innerHTML = `
//   <div class="img-slide">
//             <img src=${data.message} alt="">
//          </div>
//  `
}
function loadPhoto(src){
    document.querySelector('.img-section').innerHTML = `
    <div class="img-slide">
              <img src=${src} alt="">
           </div>
           
   `;
}
btn.addEventListener('click',()=>{
    if(val.value !== 'choose a breed'){
        getPhoto();
        setTimeout(()=>{
            nxtBtn.style.display='inline'; 
            prev.style.display='inline'; 

        },1000)
        
    }
})
nxtBtn.addEventListener('click',()=>{
    getPhoto();
  
});


