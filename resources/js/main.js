$(document).ready(function(){

    // Sticky menu
    $(".js-services-section").waypoint(function(direction){
       if(direction=="down"){
            $("nav").addClass("sticky");
       } else{
            $("nav").removeClass("sticky");
       }
    });

    // mixitup (portfolio)
    var mix = mixitup('.prtflioProjects'); 
});


function opennav(){
     document.getElementById("mymblNav").style.width="80%";
}
function closeNav(){
     document.getElementById("mymblNav").style.width="0%";
}