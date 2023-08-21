const input = document.getElementById("input");
const sectionTwoCont = document.getElementById("section-two-container");
let arr = [];

document.getElementById("searchBtn").addEventListener("click", async () => {
  document.getElementById("exploring").style.display = "none";
  fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=7b7f0630`)
    .then((response) => response.json())
    .then((obj) => {
      const dataObj = obj;
      // const id = obj.imdbID;
      // console.log(obj);
      // console.log(id);

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
            <div class="add-icon-container" id="add-icon">

              <i class="fa-solid fa-circle-plus watch"  id='${dataObj.imdbID}'></i>

              <p>Watchlist</p>
            </div>
          </div>
          <div class="child-three">
            <p>
             ${dataObj.Plot}
            </p>
          </div>
        </div>
      </div>
      `;
      const watchBtn = document.getElementById(`${dataObj.imdbID}`);
      watchBtn.addEventListener("click", function () {
        arr.unshift(dataObj);
        const arrayJSON = JSON.stringify(arr);

        // Store the JSON string in local storage
        localStorage.setItem("arr", arrayJSON);
      });
    });

  input.value = "";
});
