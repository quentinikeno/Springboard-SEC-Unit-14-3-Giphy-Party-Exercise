async function getGif(q) {
	const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
	const params = { api_key, q };
	const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
		params,
	});
	const result = res.data.data[0];
	const gifRow = $("#gifRow");
	const imgDiv = $("<div>").addClass(
		"col-12 col-md-6 col-lg-4 mt-3 d-flex align-items-center justify-content-center"
	);
	const imgUrl = result.images.original.url;
	const img = $("<img>")
		.attr("src", imgUrl)
		.attr("alt", result.title)
		.addClass("img-fluid");
	gifRow.append(imgDiv.append(img));
}

const search = document.querySelector("#search");
const form = document.querySelector("#searchForm");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	getGif(search.value);
	search.value = "";
});
