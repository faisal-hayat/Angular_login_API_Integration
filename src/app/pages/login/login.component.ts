import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLogin } from '../../interfaces/user-login';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: UserLogin = {EmailId: '', password: ''};

  constructor(private httpClient: HttpClient, private router: Router){
    this.httpClient = httpClient;
    this.router = router;
  }
  //#region: login api method
  onLogin(): void{
    headers: new HttpHeaders()
    debugger;
    this.httpClient.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj)
      .subscribe((res: any) => {
        if(res.result){
          alert("logged in successfully")
          this.router.navigateByUrl('/dashboard');
        }else{
          alert(res.message)
        }
      })
  }
  //#endregion
}
