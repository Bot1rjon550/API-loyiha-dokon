const API = "https://fakestoreapi.com/products";
const container = document.querySelector(".container");

function getData() {
	fetch(API)
		.then((res) => res.json())
		.then((data) => {
			console.log("data:", data);
			container.innerHTML = "";

			data.forEach((item) => {
				container.innerHTML += `
					<div class="card1">
						<img src="${item.image}" alt="${item.title}" />
					<div class="text">
						<h2>${item.title}</h2>
						<p>${item.price}$</p>
						<span>${item.category}</span>
					</div>


					</div>
				`;
			});
		});
}

getData();
