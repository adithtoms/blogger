import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  allPost: any
  post: any
  filterPost:any
  searchText:any
  currentUser:any
  


  constructor(private api: ApiService, private fb: FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.api.getAllPost().subscribe(data => {
      this.allPost = data
      
      console.log(this.allPost);
      this.filter("")
     
      
    })
  }

  createPostForm = this.fb.group({
    id: [""],
    category: [""],
    title: [""],
    content: [""],
    username: [""],
    image: [""]

  })

  //subscribe createpost
  createPost() {
    let pdata = {
      id: this.createPostForm.value.id,
      category: this.createPostForm.value.category,
      title: this.createPostForm.value.title,
      content: this.createPostForm.value.content,
      username: this.createPostForm.value.username,
      image: this.createPostForm.value.image

    }
    this.api.createPost(pdata).subscribe((item:any) => {
      this.route.navigateByUrl('dashboard')
    })
  }

  filter(categoryItem:any){
this.filterPost=this.allPost.filter((post:any)=>post.category==categoryItem || categoryItem=="")

  }

  search(event: any) {
    this.searchText = event.target.value
    

  }

  loggedIn(){
    this.currentUser=localStorage.getItem('token')
    return localStorage.getItem('token')
  }

  onLogout(){
    window.confirm("Are you sure you want to logout")
    alert("Logged Out")
    localStorage.removeItem('token')
  }



}
