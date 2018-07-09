
function getMovies() {
	let promise = new Promise((resolve, reject) => {
		let flag = false;
		resolve(fetch("http://localhost:3000/movies")

			.then(function (response) {

				if (response.status == 200) {
					return response.json();
				}
				else {
					flag = true;
				}
			})
		);
		if (flag) {
			reject(new Error("Data cannot be fetched!!"));
		}
	}).catch(function (err) {
		// console.log('catch', err);
		return err;
	});

	promise.then(moviesList => {
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
	}).catch(function (err) {
		// console.log('catch', err);
		return err;
	});

	return promise;

}

function getFavourites() {
	let promise = new Promise((resolve, reject) => {
		let flag = false;
		resolve(fetch("http://localhost:3000/favourites")

			.then(function (response) {

				if (response.status == 200) {
					return response.json();
				}
				else {
					flag = true;
				}
			})
		);
		if (flag) {
			reject(new Error("Data cannot be fetched!!"));
		}
	}).catch(function (err) {
		// console.log('catch', err);
		return err;
	});

	promise.then(favList => {
		// console.log(moviesList);
		favList.sort((movie1, movie2) => (movie1.title == movie2.title) ? 0 : ((movie1.title > movie2.title) ? 1 : -1));
		const tbody = document.getElementById('favouritesList');

		let favRowsHTML = '';

		favList.forEach(fav => {

			favRowsHTML = favRowsHTML + `
						   
				<div class="col-sm-5">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title" id="favname${fav.id}">${fav.title}</h5>
							<img class="card-img" src="${fav.posterPath}" >
							<br><br>
							<a href="#" class="btn btn-primary"onclick=addFavourite(${fav.id})>add to favourites</a>
						</div>
					</div>
				</div>
				`;
			tbody.innerHTML = favRowsHTML;
		})
	}).catch(function (err) {
		// console.log('catch', err);
		return err;
	});

	return promise;

}

function addFavourite(id) {

	event.preventDefault();

	const title = document.getElementById('moviename' + id).innerHTML.trim();
	const ftitle = document.getElementById('favname' + id).innerHTML.trim();

	console.log(title === ftitle);

	const movie = {
		"id": id,
		"title": title,
		"posterPath": "images/movie" + id + ".jpg"
	}

	let promise = new Promise((resolve, reject) => {

		let flag = false;
		if (title !== ftitle) {
			resolve(fetch("http://localhost:3000/favourites1", {
				method: 'POST',
				body: JSON.stringify(movie),
				headers: {
					'content-type': 'application/json'
				}
			})
				.then(function (response) {
					if (response.status == 201) {
						getMovies();
						getFavourites();
						return (response.json());
					}

					else {
						flag = true;
					}
				})

			);
			if (flag) {
				new Error("Movie is already added to favourites");
			}
		}

		else {
			console.log("Xx");
			
			return reject(new Error("Movie is already added to favourites"));
		};

		}
	).catch((err) => {
    console.log('catch', err);
	return err;
});
	return promise;
}



module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};


// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinde