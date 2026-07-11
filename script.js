function headerMenu() {
    let headerBurger = document.getElementById("header-burger");
    let headerMenu = document.getElementById("header-menu");

    if (!headerBurger) {
        return;
    }

    headerBurger.addEventListener("click", function() {
        headerMenu.classList.toggle("active");
    })

}

headerMenu();