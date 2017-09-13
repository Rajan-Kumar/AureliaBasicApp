import {inject} from "aurelia-framework";
import {MovieData} from "./movieData";
import {Router} from "aurelia-router";

@inject(MovieData, Router)
export class Edit
{
    constructor(movieData, router)
    {
        this.data = movieData;
        this.router = router;        
    }
    activate(params)
    {
        return this.data.getById(params.id)
                        .then(movie => {
                            this.movie = movie                            
                        });
    }

    save()
    {        
        //this.validation.validate().then(() => {
            this.data.save(this.movie)
                     .then(movie => {
                         let url=this.router.generate("details", {id: movie.id});
                         this.router.navigate(url);
                     });
        //});
        
    }
}

//ValidationRules
//  .ensure(movie => movie.title).required()
//  .ensure(movie => movie.releaseYear).required()  
//  .on(Edit);

//this.validation = validationController.on(this)
//           .ensure("movie.title")
//               .isNotEmpty()
//               .hasMinLenght(3)
//               .hasMaxLength(100)
//           .ensure("movie.releaseYear")
//               .isNumber()
//               .isBetween(1900, 2100);