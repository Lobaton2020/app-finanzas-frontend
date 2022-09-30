import { HttpErrorResponse } from "@angular/common/http";
import { handleLogError } from "src/app/shared/helpers/handlLogErrors";

export function getErrorMessage(e: HttpErrorResponse | any) {
  handleLogError(e);
  switch (e.status) {
    case 401:
      return "Error de authenticacion.";
    default:
      return "Algo ha ido mal. Intenta de nuevo";
  }
}
