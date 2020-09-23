import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;
  // private route: Router,
  constructor( private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  openUser(){
    this.authService.login(this.credentialsForm.value).subscribe();
    // this.route.navigateByUrl('/home/feed')
  }
  openSignUp(){
    this.authService.register(this.credentialsForm.value).subscribe(res => {
      // Call Login to automatically login the new user
      this.authService.login(this.credentialsForm.value).subscribe();
    });
    // this.route.navigateByUrl('/signup')
    
  }

}
