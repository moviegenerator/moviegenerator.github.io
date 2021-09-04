const API_KEY="?api_key=0039b0e2fb5f447d644a15cb529e7450"
const BASE_URL="https://api.themoviedb.org/3/"
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500"
const genre_list=["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]
const genre_ids_list=[28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]








var filter_request="discover/movie"
var movie_title=document.getElementById('movie-title')
var movie_image=$('#movie-image')
var movie_description=document.getElementById("description")
var movie_vote=document.getElementById("vote")
var movie_release_date=document.getElementById("release_date")
var movie_genre=document.getElementById("genre")
var trailer_link=document.getElementById("btn_txt")

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("monitorscreen");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




var data=fetch(BASE_URL+filter_request+API_KEY)
    .then(response =>  response.json()  )
    .then(data => 
        {
            console.log(data.results[Math.floor(Math.random() * 20)])
        })



$('#monitorscreen').click((a)=>{
    
    var data=fetch(BASE_URL+filter_request+API_KEY)
    .then(response =>  response.json()  )
    .then(data => 
        {
            var movies_genres=""
            movie_info=data.results[Math.floor(Math.random() * 20)];

            movie_image.attr("src",IMAGE_BASE_URL+movie_info.poster_path);
            movie_title.innerHTML=movie_info.title;
            if(movie_info.title=="Breathless"){
              movie_description.innerText="In the DR, hardened cop Manolo tries to take down an infamous drug cartel; meanwhile, his daughter has fallen in love with Lorenzo, a construction worker who's unwittingly gotten embroiled in the drug cartel's dealings."
            }
            else{
              movie_description.innerText=movie_info.overview;
            }
            movie_vote.innerText=movie_info.vote_average+"/10";
            movie_release_date.innerText=movie_info.release_date;
            trailer_link.href="https://www.youtube.com/results?search_query="+movie_info.title;
            
            for(var i=0;i<(movie_info.genre_ids).length ;i++){
              
              movies_genres+=genre_list[genre_ids_list.indexOf(movie_info.genre_ids[i])];
              if(i!=(movie_info.genre_ids).length-1){
                movies_genres+=", ";
              }
            
            }
            
            movie_genre.innerText=movies_genres;

        })

    modal.style.display = "block";

  })





// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}