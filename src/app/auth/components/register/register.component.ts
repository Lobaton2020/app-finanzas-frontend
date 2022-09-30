import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { validatorPasswordError } from "src/app/shared/helpers/validationPassword";
import { AppState } from "src/app/shared/store/app.state";
import { registerUser } from "../../state/auth.action";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  fg!: FormGroup;
  constructor(
    private readonly store: Store<AppState>,
    private readonly fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        validatorPasswordError,
      ]),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.store.dispatch(registerUser(this.fg.value));
  }
}
