$(function() {
    // Handler for .ready() called.
    SetMainMargin();

    Animate(".budget-item", 0.5, 1);
    Animate(".preview-label", 0.5, 0.4);
    Animate("header", 0.2, 1);
    Animate(".footer-holder", 0.2, 1);
    Animate(".input-holder", 0.8, 1);

    Navigator("#add-item-button", "add.html");
    Navigator("#add-item-back-button", "index.html");

    GetElementsAndPage();

});

var nameInput, priceInput, amountInput, nameTag, priceTag, amountTag, currentHTML;

function GetElementsAndPage() {

    nameInput = document.getElementById("name-input");
    priceInput = document.getElementById("price-input");
    amountInput = document.getElementById("amount-input");
    nameTag = document.getElementById("item-name");
    priceTag = document.getElementById("item-price");
    amountTag = document.getElementById("item-amount");
    currentHTML = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

    switch (currentHTML) {
        case "add.html":
            CheckInputs(nameTag, nameInput, "Name", "", "");
            CheckInputs(priceTag, priceInput, "Price", "$", "front");
            CheckInputs(amountTag, amountInput, "Amount", "x", "behind");
            break;
        default:
            break;
    }

}

function SetMainMargin () {
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

function Animate (element, speed, opacity) {
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

function Navigator (element, page) {
    $(element).click(function () {
        window.location.href = page;
    });
}

function CheckInputs (elementToUpdate, inputElement, defaultValue, extraCharacter, position) {
    setInterval(function () {
        if (inputElement.value.length > 0) {
            if (position == "behind") {
                var input = inputElement.value.toString() + extraCharacter;
                elementToUpdate.innerHTML = input;
            } else {
                var input = extraCharacter + inputElement.value.toString();
                elementToUpdate.innerHTML = input;
            }
        } else {
            elementToUpdate.innerHTML = defaultValue;
        }

        CalcPrice();

    }, 20);
}

function CalcPrice () {
    var priceValue = $("#price-input").val();
    var amountValue = $("#amount-input").val();
    
    var totalAmount = priceValue * amountValue;
    
    parseFloat(Math.round(totalAmount * 100) / 100).toFixed(2);

    $("#item-total").html(totalAmount);
}