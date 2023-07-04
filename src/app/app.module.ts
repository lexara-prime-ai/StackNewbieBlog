import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './components/admin/admin-posts/admin-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewPostComponent } from './components/admin/admin-view-post/admin-view-post.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminAddPostComponent } from './components/admin/admin-add-post/admin-add-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AdminPostsComponent,
    AdminViewPostComponent,
    AdminAddPostComponent,
    PostsComponent,
    PostComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
