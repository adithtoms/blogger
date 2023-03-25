import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private route:Router, private us: UserService) { }

  user: any = {}

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }



  onsubmit() {
    if (this.registerForm.valid) {
      this.user = Object.assign(this.user, this.registerForm.value)
      this.us.addUser(this.user)
      this.registerForm.reset()
      this.route.navigateByUrl('login')
    }
  }


}
