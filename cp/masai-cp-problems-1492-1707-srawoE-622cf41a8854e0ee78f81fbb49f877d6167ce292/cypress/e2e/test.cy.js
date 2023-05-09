import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://localhost:8080", id: 67890 }];
describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  let mock = {
    books: [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9780061120084",
        category: "classic",
        publication_date: "1960-07-11",
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        isbn: "9780451524935",
        category: "dystopian",
        publication_date: "1949-06-08",
      },
      {
        id: 3,
        title: "Brave New World",
        author: "Aldous Huxley",
        isbn: "9780060850524",
        category: "dystopian",
        publication_date: "1932-01-01",
      },
      {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "9780743273565",
        category: "classic",
        publication_date: "1925-04-10",
      },
      {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "9780141439518",
        category: "romance",
        publication_date: "1813-01-28",
      },
      {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        isbn: "9780316769488",
        category: "coming_of_age",
        publication_date: "1951-07-16",
      },
      {
        id: 7,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        isbn: "9780544003415",
        category: "fantasy",
        publication_date: "1954-07-29",
      },
      {
        id: 8,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        isbn: "9780590353403",
        category: "fantasy",
        publication_date: "1997-06-26",
      },
      {
        id: 9,
        title: "Animal Farm",
        author: "George Orwell",
        isbn: "9780451526342",
        category: "political_satire",
        publication_date: "1945-08-17",
      },
      {
        id: 10,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        isbn: "9780547928227",
        category: "fantasy",
        publication_date: "1937-09-21",
      },
      {
        id: 11,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        isbn: "9780307474278",
        category: "mystery",
        publication_date: "2003-03-18",
      },
      {
        id: 12,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        isbn: "9780307269751",
        category: "mystery",
        publication_date: "2005-08-23",
      },
      {
        id: 13,
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        isbn: "9780486280615",
        category: "classic",
        publication_date: "1884-12-10",
      },
      {
        id: 14,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        isbn: "9780141439570",
        category: "classic",
        publication_date: "1890-07-01",
      },
      {
        id: 15,
        title: "The Odyssey",
        author: "Homer",
        isbn: "9780140268867",
        category: "epic_poem",
        publication_date: "1890-07-01",
      },
    ],
  };

  let NewestBook_mock = {
    NewBook: [
      {
        id: 12,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        isbn: "9780307269751",
        category: "mystery",
        publication_date: "2005-08-23",
      },
      {
        id: 11,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        isbn: "9780307474278",
        category: "mystery",
        publication_date: "2003-03-18",
      },
      {
        id: 8,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        isbn: "9780590353403",
        category: "fantasy",
        publication_date: "1997-06-26",
      },
      {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9780061120084",
        category: "classic",
        publication_date: "1960-07-11",
      },
      {
        id: 7,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        isbn: "9780544003415",
        category: "fantasy",
        publication_date: "1954-07-29",
      },
      {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        isbn: "9780316769488",
        category: "coming_of_age",
        publication_date: "1951-07-16",
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        isbn: "9780451524935",
        category: "dystopian",
        publication_date: "1949-06-08",
      },
      {
        id: 9,
        title: "Animal Farm",
        author: "George Orwell",
        isbn: "9780451526342",
        category: "political_satire",
        publication_date: "1945-08-17",
      },
      {
        id: 10,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        isbn: "9780547928227",
        category: "fantasy",
        publication_date: "1937-09-21",
      },
      {
        id: 3,
        title: "Brave New World",
        author: "Aldous Huxley",
        isbn: "9780060850524",
        category: "dystopian",
        publication_date: "1932-01-01",
      },
      {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "9780743273565",
        category: "classic",
        publication_date: "1925-04-10",
      },
      {
        id: 14,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        isbn: "9780141439570",
        category: "classic",
        publication_date: "1890-07-01",
      },
      {
        id: 15,
        title: "The Odyssey",
        author: "Homer",
        isbn: "9780140268867",
        category: "epic_poem",
        publication_date: "1890-07-01",
      },
      {
        id: 13,
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        isbn: "9780486280615",
        category: "classic",
        publication_date: "1884-12-10",
      },
      {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "9780141439518",
        category: "romance",
        publication_date: "1813-01-28",
      },
    ],
  };

  let OldestBook_mock = {
    OldBook: [
      {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "9780141439518",
        category: "romance",
        publication_date: "1813-01-28",
      },
      {
        id: 13,
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        isbn: "9780486280615",
        category: "classic",
        publication_date: "1884-12-10",
      },
      {
        id: 14,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        isbn: "9780141439570",
        category: "classic",
        publication_date: "1890-07-01",
      },
      {
        id: 15,
        title: "The Odyssey",
        author: "Homer",
        isbn: "9780140268867",
        category: "epic_poem",
        publication_date: "1890-07-01",
      },
      {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "9780743273565",
        category: "classic",
        publication_date: "1925-04-10",
      },
      {
        id: 3,
        title: "Brave New World",
        author: "Aldous Huxley",
        isbn: "9780060850524",
        category: "dystopian",
        publication_date: "1932-01-01",
      },
      {
        id: 10,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        isbn: "9780547928227",
        category: "fantasy",
        publication_date: "1937-09-21",
      },
      {
        id: 9,
        title: "Animal Farm",
        author: "George Orwell",
        isbn: "9780451526342",
        category: "political_satire",
        publication_date: "1945-08-17",
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        isbn: "9780451524935",
        category: "dystopian",
        publication_date: "1949-06-08",
      },
      {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        isbn: "9780316769488",
        category: "coming_of_age",
        publication_date: "1951-07-16",
      },
      {
        id: 7,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        isbn: "9780544003415",
        category: "fantasy",
        publication_date: "1954-07-29",
      },
      {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9780061120084",
        category: "classic",
        publication_date: "1960-07-11",
      },
      {
        id: 8,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        isbn: "9780590353403",
        category: "fantasy",
        publication_date: "1997-06-26",
      },
      {
        id: 11,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        isbn: "9780307474278",
        category: "mystery",
        publication_date: "2003-03-18",
      },
      {
        id: 12,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        isbn: "9780307269751",
        category: "mystery",
        publication_date: "2005-08-23",
      },
    ],
  };
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it(`Should have welcome message on index page`, () => {
      cy.visit(url);
      cy.get("#Welcome")
        .should("exist")
        .contains("Welcome to Books Wishlist")
        .then(() => {
          acc_score += 1;
        });
    });

    it("Check if dashboard fetch data on load ", () => {
      cy.intercept(
        "GET",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books"
      ).as("getBooks");
      cy.visit(url + "dashboard.html");
      cy.wait("@getBooks");
       cy.wait(500);

      const numOfBooks = 15;
      const cards = ".data-list-wrapper .card";
      cy.get(".data-list-wrapper").children().should("have.length", 15);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .first()
        .should("contain", mock.books[0].title);
      cy.get(cards)
        .eq(Math.ceil(numOfBooks / 2))
        .should("contain", mock.books[Math.ceil(numOfBooks / 2)].title);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .last()
        .should("contain", mock.books[numOfBooks - 1].title);
      cy.then(() => {
        acc_score += 3;
      });
    }); //3

    it("check sort Newest first functionality working as expected", () => {
      cy.intercept(
        "GET",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books"
      ).as("getBooks");
      cy.intercept(
        "GET",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books?sort=desc"
      ).as("newestFirst");

      cy.visit(url + "dashboard.html");
      cy.wait("@getBooks");
       cy.wait(500);

      cy.get("#newest-first").click();
      cy.wait("@newestFirst");
      cy.wait(1000);
      const numOfBooks = 15;
      const cards = ".data-list-wrapper .card";
      cy.get(".data-list-wrapper").children().should("have.length", 15);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .first()
        .should("contain", NewestBook_mock.NewBook[0].title);
      cy.get(cards)
        .eq(Math.ceil(numOfBooks / 2))
        .should("contain", NewestBook_mock.NewBook[Math.ceil(numOfBooks / 2)].title);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .last()
        .should("contain", NewestBook_mock.NewBook[numOfBooks - 1].title);
        cy.then(() => {
          acc_score += 2;
        });
    });//2
    it("check sort Oldest first functionality working as expected", () => {
      cy.intercept(
        "GET",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books"
      ).as("getBooks");
      cy.intercept(
        "GET",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books?sort=asc"
      ).as("oldestFirst");

      cy.visit(url + "dashboard.html");
      cy.wait("@getBooks");
       cy.wait(500);

      cy.get("#oldest-first").click();
      cy.wait("@oldestFirst");
      cy.wait(1000);
      const numOfBooks = 15;
      const cards = ".data-list-wrapper .card";
      cy.get(".data-list-wrapper").children().should("have.length", 15);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .first()
        .should("contain", OldestBook_mock.OldBook[0].title);
      cy.get(cards)
        .eq(Math.ceil(numOfBooks / 2))
        .should("contain", OldestBook_mock.OldBook[Math.ceil(numOfBooks / 2)].title);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .last()
        .should("contain", OldestBook_mock.OldBook[numOfBooks - 1].title);
        cy.then(() => {
          acc_score += 2;
        });
    });//2

    it("Check total wishlist book text before adding book", () => {
      cy.visit(url + "wishlist.html");

      cy.get("#total-wishlist").contains(0);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("check add to wishlist working as expected", () => {
      cy.intercept(
        "GET",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books"
      ).as("getBooks");
      cy.visit(url + "dashboard.html");
      cy.wait("@getBooks");
       cy.wait(500);

      const numOfBooks = 15;
      const cards = ".data-list-wrapper .card";
      cy.get(cards).first().find(".card-button").click();

      cy.get(cards)
        .eq(Math.ceil(numOfBooks / 2))
        .find(".card-button")
        .click();
      cy.get(cards)
        .should("have.length", numOfBooks)
        .last()
        .find(".card-button")
        .click();
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("data added to local storage successfully", () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("wishlist"));
      expect(data.length).to.equal(3);
      const numOfBooks = 15;
      expect(data[0].title).to.equal(mock.books[0].title);
      expect(data[1].title).to.equal(
        mock.books[Math.ceil(numOfBooks / 2)].title
      );
      expect(data[2].title).to.equal(mock.books[numOfBooks - 1].title);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(" Check if data added to dom successfully", () => {
      cy.visit(url + "wishlist.html");
      let numOfBooks = 15;
      const cards = ".data-list-wrapper .card";
      cy.get(".data-list-wrapper").children().should("have.length", 3);
      cy.get(cards)

        .first()
        .should("contain", mock.books[0].title);
      cy.get(cards)
        .eq(1)
        .should("contain", mock.books[Math.ceil(numOfBooks / 2)].title);

      cy.get(cards)

        .last()
        .should("contain", mock.books[numOfBooks - 1].title);
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it("Check total wishlist book should increase as a new note is added", () => {
      cy.visit(url + "wishlist.html");
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("wishlist"));

      cy.get("#total-wishlist").contains(data.length);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check delete functionality and dom updated after the book is deleted", () => {
      cy.visit(url + "wishlist.html");
      const cards = ".data-list-wrapper .card";
      cy.get(".data-list-wrapper").children().should("have.length", 3);
      cy.get(cards).children().last().find(".card-remove-button").click();
      // cy.get("#deleted").
      cy.get(".data-list-wrapper").children().should("have.length", 2);
      cy.get("#total-wishlist").contains(2);
      cy.get(".data-list-wrapper").children().should("have.length", 2);
      cy.get(cards).children().last().find(".card-remove-button").click();
      // cy.get("#deleted").
      cy.get(".data-list-wrapper").children().should("have.length", 1);
      cy.get("#total-wishlist").contains(1);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check if data is updated in local storage successfully after deleting books", () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("wishlist"));
      expect(data.length).to.equal(1);

      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
