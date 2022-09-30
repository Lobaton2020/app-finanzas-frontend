import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { validatorPasswordError } from "src/app/shared/helpers/validationPassword";
import { AppState } from "src/app/shared/store/app.state";
import { setLoadingSpinner } from "src/app/shared/store/shared/shared.action";
import { loginStart } from "../../state/auth.action";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  fg!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.fg = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        validatorPasswordError,
      ]),
    });
  }

  onSubmit() {
    const email = this.fg.value.email;
    const password = this.fg.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loginStart({ email, password }));
  }
}
