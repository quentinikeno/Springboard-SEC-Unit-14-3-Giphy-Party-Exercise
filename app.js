const $gifRow = $("#gifRow");
const search = document.querySelector("#search");
const form = document.querySelector("#searchForm");
const $removeBtn = $("#removeButton");

async function getGif(q) {
	try {
		const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
		const params = { api_key, q };
		const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
			params,
		});
		const randIndex = Math.floor(Math.random() * res.data.data.length);
		const result = res.data.data[randIndex];
		appendGif(result);
	} catch (e) {
		alert("Something has gone wrong!  GIF not found!");
	}
}

function appendGif(result) {
	const imgDiv = $("<div>").addClass(
		"col-12 col-md-6 col-lg-4 mt-3 d-flex align-items-center justify-content-center"
	);
	const imgUrl = result.images.original.url;
	const img = $("<img>")
		.attr("src", imgUrl)
		.attr("alt", result.title)
		.addClass("img-fluid gif");
	$gifRow.append(imgDiv.append(img).hide().fadeIn(1000));
}

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	getGif(search.value);
	search.value = "";
});

$removeBtn.on("click", () => {
	$gifRow.children().fadeOut(1000, function () {
		$(this).remove();
	});
});
