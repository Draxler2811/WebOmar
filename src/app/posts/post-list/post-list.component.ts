import { Component,  OnInit, Output, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../posts.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
    // posts = [];
    

    // posts = [
    //     {title : "Primer post", content: "Este es el contenido del primer post"},
    //     {title : "Segundo post", content: "Este es el contenido del Segundo post"},
    //     {title : "Tercero post", content: "Este es el contenido del tercero post"}
    // @Input() posts: Post[] = [];
    posts: Post[] = [];
    private PostsSub: Subscription;

    constructor(public postsService: PostService){
    }
    ngOnInit() {
        // this.posts = this.postsService.getPosts();
        this.PostsSub = this.postsService.getPostsUpdateListener()
        .subscribe((posts: Post[]) =>{
            this.posts = posts
        });
    }    
    // ]
    // eliminarPost(index: number) {
    //     this.posts.splice(index, 1);
    //   }
    eliminarPost(post: Post) {
        this.postsService.eliminarPost(post);
      }

    ngOnDestroy(){
        this.PostsSub.unsubscribe();
    }
}