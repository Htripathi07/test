var wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || [];

// ***** Constants / Variables ***** //
const bookURL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books`;

//Append wishlist book card in this mainSection
let mainSection = document.getElementById("data-list-wrapper");

//add total Wishlist text
let totalWishlist = document.getElementById("total-wishlist");

displayData(wishlistArray);
countData(wishlistArray);

function displayData(data) {
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
    button.className = "card-remove-button";
    button.textContent = "Remove";
    button.addEventListener("click", function () {
      remove(elem, i);
    });

    first.append(img);
    sec.append(h4, p1, p2, p3, button);

    smallDiv.append(first, sec);
    mainSection.append(smallDiv);
  });
}

function countData(data) {
  totalWishlist.textContent = data.length;
}

function remove(data, i) {
  wishlistArray.splice(i, 1);
  displayData(wishlistArray);
  countData(wishlistArray);
}
