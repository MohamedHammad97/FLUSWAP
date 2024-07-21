let { top: section2 } = $("#section2").offset()
$(window).scroll(function () {
    let windowOffset = $(window).scrollTop()
    if (windowOffset > section2 - 50) {
        $("#navBar .container").css("padding", "0 50px")
        $("#backToTop").fadeIn(1000)
    } else {
        $("#navBar .container").css("padding", "0 12px")
        $("#backToTop").fadeOut(1000)
    }
})

$("#backToTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 100)
})

$(document).ready(function () {
    $(".loader").fadeOut(1000, function () {
        $("#loading").fadeOut(1000, function () {
            $("body").css("overflow", "auto")
        })
    })
})
