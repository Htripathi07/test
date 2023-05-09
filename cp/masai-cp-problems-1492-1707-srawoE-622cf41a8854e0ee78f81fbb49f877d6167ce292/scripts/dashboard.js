// ***** Constants / Variables ***** //
const bookURL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books`;

// append card in this mainSection
let mainSection = document.getElementById("data-list-wrapper");

//sort
let newestFirst = document.getElementById("newest-first");
let oldestFirst = document.getElementById("oldest-first");

//Books Data
let booksData = [];
let wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || [];

// fetch
const fetchProducts = async () => {
  try {
    let res = await fetch(bookURL);
    let products = await res.json();
    // console.log(products);
    // booksData.push(products.data);
    displayData(products.data);
  } catch (err) {
    console.log(err);
  }
};
fetchProducts();

const displayData = (data) => {
  mainSection.innerHTML = "";
  data.forEach((elem, i) => {
    var smallDiv = document.createElement("div");
    smallDiv.className = "card";

    var first = document.createElement("div");
    first.className = "card-image";

    var img = document.createElement("img");
    img.src =
      "https://tse2.mm.bing.net/th?id=OIP.uQlB7AC1-RNXr-jN512JTQHaGH&pid=Api&P=0";
    img.alt = "book";

    var sec = document.createElement("div");
    sec.className = "card-body";

    var h4 = document.createElement("h4");
    h4.className = "title";
    h4.textContent = elem.title;

    var p1 = document.createElement("p");
    p1.className = "author";
    p1.textContent = elem.author;

    var p2 = document.createElement("p");
    p2.className = "category";
    p2.textContent = elem.category;

    var p3 = document.createElement("p");
    p3.className = "publication_date";
    p3.textContent = elem.publication_date;

    var button = document.createElement("button");
    button.className = "card-button";
    button.textContent = "Add to Wishlist";
    button.addEventListener("click", function () {
      addToWishList(elem, i);
    });

    first.append(img);
    sec.append(h4, p1, p2, p3, button);

    smallDiv.append(first, sec);
    mainSection.append(smallDiv);
  });
};

// newest-first
// oldest-first

newestFirst.addEventListener("click", newestSort);
oldestFirst.addEventListener("click", oldestSort);

function newestSort() {
  filterData("desc");
}
function oldestSort() {
  filterData("asc");
}

const filterData = async (data) => {
  try {
    let res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books?sort=${data}`
    );
    let products = await res.json();
    displayData(products.data);
  } catch (err) {
    console.log(err);
  }
};

function addToWishList(data, i) {
  wishlistArray.push(data);
  localStorage.setItem("wishlist", JSON.stringify(wishlistArray));
}
