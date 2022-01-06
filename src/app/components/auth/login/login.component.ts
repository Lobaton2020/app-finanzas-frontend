import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly httpClient: HttpClient
  ) { }
  error: string = "";
  email: string = "";
  password: string = "";
  ngOnInit(): void {
  }

  async onSubmit(e:Event) {
    e.preventDefault();
    const body = {
      email: this.email,
      password: this.password
    };
    try{
      const result = await this.httpClient.post('http://localhost:3001/api/v1/signin',body).toPromise()
      localStorage.setItem("user",JSON.stringify(result));
    }catch(err:any){
      this.error = err.error.message || "Opps Algo salio mal";
      console.log(err)
    }

  }
}
