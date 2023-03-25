import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  //get all post data
  getAllPost(){
    return this.http.get('http://localhost:3000/posts')
  }

  //get post by id
  getPostById(id:string){
    return this.http.get('http://localhost:3000/posts'+'/'+id)
  }

  //delete post by id
  deletePost(id:any){
    return this.http.delete('http://localhost:3000/posts'+'/'+id)
  }

  //update post by id
  updatePost(postId:any,post:any){
    return this.http.put('http://localhost:3000/post'+'/'+postId,post)
  }

  // //create post 
  createPost(post:any){
    return this.http.post('http://localhost:3000/posts',post)
  }
}
