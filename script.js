window.onload = function () {
  var mb = document.getElementById("btn");
  mb.addEventListener("click", func);
};
function func() {
  //"https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/the notebook"
  //IBDM
  var x = document.getElementById("in").value;
  var new_url =
    "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/";
  let url_now = new_url.concat(x);
  fetch(url_now, {
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": "73e146d604msh938d21934851e9bp1a6b15jsn330829f9afdf",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      let plot = document.getElementById("para");
      plot.innerHTML = response.plot;
    })
    .catch((err) => {
      // console.error(err);
      let plot = document.getElementById("para");
      plot.innerHTML = "NOT FOUND.";
    });
    // $('#loader').addClass("hide-loader");
}
// });
