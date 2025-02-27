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
