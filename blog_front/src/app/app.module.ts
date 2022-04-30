import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { TagsComponent } from './tags/tags.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TagsComponent,
    PostDetailComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    CommentsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
