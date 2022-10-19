import { FormGroup } from "@angular/forms";

export function resetFormGroupValidators(fg:FormGroup){
    fg.reset();
    for (let control in fg.controls) {
      fg.controls[control].setErrors(null);
    }

}