function submit() {
let input = document.querySelector("#mysearch").value;

//start off the Fetch
fetch(
  "http://www.recipepuppy.com/api/?q=" + `${input}`
)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data) {
      console.log("test", response.url);
      console.log(data);
      displayData(data)
    });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    }); //1.Format the data with template literals
      //use a foreach on data.results to loop over results
      //for each result, format with a template literals
  let resultList = document.querySelector("#resultList")
  function displayData(data){
    let html = ""
      data.results.forEach(function(recipe) {
        html += `

          <div class = "itemContent">
            <div class = "headingBox">
              <h2 class = "itemTitle"</h2>${recipe.title}
            </div>
            <div class = "itemThumbNail">
              <img class = "itemThumbNailImg" img src = "${recipe.thumbnail}"/>
            </div>
            <div class = "itemURL"><a href = ${recipe.href}>Recipe</a>
            </div>
          </div>
        `
        resultList.innerHTML = html
      })
}
  }
