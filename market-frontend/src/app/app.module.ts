import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './body/main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './body/main/carousel/carousel.component';
import { SaleComponent } from './body/main/sale/sale.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesListItemComponent } from './games-list/games-list-item/games-list-item.component';
import { GameDetailsComponent } from './body/game-details/game-details.component';
import { CartComponent } from './body/cart/cart.component';
import { CartItemComponent } from './body/cart/cart-item/cart-item.component';
import { PopularComponent } from './body/popular/popular.component';
import { FreeComponent } from './body/free/free.component';
import { GenreComponent } from './body/genre/genre.component';
import { AboutComponent } from './body/about/about.component';
import { FeatureComponent } from './body/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MainComponent,
    FooterComponent,
    CarouselComponent,
    SaleComponent,
    SearchResultComponent,
    GamesListComponent,
    GamesListItemComponent,
    GameDetailsComponent,
    CartComponent,
    CartItemComponent,
    PopularComponent,
    FreeComponent,
    GenreComponent,
    AboutComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
