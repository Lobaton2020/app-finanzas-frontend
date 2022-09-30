import { Logger } from "../services/logger.service";

export function handleLogError(error: any) {
  const loger = new Logger(handleLogError.name);
  if (error.error instanceof ErrorEvent) {
    loger.error("An error occurred:", error.error.message, error);
  } else {
    loger.error(
      `Backend returned code ${error.status}, ` + `body was: `,
      error.error
    );
  }
}
