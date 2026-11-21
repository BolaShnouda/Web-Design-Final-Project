const pills = document.querySelectorAll("#filters .pill");
const cards = document.querySelectorAll("#places [data-cat]");

pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
        pills.forEach(function (p) { p.classList.remove("active"); });
        pill.classList.add("active");

        const filter = pill.dataset.filter;

        cards.forEach(function (card) {
            if (filter === "all" || card.dataset.cat === filter) {
                card.classList.remove("d-none");
            } else {
                card.classList.add("d-none");
            }
        });
    });
});