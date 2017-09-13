import {inject} from "aurelia-framework";
import {MovieData} from "./movieData";

@inject(MovieData)
export class Details
{
    constructor(movieData)
    {       
        this.data= movieData;
    }
    activate(params)
    {
        //alert(params.id);
        return this.data.getById(params.id)
                 .then(movie => this.movie = movie);
    }
}