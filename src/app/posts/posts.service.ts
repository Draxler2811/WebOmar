import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class PostService{
    private posts: Post[] = []; //Primera matriz
    private postsUpdate = new Subject<Post[]>();



getPosts(){
    return [...this.posts];//Segunda Matriz
}

    getPostsUpdateListener(){
        return this.postsUpdate.asObservable();
    }
    addPost(title: string, content: string){
        const post: Post = {
            title: title, 
            content: content}
        this.posts.push(post);
        this.postsUpdate.next([...this.posts]);
    }
    eliminarPost(post: Post) {
        const index = this.posts.indexOf(post);
        if (index !== -1) {
          this.posts.splice(index, 1);
          this.postsUpdate.next([...this.posts]);
        }
      }
    
}