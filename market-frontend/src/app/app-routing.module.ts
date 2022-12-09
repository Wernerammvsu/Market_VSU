import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './body/about/about.component';
import { CartComponent } from './body/cart/cart.component';
import { FreeComponent } from './body/free/free.component';
import { GameDetailsComponent } from './body/game-details/game-details.component';
import { GenreComponent } from './body/genre/genre.component';
import {FeatureComponent} from './body/feature/feature.component'
import { MainComponent } from './body/main/main.component';
import { PopularComponent } from './body/popular/popular.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'genre', component: GenreComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'free', component: FreeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
