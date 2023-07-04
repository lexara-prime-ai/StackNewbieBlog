import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => 
      import("./components/posts/posts.component").then(component => component.PostsComponent)
  },
  {
    path: "post/:id",
    loadComponent: () => 
      import("./components/post/post.component").then(component => component.PostComponent)
  },
  {
    path: "admin/posts",
    loadComponent: () =>
      import('./components/admin/admin-posts/admin-posts.component').then(component => component.AdminPostsComponent)
  },
  { 
    path: "admin/posts/add", 
    loadComponent: () =>
      import('./components/admin/admin-add-post/admin-add-post.component').then(component => component.AdminAddPostComponent)
  },
  { 
    path: "admin/posts/:id", 
    loadComponent: () =>
      import('./components/admin/admin-view-post/admin-view-post.component').then(component => component.AdminViewPostComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
