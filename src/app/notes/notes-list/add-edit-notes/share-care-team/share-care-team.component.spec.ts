import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCareTeamComponent } from './share-care-team.component';

describe('ShareCareTeamComponent', () => {
  let component: ShareCareTeamComponent;
  let fixture: ComponentFixture<ShareCareTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCareTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareCareTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
