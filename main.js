$(function() {
    // Handler for .ready() called.
    setMainMargin();

    animate(".budget-item", 0.5, 1);
    animate(".preview-label", 0.5, 0.4);
    animate("header", 0.2, 1);
    animate(".footer-holder", 0.2, 1);
    animate(".input-holder", 0.8, 1);

    navigator("#add-item-button", "add.html");
    navigator("#add-item-back-button", "index.html");

    getElementsAndPage();

});

function getElementsAndPage() {

    const nameInput = document.getElementById("name-input")
    const nameTag = document.getElementById("item-name");
    const currentHTML = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

    switch (currentHTML) {
        case "add.html":
            checkInputs(nameTag, nameInput, "Donut");
            break;
        default:
            break;
    }

}

function setMainMargin () {
    var headerHeight = $("header").height();
    var main = $("main");
    main.css({
        marginTop: headerHeight,
    });

    var expensesHeight = $(".footer-holder").height();
    main.css({
        marginBottom: expensesHeight + 40,
    })
}

function animate (element, speed, opacity) {
    $(element).css({
        transition: "all " + speed + "s ease",
    });
    setTimeout(() => {
        $(element).css({
            opacity: opacity,
            transform: "translateY(0px)"
        });
    }, 300);
    
}

function navigator(element, page) {
    $(element).click(function () {
        window.location.href = page;
    });
}

function checkInputs (elementToUpdate, inputElement, defaultValue) {
    setInterval(function () {
        if (inputElement.value.length > 0) {
            elementToUpdate.innerHTML = inputElement.value;
        } else {
            elementToUpdate.innerHTML = defaultValue;
        }
    },20);
}