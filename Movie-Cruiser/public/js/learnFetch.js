// function getAllMovies(){
//     fetch("http://localhost:3000/movies").then(response => {
//       //  console.log(response);

//         if(response.status == 200){
//             return Promise.resolve(response.json());
//         }
//         else {
//             return Promise.reject(new Error("fetching data failed"));
//         }
//     }).then(movieList => {
//         console.log(movieList);
//     })
// }

// function double(x){
//     return new Promise((resolve,reject) =>{
//         setTimeout(function(){
//             resolve(x*2);
//         }, 2000)
//     })
// }
function getAllMovies() {
    return new Promise((resolve, reject) => {
        resolve(fetch("http://localhost:3000/movies").then(function (response) {

            if (response.status == 200) {
                return response.json();
            }
            else {
                return new Error("Data couldnt be fetched!");
            }

        }).then(moviesList => {
            // console.log(moviesList);

            moviesList.sort((movie1, movie2) => (movie1.title == movie2.title) ? 0 : ((movie1.title > movie2.title) ? 1 : -1));

            const tbody = document.getElementById('moviesList');

            let movieRowsHTML = '';

            moviesList.forEach(movie => {


                movieRowsHTML = movieRowsHTML + `
                               
					<div class="col-sm-5">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title" id="moviename${movie.id}">${movie.title}</h5>
								<img class="card-img" src="${movie.posterPath}" >
								<br><br>
								<a href="#" class="btn btn-primary"onclick=addFavourite(${movie.id})>add to favourites</a>
							</div>
						</div>
					</div>
								  
					`;


                tbody.innerHTML = movieRowsHTML;
            })
        })

        )
        reject(new Error("Error in fetching data"))
    })
}