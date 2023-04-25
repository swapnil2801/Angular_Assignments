import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongChoicComponent } from './wrong-choic.component';

describe('WrongChoicComponent', () => {
  let component: WrongChoicComponent;
  let fixture: ComponentFixture<WrongChoicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongChoicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongChoicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
