import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/store/app.state";
import { HomeService } from "../services/home.service";
import { loadedReportResume, loadReportResume } from "./home.action";
import { exhaustMap, take, map } from "rxjs";
import { ReportResume } from "../models/report-resume.interface";

@Injectable()
export class ReportsEffect {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private homeService: HomeService
  ) {}

  loadResume$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadReportResume),
      exhaustMap(() => {
        return this.homeService.getResume().pipe(
          take<any>(1),
          map((data: ReportResume) => loadedReportResume({ payload: data }))
        );
      })
    );
  });
}
