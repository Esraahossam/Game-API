let gamee=document.getElementById("game");
let closee=document.getElementById("myico");
let title=document.getElementById("myTitle");
let category=document.getElementById("myCategory");
let platform=document.getElementById("myPlatform");
let statuss=document.getElementById("myStatus");
let img=document.getElementById("myImage");
let paragraph=document.getElementById("myPar");

let gameList=[]
async function getData(type){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dbdb17035mshf87eb3fd87d9725p1a0690jsnd8c598d1b72d',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}}	;

let res=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
 gameList= await res.json()
 console.log(gameList);

 display()
}

 getData("mmorpg")

function display(){
let temp=""
gameList.forEach((el)=>{
temp+=`<div class="col-md-3 g-5 item "gameId=${el.id}>
<div class="card ">
  <div class="card-header">
	<img src="${el.thumbnail}" class="w-100 i" alt="">
  </div>
  <div class="card-body  d-flex justify-content-between">
	<h5 class="card-title text-white">${el.title}</h5>
	<button class="b">Free</button>
  </div>
	<p class="card-text text-white">${el.short_description}</p>
	<div class="footer d-flex justify-content-between">
	<a href="#" class=" bb">${el.genre}</a>
	<a href="#" class=" bb">${el.platform}</a>
	</div>
  </div>
</div> `
})
document.getElementById("myRow").innerHTML=temp;
displayTwo()


}

 let navlinks =document.querySelectorAll(".nav-link")
 for(let i=0;i<navlinks.length;i++){
 navlinks[i].addEventListener("click",function(e){
let type=this.getAttribute("categorytype")
getData(type)

 })
 }

 let dataDetails={}
async function getspec(id){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dbdb17035mshf87eb3fd87d9725p1a0690jsnd8c598d1b72d',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}}	;

let res=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
 dataDetails= await res.json()
 console.log(dataDetails);
 displaythree()

}

//  getspec();
 function displayTwo(){
let items= document.querySelectorAll(".item")
items.forEach((el)=>{
el.addEventListener("click",function(){
	let number=el.getAttribute("gameId")
	console.log(number);
	getspec(number)

})
})


 }
 function displaythree(){
gamee.style.display="block"
title.innerHTML=dataDetails.title
category.innerHTML=dataDetails.genre
platform.innerHTML=dataDetails.platform
paragraph.innerHTML=dataDetails.description
img.setAttribute("src",dataDetails.thumbnail)
statuss.innerHTML=dataDetails.status
closee.addEventListener("click",function(){
	gamee.style.display="none"
	
})
 }

		
		

// // let close=document.getElementById("myico")
// // let gameDetails=document.getElementById("game")
// //  function displayDetails(){
// // 	gameDetails.style.display="block"
// // 	document.getElementById("myImage").setAttribute("src",dataDetails.thumbnail)
// // 	document.getElementById("myTitle").innerHTML=dataDetails.title
// // 	document.getElementById("myCategory").innerHTML=dataDetails.genre
// // 	document.getElementById("myPlatform").innerHTML=dataDetails.platform
// // 	document.getElementById("myStatus").innerHTML=dataDetails.status
// // 	document.getElementById("myPar").innerHTML=dataDetails.description
// // 	close.addEventListener("click",function(){
// // 		gameDetails.style.display="none"	
	
// // 	})
// //  }



	
 






// function displayDetails(){
// let temp=""
// 	// // gameList.forEach(el=>{
// 	// // 	el.addEventListener("click",function(el){
// 	// // 	game-details.style.display =="flex";
// 	// for(var i=0;i<gameList.length;i++){
// 	// 	 gameList[i].addEventListener("click",function(e){
// 	// 	   game-details.style.display=="flex"	
// temp+=`<div class="game-details d-flex justify-content-center pt-5 d-none">
// <i class="fa-regular fa-xmark ico"></i>
// <div class="img w-25 h-50 me-4 ">
// <img src="${el.thumbnail}" >
// </div>
// <div class="content ms-2 ">
// <h4>Title: ${el.title}</h4>
// <div class="cat d-flex ">
// <h5>Category:</h5>
// <button class="btn btn-info ">${el.genre}</button>
// </div>
// <div class="Platform d-flex  pt-2 ">
// <h5>Platform:</h5>
// <button class="btn btn-info ">${el.platform}</button>
// </div>
// <div class="Status d-flex  pt-2 ">
// 	<h5>Status: </h5>
// 	<button class="btn btn-info ">${el.status}</button>
// 	</div> 

// <p class="fs-5">${el.description}</p>  
// <button class="btn btn-warning bg-transparent ">show Game</button> 
// </div></div>
// </div>
// </div>`
// 	})}
// };


















