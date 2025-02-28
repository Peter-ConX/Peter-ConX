// Function to search for books (Original Version)
function searchBooks() {
    let input = document.getElementById("search").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

// Improved version with event listener
document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            let input = this.value.toLowerCase();
            let books = document.querySelectorAll(".book");

            books.forEach((book) => {
                let title = book.getAttribute("data-title").toLowerCase();
                book.style.display = title.includes(input) ? "block" : "none";
            });
        });
    }
});
