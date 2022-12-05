const div = document.getElementById("character-bar");
const url = "http://localhost:3000/characters"  //this is the API which is hosted inside localhost dbjson


// this function fetches data from server
function getAllCharacters() {
  fetch(url)    //API
    .then((res) => res.json()) //the response brings a promise then converted in json format
    .then((data) => {
      //we are looping through the array data of each character
      data.forEach((animals) => {
        let span = document.createElement("span");
        span.textContent = animals.name;
        span.addEventListener("click", (e) => {
          let pname = document.getElementById("name");
          pname.textContent = animals.name;
          let img = document.getElementById("image");
          img.src = animals.image;
          let voteCounts = document.getElementById("vote-count");
          voteCounts.textContent = animals.votes;
        });
        div.appendChild(span);
      });
    });
}
getAllCharacters();


// form submit
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // counts votes and returns when clicked
  let countVote = document.getElementById("votes").value;
  console.log(countVote);
  let totalVotes = document.getElementById("vote-count");
  // add votes to the previous votes on each character
  let total = parseInt(totalVotes.innerHTML) + parseInt(countVote, 10);
  totalVotes.innerHTML = total;
  form.reset();
});


//resets the count to 0
let reset = document.getElementById("reset-btn");
reset.addEventListener("click", (e) => {
  let totalVotes = document.getElementById("vote-count");
  totalVotes.innerHTML = 0;
});
