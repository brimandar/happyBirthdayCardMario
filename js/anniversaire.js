

// Sur click 1er bouton faire apparaître le 2nd bouton
$(".button1").on("click", (function(){
    $(".button2").fadeIn(400,function() {$(this).show()});
}));
// Sur click 2dn bouton faire apparaître le 3ieme bouton
$(".button2").on ("click", (function(){
    $(".button3").fadeIn(400,function() {$(this).show()});
}));
//Sur clic du 3ieme bouton, je modifie le CSS et je lance la série d'animation mario bros
$(".button3").on("click", (function(){
    //Modification du visuel
    $("header").hide();
    $("button").hide();
    $(".mario").show();
    $(".cloud").show();
    $(".coin").show();
    $(".ground").show();
    $("section").css({"background" : "#b1c8ed"});
    //Lancement de la musique
    $("#stage_clear")[0].play();

    //Animation de mario
    $(".mario")
    .animate( {left: "46%"}, 3000 )
    .animate( {top : "-180px"}, 200 )
    .animate( {top : "-75px"}, 200 )
    .animate( {left: "92%"}, 3000,
    function() {$(this).hide()} ) ;

    //Animation du block jaune
    $(".block").delay(3100).animate(
        {bottom : "250px"},
        100);
    //Animation du champignon sortant du block jaune
    $(".life").delay(3200)
        .animate( {bottom : "270px"}, function() {$(this).show()} )
        .animate({bottom : "350px"},1000);
    //Apparition du mot d'anniversaire
    $(".birthday").append("<div class='star'></div>");
    $(".birthday").append("<p>33 ans, l'âge du bonheur ! <br/>( c'est prouvé ! <a href='http://www.leparisien.fr/societe/33-ans-l-age-du-bonheur-03-04-2012-1937414.php'> Voir article</a> )</p>");
    $(".birthday").append("<div class='star'></div>");
//Apparition de Super phil Bros
    $(".SuperPhil").delay(3200)
        .animate( {top : "40%"}, function() {$(this).show()} )
        .animate({top : "30%"},1000);

    $(".birthday").delay(3500)
        .animate({
            opacity : 1,
            top : "5%"},
        2000
    );
}));
//Sur clic block jaune, bruitage vie supplémentaire mario bros
$(".block").on("click", function(){
    $("#one_life")[0].play();
});