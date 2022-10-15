import { HttpErrorResponse } from "@angular/common/http";
import { handleLogError } from "@app/shared/helpers/handlLogErrors";

export function getErrorMessage(e: HttpErrorResponse | any) {
  handleLogError(e);
  switch (e.status) {
    case 401:
      return "Error al acceder o crear el recurso";
    case 500:
      return "Error interno del servidor";
    default:
      return "Algo ha ido mal. Intenta de nuevo";
  }
}
