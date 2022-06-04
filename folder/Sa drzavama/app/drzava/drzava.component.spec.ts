import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzavaComponent } from './drzava.component';

describe('DrzavaComponent', () => {
  let component: DrzavaComponent;
  let fixture: ComponentFixture<DrzavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
