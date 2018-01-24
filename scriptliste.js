$(function(){



    var favoris = JSON.parse(localStorage.getItem("favoris")) || [];


  if (favoris.length==0) {
    $("<p>").text("Vous n'avez aucun encore aucun film en favoris.").appendTo("#box");
  }
  else {
    $("<ul>").attr("class","list-group-item").attr("id","listemov").appendTo("#box");

    for (var i = 0; i < favoris.length; i++) {
      var movie=favoris[i];
      console.log(movie);
      $("<li>").attr("class","list-group-item").html(
          '<a href="details.html#'+movie.id+'">'+movie.title+'</a>'+
          '<button id="'+movie.id+'" class="deleteFav">Supprimer</button>'
      ).appendTo("#listemov");
    }
  }


    $("#resetFav").click(function(){
      localStorage.clear();
      location.reload();

    });

    $(".deleteFav").click(function(){
      var id = $(this).attr('id');
      for (var i = 0; i < favoris.length; i++) {
        var movie=favoris[i];
        if (movie.id==id) {
          favoris.splice(i,1);
        }
      }
      localStorage.setItem("favoris", JSON.stringify(favoris));
      location.reload();
    });

});
