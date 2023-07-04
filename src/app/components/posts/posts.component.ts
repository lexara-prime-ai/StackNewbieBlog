import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/services/shared/post.service";

@Component({
    selector: "posts",
    templateUrl: "posts.component.html",
    styleUrls: ["posts.component.css"],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class PostsComponent implements OnInit {
    constructor(private postService: PostService) { }

    posts: Post[] = [];
    // post: Post| undefined;

    ngOnInit() {
        this.postService.GET_allPosts()
            .subscribe((response) => {
                this.posts = response;
                // this.post = this.posts[0];
            });
    }
}