import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/services/shared/post.service";

@Component({
    selector: "post",
    templateUrl: "post.component.html",
    styleUrls: ["post.component.css"],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class PostComponent implements OnInit {
    constructor(
        private postService: PostService,
        private route: ActivatedRoute
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
}