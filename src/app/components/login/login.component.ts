import { Component,OnInit } from '@angular/core';
import { FormBuilder, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 constructor(private router: Router,private us:UserService){}


ngOnInit(): void {
  
}

onLogin(loginForm:NgForm){
  const token=this.us.checkUser(loginForm.value)
  if(token){
    localStorage.setItem('token',token.uname)
    alert("login success")
    this.router.navigateByUrl('')
    
  } else{
    alert("invalid user")
  }

}




}


