$(function(){

var favoris = JSON.parse(localStorage.getItem("favoris")) || [];

 var id = window.location.hash.substr(1); //Permet de récupérer l'id du film depuis le lien ancre
$.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=58f8fe741b03b0ae4c9a2ed080e94041",function(movie){
  //Titre, Affiche du film et Synopsis
  $('#titre').html(movie.title);
  $('#poster').attr("src","http://image.tmdb.org/t/p/w500/"+movie.poster_path);
  $('#poster').attr("alt",movie.title);

  $('#synopsis').html(movie.overview);

  //Infos du film
  $("<li>").attr("class","list-group-item").text("Budget : $"+movie.budget).appendTo("#infos");

  //Liste des genres
  var nbgenre=movie.genres.length;
  var genres="";

  for (i=0; i<nbgenre; i++) {
    genres=genres+movie.genres[i].name;
    if(i!=nbgenre-1){
      genres=genres+", ";
    }
  }
  $("<li>").attr("class","list-group-item").text("Genres : "+genres).appendTo("#infos");

  //Liste des Producteurs
  var nbprod=movie.production_companies.length;
  var producers="";

  for (i=0; i<nbprod; i++) {
    producers=producers+movie.production_companies[i].name;
    if(i!=nbprod-1){
      producers=producers+", ";
    }
  }

  //Autres infos du film
  $("<li>").attr("class","list-group-item").text("Producteurs : "+producers).appendTo("#infos");
  $("<li>").attr("class","list-group-item").text("Original language : "+movie.original_language).appendTo("#infos");
  $("<li>").attr("class","list-group-item").text("Original title : "+movie.original_title).appendTo("#infos");

});

$("#fav").click(function(){
  $.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=58f8fe741b03b0ae4c9a2ed080e94041",function(movie){
    //favoris.push(id+','+movie.title);
    favoris.push(movie);
    localStorage.setItem("favoris", JSON.stringify(favoris));
    alert ("Le film a bien été ajouté à votre liste de favoris");
  });
});

});
