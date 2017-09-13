import {inject} from "aurelia-framework";
import {MovieData} from "./movieData";

@inject(MovieData)
export class List
{

    constructor(movieData)
    {
        this.movieData= movieData;
    }

    activate()
    {
        //this.message="Hello this message is from activate event";
       
        return this.movieData
                   .getAll()
                   .then(movies => this.movies =movies);
    }

    changeMessage()
    {
        this.message="This is the changed message";
    }
}