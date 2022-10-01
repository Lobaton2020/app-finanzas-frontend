import { HttpErrorResponse } from "@angular/common/http";
import { handleLogError } from "src/app/shared/helpers/handlLogErrors";

export function getErrorRegisterMessage(e: HttpErrorResponse | any) {
  handleLogError(e);
  switch (e.status) {
    case 400:
      return typeof e?.error?.message == "string"
        ? e?.error?.message
        : "Error al registrarse, Intenta de nuevo";
    case 500:
      return "Error interno del servidor";
    default:
      return "Algo ha ido mal. Intenta de nuevo";
  }
}
