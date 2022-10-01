import { HttpErrorResponse } from "@angular/common/http";
import { handleLogError } from "src/app/shared/helpers/handlLogErrors";

export function getErrorLoginMessage(e: HttpErrorResponse | any) {
  handleLogError(e);
  switch (e.status) {
    case 401:
      return "Error de authenticacion.";
    case 500:
      return "Error interno del servidor";
    default:
      return "Algo ha ido mal. Intenta de nuevo";
  }
}
