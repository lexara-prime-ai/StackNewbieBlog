import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/services/shared/post.service";

@Component({
    selector: "admin-posts",
    templateUrl: "admin-posts.component.html",
    styleUrls: ["admin-posts.component.css"],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class AdminPostsComponent implements OnInit {

    constructor(private postService: PostService) { }

    posts: Post[] = [];

    ngOnInit(): void {
        this.postService.GET_allPosts()
        .subscribe((response) => {
            this.posts = response;
        });
    }
}