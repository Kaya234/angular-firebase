import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesService } from './courses.service';
import { CourseListComponent } from './course-list/course-list.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { CourseCardComponent } from './course-list/course-card/course-card.component';
import { CourseDetailComponent } from './course-list/course-detail/course-detail.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    NotFoundComponent,
    FooterComponent,
    CourseListComponent,
    CategoryComponent,
    SearchComponent,
    CourseCardComponent,
    CourseDetailComponent,
    SearchbarComponent,
    DropdownComponent,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
