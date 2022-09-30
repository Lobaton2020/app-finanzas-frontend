import { AbstractControl } from "@angular/forms";
function validationPassword(value: string) {
  if (typeof value != "string") return false;
  if (value.length < 10) return false; // more thank 10 characters
  if (!/[!@#?\]]|kr/i.test(value)) return false; // At least one of the special characteres
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value)) return false; // One lowercase at least and one uppercase at least
  return true;
}

export const validatorPasswordError = (control: AbstractControl) => {
  if (!validationPassword(control.value)) {
    return {
      password:
        "Debe contener mas de 10 caracteres, al menos un caracter especial y una letra en minuscula como tambien en mayuscula.",
    };
  }
  return null;
};
