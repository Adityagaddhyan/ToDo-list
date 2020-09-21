
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type='text").keypress(function(event) {
    if(event.which==13){
        console.log($(this).val());
        var newtask="<li><span class=\"deleteitem\"><i class=\"fa fa-trash\"></i></span> "+ $(this).val() +"</li>";
        $("ul").fadeIn(1000,function(){
            $(this).prepend(newtask);
        });
        $(this).val("");    
    }
});
$("ul").on("click","li",function(){
    console.log("clicked");
    $(this).toggleClass("checkeditem");
});