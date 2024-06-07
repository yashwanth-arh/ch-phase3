import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStyleComponent } from './life-style.component';

describe('LifeStyleComponent', () => {
  let component: LifeStyleComponent;
  let fixture: ComponentFixture<LifeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
