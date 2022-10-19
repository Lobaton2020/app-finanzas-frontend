import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovementType } from '@app/movements/models/moovementListReponse';
import { TYPE_EGRESS } from '@app/movements/services/movement-type.service';
import { loadMovementType, PayloadLoadMovementType, updateMovementType } from '@app/movements/state/movement.action';
import { getMovementType } from '@app/movements/state/movement.select';
import { AppState } from '@app/shared/store/app.state';
import { setLoadingSpinner } from '@app/shared/store/shared/shared.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-movement-edit',
  templateUrl: './movement-edit.component.html',
  styleUrls: ['./movement-edit.component.scss']
})
export class MovementEditComponent implements OnInit {
  fg!: FormGroup
  id!: number;
  movementType!: MovementType
  selectControl: string = ""

  typeEgress: string = TYPE_EGRESS;
  constructor(
    private readonly store: Store<AppState>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id") as string);
    this.selectControl = this.activatedRoute.snapshot.paramMap.get("movementType") as string;

    this.fg = this.fb.group({
      name: new FormControl(this.movementType?.name, [Validators.required, Validators.minLength(2)]),
      status: new FormControl(this.movementType?.status, [Validators.required])
    })

    this.store.dispatch(loadMovementType({ id: this.id, selectControl: this.selectControl }));
    this.store.select(getMovementType).subscribe((movementType: PayloadLoadMovementType) => {
      if (movementType.redirect) {
        return this.router.navigateByUrl("/movements#" + this.selectControl?.toLowerCase())
      }
      this.fg.get("name")?.setValue(movementType.name)
      this.fg.get("status")?.setValue(movementType.status)
      return this.movementType = movementType;
    })


  }

  onSubmit() {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(updateMovementType({ ...this.fg.value, selectControl: this.selectControl }))
  }
}
