import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { validatorPasswordError } from "src/app/common/helpers/validationPassword";
import { AppState } from "src/app/shared/store/app.state";
import { loginStart } from "../../state/auth.action";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  fb!: FormGroup;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.fb = new FormGroup({
      email: new FormControl("andres@gmail.com", [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl("Avion021028@", [
        Validators.required,
        validatorPasswordError,
      ]),
    });
  }

  onSubmit() {
    const email = this.fb.value.email;
    const password = this.fb.value.password;
    this.store.dispatch(loginStart({ email, password }));
  }
}
