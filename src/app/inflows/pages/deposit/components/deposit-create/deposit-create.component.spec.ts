import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCreateComponent } from './deposit-create.component';

describe('DepositCreateComponent', () => {
  let component: DepositCreateComponent;
  let fixture: ComponentFixture<DepositCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
