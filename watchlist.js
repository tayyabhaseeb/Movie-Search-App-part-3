const storedArrayJSON = localStorage.getItem("arr");

// Convert the JSON string back to an array
let storedArray = JSON.parse(storedArrayJSON);

let id = "";

const sectionTwoCont = document.getElementById("section-two-container");

function sectionTwoRender() {
  sectionTwoCont.innerHTML = `
  <div class="watchlist-container" id="watchlist-container">
         <h4 class="exploring-text">Your Watchlist is looking empty</h4> 
           <div class="add-movie-container">
            <img src="images/plusicon.png" class="plusicon">
            <h6>Let's add some movies</h6>
           </div>
        </div>
  `;
}
sectionTwoRender();

function render() {
  if (storedArray.length > 0) {
    document.getElementById("watchlist-container").style.display = "none";
    storedArray.forEach(function (dataObj) {
      id = dataObj.id;
      sectionTwoCont.innerHTML += `

            <div class="movie-info-container">
              <div class="movie-img-cont">
                <img src="${dataObj.Poster}" class="movie-img" />
              </div>
              <div class="movie-info-box">
                <div class="child-one">
                  <h4>${dataObj.Title}</h4>
                  <img src="images/StarIcon.png" class="star-icon" />
                  <h6>${dataObj.imdbRating}</h6>
                </div>
                <div class="child-two">
                  <p>${dataObj.Runtime}</p>
                  <p>${dataObj.Genre}</p>
                  
                  
                </div>
                <div class="child-three">
                  <p>
                   ${dataObj.Plot}
                  </p>
                </div>
              </div>
            </div>
            `;
    });
  }
}

if (storedArray.length > 0) {
  document.getElementById("section-three").style.display = "flex";
}

document.getElementById("deleteBtn").addEventListener("click", () => {
  localStorage.removeItem("arr");
  sectionTwoRender();
});

render();
