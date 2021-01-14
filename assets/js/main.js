$(document).ready(function(){
    $("#add").click(function(){
        var items = $("#list").val();
        $("ol").append("<li>" +items+ "<span>"+" X"+"</span>" + "</li>");
        $("span").click(function(){
            $(this).parent().remove();
        })
    });
});