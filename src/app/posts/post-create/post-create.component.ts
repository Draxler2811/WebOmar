import { Component} from "@angular/core";
// import { Component,EventEmitter, Output} from "@angular/core";

import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostService } from "../posts.service";

@Component({
    selector: 'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.css']
})

export class PostCreateComponent{

   enteredTitle = "";
   enteredContent = "";
//    @Output() postcreated = new EventEmitter<Post>();

   constructor(public postsService: PostService){}
    
    onAddPost(form: NgForm){
        if(form.invalid){
            return;
        }
    //    const post : Post =  {
    //     title: form.value.title,
    //     content: form.value.content
    //    };
    this.postsService.addPost(form.value.title, form.value.content);
   form.resetForm();
    
    }
   
}
 // this.newPost = postInput.value; //mandamos llamara a la variable
        // this.newPost = "Publicacion del usuario"; //mandamos llamara a la variable

        // alert("!Publicacion afectada Correctamente :) ")


//         import { Component,EventEmitter, Output} from "@angular/core";


// @Component({
//     selector: 'app-post-create',
//     templateUrl:'./post-create.component.html',
//     styleUrls:['./post-create.component.css']
// })

// export class PostCreateComponent{

//    enteredTitle = "";
//    enteredContent = "";
//    @Output() postcreated = new EventEmitter();
    
//     onAddPost(){
//        const post = {
//         title: this.enteredTitle,
//         content: this.enteredContent
//        };
//     this.postcreated.emit(post);
//     this.enteredTitle = "";
//     this.enteredContent = "";
    
//     }
   
// }