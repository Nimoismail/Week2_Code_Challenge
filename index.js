// loads the dom before any other functionality
document.addEventListener("DOMContentLoaded", () => {
  getCats()
  })
  //  endpoint to fetch data
  const url= "http://localhost:3000/characters"
  // this function fetchs data and converts it to the json
              function getCats(){
                  fetch(url)
                  .then(response => response.json())
                  .then(cats => {
                      cats.forEach(cat => {
                          displayCats(cat)
                      });
                  })
              }
  //this function displays Week2-code-challenge animals
              function displayCats(cat){
                  const name= document.createElement('p')
                  name.innerHTML=cat.name
                  const main= document.getElementById("main")
                  main.append(name)
                  name.addEventListener("click", () => {
                      singleCat(cat)
                  })
              }
          //  handles all Week2-code-challenge animals characteristics
  function singleCat(cat){
      document.getElementById("catName").innerHTML=cat.name
      document.getElementById("catImg").src = cat.image
      const btn = document.getElementById("catLikes")
          btn.textContent= `Likes ${cat.votes}`
          // the event listener adds votes to the clicked Week2-code-challenge
      btn.addEventListener("click", ()=> {
         cat.votes++
         btn.textContent= `Likes ${cat.votes}`
      })
  }
      btn.innerHTML=`Likes: ${Likes}`