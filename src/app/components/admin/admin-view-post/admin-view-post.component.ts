import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { PostService } from "src/app/services/shared/post.service";
import { Post } from "src/app/models/post.model";
import { FormsModule } from "@angular/forms";
import { UpdatePostRequest } from "src/app/models/update-post.model";
import { REDIRECT_SERVICE } from "src/app/services/shared/redirect.service";

@Component({
    selector: "admin-view-post",
    templateUrl: "admin-view-post.component.html",
    styleUrls: ["admin-view-post.component.css"],
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule]
})
export class AdminViewPostComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private redirectService: REDIRECT_SERVICE
    ) { }

    post: Post | undefined;

    ngOnInit(): void {
        this.route.paramMap.subscribe(
            params => {
                const id = params.get("id");

                if (id) {
                    this.postService.GET_postById(id)
                        .subscribe((response) => {
                            this.post = response;
                        });
                }
            }
        );
    }

    onSubmit() {
        const updatePostRequest: UpdatePostRequest = {
            title: this.post?.title,
            content: this.post?.content,
            summary: this.post?.summary,
            urlHandle: this.post?.urlHandle,
            featuredImageUrl: this.post?.featuredImageUrl,
            visible: this.post?.visible,
            author: this.post?.author,
            publishDate: this.post?.publishDate,
            updatedDate: this.post?.updatedDate
        };

        this.postService.UPDATE_post(this.post?.id, updatePostRequest)
            .subscribe((response) => {
                console.log("Update successful!", response);
            });

        setTimeout(() => {
            this.redirectService.NAVIGATE("admin/posts");
        }, 1500);
    }

    deletePost() {
        this.postService.DELETE_post(this.post?.id)
            .subscribe((response) => {
                console.log("Post deleted successfully!", response);
            });
    }
}

