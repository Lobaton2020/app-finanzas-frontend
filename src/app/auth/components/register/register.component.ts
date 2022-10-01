import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { validatorPasswordError } from "src/app/shared/helpers/validationPassword";
import { AppState } from "src/app/shared/store/app.state";
import { setLoadingSpinner } from "src/app/shared/store/shared/shared.action";
import { registerUser } from "../../state/auth.action";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  fg!: FormGroup;
  constructor(
    private readonly store: Store<AppState>,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fg = this.fb.group({
      completeName: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        validatorPasswordError,
      ]),
    });
  }
  onSubmit() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(registerUser(this.fg.value));
  }
}
