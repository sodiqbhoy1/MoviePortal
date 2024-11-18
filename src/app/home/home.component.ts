import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  movies:any[]=[];
public Url = 'https://api.themoviedb.org/3/movie/popular?api_key=4ce8aa31e49f03535923406e01d3bce9';


constructor( public http:HttpClient){}
getBackdropUrl(backdropPath: string): string {
  return `https://image.tmdb.org/t/p/w500${backdropPath}`;
}


ngOnInit(): void {
  this.http.get(this.Url).subscribe((data:any)=>{
    this.movies=data.results
    console.log(data);
    
  })
}

}
