import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class REDIRECT_SERVICE {
    constructor(private route: Router) { }

    NAVIGATE(route_path: string) {
        this.route.navigate([`${route_path}`]);
    }
}