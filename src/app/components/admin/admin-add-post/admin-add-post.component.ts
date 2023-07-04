import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddPostRequest } from "src/app/models/add-post.model";
import { PostService } from "src/app/services/shared/post.service";

@Component({
    selector: "admin-add-post",
    templateUrl: "admin-add-post.component.html",
    styleUrls: ["admin-add-post.component.css"],
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class AdminAddPostComponent {
    constructor(private postService: PostService) { }

    post: AddPostRequest = {
        title: "",
        content: "",
        summary: "",
        urlHandle: "",
        featuredImageUrl: "",
        visible: true,
        author: "",
        publishDate: "",
        updatedDate: ""
    }

    onSubmit(): void {
        this.postService.CREATE_post(this.post)
            .subscribe((response) => {
                console.log("Post created successfully!", response);
            });
    }
}