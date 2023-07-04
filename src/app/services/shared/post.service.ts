import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/app/environments/environment";
import { Post } from "src/app/models/post.model";
import { Observable } from "rxjs";
import { UpdatePostRequest } from "src/app/models/update-post.model";
import { AddPostRequest } from "src/app/models/add-post.model";

@Injectable({
    providedIn: "root"
})
export class PostService {
    constructor(private HTTP: HttpClient) { }

    API_BASE_URL = environment.api_base_url;

    GET_allPosts(): Observable<Post[]> {
        return this.HTTP.get<Post[]>(this.API_BASE_URL + "/api/posts");
    }

    GET_postById(id: string): Observable<Post> {
        return this.HTTP.get<Post>(this.API_BASE_URL + `/api/posts/${id}`);
    }

    UPDATE_post(id: string | undefined, updatePostRequest: UpdatePostRequest): Observable<Post> {
        return this.HTTP.put<Post>(this.API_BASE_URL + `/api/posts/${id}`, updatePostRequest);
    }

    CREATE_post(addPostRequest: AddPostRequest): Observable<Post> {
        return this.HTTP.post<Post>(this.API_BASE_URL + `/api/posts`, addPostRequest);
    }

    DELETE_post(id: string | undefined): Observable<Post> {
        return this.HTTP.delete<Post>(this.API_BASE_URL + `/api/posts/${id}`);
    }
}
