import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit{
postId:any
post:any

constructor(private api:ApiService,private ar:ActivatedRoute,private route:Router){}

ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
    this.postId=data['id']

    this.api.getPostById(this.postId).subscribe((data:any)=>{
      this.post=data
      console.log(this.post);
      

    })
    
  })
  
}

deletePost(){
  this.api.deletePost(this.postId).subscribe((data:any)=>{
    window.confirm("are you sure to delete")
  })
  this.route.navigateByUrl('dashboard')
}

editPost(uPost:any){
this.api.updatePost(this.postId,this.post).subscribe((item:any)=>{
  
})
}


}
