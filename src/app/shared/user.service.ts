import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user: any){
    let users=[]
    if(localStorage.getItem("users")){
      users=JSON.parse(localStorage.getItem('users') || "")
      users=[user,...users]
    } else{
      users=[user]
    }
    localStorage.setItem('users',JSON.stringify(users))
  }

  checkUser(user:any){
    let uarray=[]
    if(localStorage.getItem('users')){
      uarray=JSON.parse(localStorage.getItem('users')||"")
    }
    return uarray.find((item:any)=>item.uname===user.uname && item.password===user.password)
  }
}
