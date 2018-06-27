$(function() {
    // Handler for .ready() called.
    setMainMargin();
    animate(".budget-item", 0.5);
    animate("header", 0.2);
});

function setMainMargin () {
    var headerHeight = $("header").height();
    var main = $("main");
    main.css({
        marginTop: headerHeight,
    });
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