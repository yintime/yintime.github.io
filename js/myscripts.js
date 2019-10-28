$(document).ready(function(){
    // $("div").slideToggle("slow")
    $(".page").click(function(){
        $(this).hide()
        $(this).next().slideToggle(2000,"swing")
    })
    $(".last").click(function(){
        $(".first").slideToggle(2000,"linear")
    })
});