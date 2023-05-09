# 🏫 Library System 📚

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```

## Start Frontend server
```
npm run start
```

# Important files
```
├── index.html
├── dashboard.html
├── wishlist.html
├── scripts
│   └── dashboard.js
│   └── wishlist.js
└── styles
    └── style.css
```
## Maximum Marks - 17

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )
### Testcases for index page
✅ Should have welcome message on index page - 1 mark 
### Testcases for dashboard page
✅ Check if dashboard fetch data on load - 3 marks
✅ check sort Newest first functionality working as expected - 2 marks
✅ check sort Oldest first functionality working as expected - 2 marks
### Testcases for Wishlist page
✅ Check total Wishlist book text before adding book - 1 mark
✅ check add to Wishlist working as expected - 1 mark
✅ data added to local storage successfully - 1 mark
✅ Check if data added to dom successfully - 2 marks
✅ Check total Wishlist book should increase as a new note is added - 1 mark
### Testcases for Wishlist page deleting functionality
✅ Check delete functionality and dom updated after the book is deleted - 1 mark
✅ Check if data is updated in local storage successfully after deleting books - 1 mark
```
### You haven't been taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

# Problem statements

### Problem 1.  welcome message on home page [1]
- When we visit index/home display message as `Welcome to Books Wishlist !!!` 
- add this welcome text in index.html file in `h1` tag with `h1#Welcome`

<img src="https://user-images.githubusercontent.com/101581634/236438998-17f3c7be-4f31-411c-866b-bbada1bcf917.png" width="100%"/>

### Problem 2. List of books on dashboard page load [3]
On page `load`, a list of all `books` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Book card list):
<!-- ![landing page markup]() -->
<img src="https://user-images.githubusercontent.com/101581634/236438143-0c838825-b162-41f2-9d08-d8f1d4c6935a.png" width="100%"/>

- The `div.card` is a card appended to the div with `div#data-list-wrapper` where all such cards are appended.

Expected markup (example single card div inside data-list-wrapper div): 
<!-- ![bookMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/236440244-b639cff9-e4a9-4dde-bdc8-ca95b8a7e4cb.png" width="100%"/>

**<span style="color: green">Markup - elements, classes & IDs should be identical to the above screenshot.</span>**

- The **Card** with `div.card` having two child div 
  1. The `div.card-image` in this image of the book is present.
     - you can choose any random url for image 
     - else use 
       `https://tse2.mm.bing.net/th?id=OIP.uQlB7AC1-RNXr-jN512JTQHaGH&pid=Api&P=0`
  2. The `div.card-body` in this 
    - h4 tag with `h4.title` **with title of book**.
    - p tag with `p.author` with the author of the book
    - p tag with `p.category` with category of book
    - p tag with `p.publication_date` with the publication_date of a book
    - button with `button.card-button` with `Add to Wishlist` text 
        -  class= card-button

Expected UI (example card):
<!-- ![bookUI]() -->
<img src="https://user-images.githubusercontent.com/101581634/236441915-bcc152e5-c673-4b14-88b6-9f5692fb14a6.png" width="100%"/>

Data mapping:
<!-- ![dataMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/236443976-54d398f7-b1fe-455f-adc7-b5d4ff0a11cd.png" width="100%"/>

- *The data should be fetched from* `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books`

- Use <span style="color: red"> async await </span>to fetch data
 
- The books should be shown on page `load`

### Problem 3. Sorting Books Based on publication_date on dashboard page [ 2 +2 ]
- Sorting for `Newest First` UI:
<!-- ![sort Newest First] -->
<img src="https://user-images.githubusercontent.com/101581634/236445001-6381cef9-b975-4a42-a979-75426ff1e2c6.png" width="100%"/>

With the click of the button `#newest-first`, the book list should be sorted as new books first based on their *publication_date*.

With the click of the button `#oldest-first`, the book list should be sorted as old book first based on their *publication_date*.

 You may sort the available data and make a new fetch request to the url and update the list.

 - param for Newest book list - `?sort=desc`
 - param for Oldest book list - `?sort=asc`


### Problem 4. Ability to add a Book to Wishlist [ 1 + 1 + 2]
- In each book, the card adds a button `Add to Wishlist` with `button.card-button` on clicking this button particular book is added to local Storage with key `wishlist`.

- Hint : `localStorage.setItem("wishlist", JSON.stringify(wishlistArray))`

<img src="https://user-images.githubusercontent.com/101581634/236447701-91d990cd-1fd8-4b4a-862e-4de3113ac308.png" width="100%"/>
 

### Problem 5. total wishlist book text Should change as book added  [ 1 + 1 ]

- `span` tag  with id `total-wishlist` (in wishlist.html file) is already added no need to add again you have to only update it with no. of books present in wishtlist as shown below . by default it should be `0` and update as books are added or removed . 

- UI for book and total wishlist book 
<img src="https://user-images.githubusercontent.com/101581634/236448990-626d55f3-c851-4ddf-b97f-2e4c2a57c0d2.png" width="100%"/>

### Problem 6. List of books on wishlist page   [2]

On page `load`, a list of all `books` should be shown in the  `div#data-list-wrapper`. 

get books array from local Storage `JSON.parse(localStorage.getItem("wishlist"))`

- The `div.card` is a card appended to the div with `div#data-list-wrapper` where all such wishlist book cards are appended.

Expected markup (example single card div inside data-list-wrapper div): 
<!-- ![bookMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/236451410-c9325d0c-cf15-4301-aa8e-37bc1562acdd.png" width="100%"/>

**<span style="color: green">Markup - elements, classes & IDs should be identical to the above screenshot.</span>**

- The **Card** with `div.card` having two child div 
  1. The `div.card-image` in this image of the book is present.
     - you can choose any random url for image 
     - else use 
       `https://tse2.mm.bing.net/th?id=OIP.uQlB7AC1-RNXr-jN512JTQHaGH&pid=Api&P=0`
  2. The `div.card-body` in this 
    - h4 tag with `h4.title` **with title of book**.
    - p tag with `p.author` with the author of the book
    - p tag with `p.category` with category of book
    - p tag with `p.publication_date` with the publication_date of a book
    - button with `button.card-remove-button` with `Remove` text 
        -  class= card-remove-button

### Problem 7. Delete/Remove functionality on wishlist page   [2]

- button `Remove` must be present in every card on clicking this particular card data is removed from DOM as well as Local Storage and update both .

- after deleting a book also update total wishlist book `Count` at top.

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time



