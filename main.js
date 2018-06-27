$(function() {
    // Handler for .ready() called.
    setMainMargin();
    animate(".budget-item", 0.5);
    animate("header", 0.2);
    animate(".footer-holder")
});

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

function animate (element, speed) {
    $(element).css({
        transition: "all " + speed + "s ease",
    });
    setTimeout(() => {
        $(element).css({
            opacity: 1,
            transform: "translateY(0px)"
        });
    }, 300);
    
}