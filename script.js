$(function(){

  var api_key="58f8fe741b03b0ae4c9a2ed080e94041";

//Fonction pour récupérer la liste des films depuis la barre de recherche
  var renderMovies=function(movies){
    $("#list").html("");

    for(var i=0; i<movies.results.length; i++) {
      var movie=movies.results[i];
      $("<li>").attr("class","list-group-item").html(
        '<a href="details.html#' + movie.id + '">' +
        movie.title +
        '</a>'
      ).appendTo("#list");
    }
  };

//On récupère la valeur entrée dans la barre de recherche et on l'applique à l'API
  $('#search').change(function(){
    var search=$(this).val();

  $.get("https://api.themoviedb.org/3/search/movie?query="+search+"&api_key="+api_key
  ,function(results){

    renderMovies(results);
  });

  });

//Liste des films actuellement en salles
    var rendertheaMovies = function(theaMovies){
         for (var i=0; i< theaMovies.results.length; i++) {
             var theaMovie = theaMovies.results[i];
             $("<a>").attr("class","col col-sm-6 col-md-2").attr("href","details.html#"+theaMovie.id).html(
			 	'<img alt="poster" class="img-responsive" src="http://image.tmdb.org/t/p/w300' + theaMovie.poster_path + '">' +
				 '<p>'+
				 theaMovie.title +
				 '</p>'
			 ).appendTo("#thea");

         } };
     var thea = $(this).val();
     $.get("http://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key, function(resultats){
         rendertheaMovies(resultats);
     });

//On récupère des films pour enfants

     var renderkidsMovies = function(kidsMovies){
         for (var i=0; i<18; i++) {
             var kidsMovie = kidsMovies.results[i];
             $("<a>").attr("class","col col-sm-6 col-md-2").attr("href","details.html#"+kidsMovie.id).html(
			 	'<img alt="poster" class="img-responsive" src="http://image.tmdb.org/t/p/w185' + kidsMovie.poster_path + '">' +
				 '<p>'+
				 kidsMovie.title +
				 '</p>'
			 ).appendTo("#kids");
         } };
     var kids = $(this).val();
     $.get("http://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=" + api_key, function(resultats){
         renderkidsMovies(resultats);
     });


//Récupération des films les plus populaires
     var renderRecentMovies = function(recentMovies){
         for (var i=0; i<18; i++) {
             var recentMovie = recentMovies.results[i];


             //var lientest=recentMovie.title+postertest;
             $("<a>").attr("class","col col-sm-6 col-md-2").attr("href","details.html#"+recentMovie.id).html(
			 	'<img alt="test" class="img-responsive" src="http://image.tmdb.org/t/p/w185' + recentMovie.poster_path + '">' +
				 '<p>'+
				 recentMovie.title +
				 '</p>'
			 ).appendTo("#recent");


         } };
     var recent = $(this).val(); $.get("http://api.themoviedb.org/3/movie/popular?api_key=" + api_key, function(results){ renderRecentMovies(results);
     });


});
