document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const totalPages = 9;
    const pages = document.querySelectorAll(".page");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showPage(pageNumber) {
        pages.forEach((page, index) => {
            page.style.display = index + 1 === pageNumber ? "block" : "none";
        });
        prevButton.style.display = pageNumber === 1 ? "none" : "inline-block";
        nextButton.style.display = pageNumber === totalPages ? "none" : "inline-block";
    }

    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});
