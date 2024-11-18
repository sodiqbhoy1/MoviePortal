import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TVshowsComponent } from './tvshows/tvshows.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [

{path:'', component: HomeComponent},
{path:'movies', component: MoviesComponent},
{path: 'tvshows', component: TVshowsComponent},
{path: 'about', component: AboutComponent},
{path:'contact', component: ContactComponent},
{path:'**', component:NotfoundComponent}

];
