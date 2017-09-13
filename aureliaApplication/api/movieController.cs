using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace aureliaApplication.api
{
    public class movieController : ApiController
    {
        [HttpGet]
        public Movie Get(int id)
        {
            var searchedMovie = new Movie();
            var result = AllMovies();
            foreach (var res in result)
            {
                if (res.id == id)
                {
                    searchedMovie = res;
                    break;
                }
            }
            return searchedMovie;
        }
        [HttpGet]
        //[NonAction]
        public List<Movie> AllMovies()
        {
            var result = new List<Movie>();
            result.Add(new Movie { id = 1, title = "Star Wars", releaseYear = 1983 });
            result.Add(new Movie { id = 11, title = "Star Trek", releaseYear = 1981 });
            result.Add(new Movie { id = 21, title = "Shrek", releaseYear = 2004 });
            return result;
        }

        [HttpPut]
        public Movie save(Movie movie)
        {
            var result = new Movie();
            result.id = movie.id;
            result.title = movie.title;
            result.releaseYear = movie.releaseYear;
            return result;
        }
    }



    public class Movie
    {
        public int id { get; set; }
        public string title { get; set; }
        public int releaseYear { get; set; }
    }
}
