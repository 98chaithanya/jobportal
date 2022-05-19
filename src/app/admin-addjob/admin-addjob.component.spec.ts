import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddjobComponent } from './admin-addjob.component';

describe('AdminAddjobComponent', () => {
  let component: AdminAddjobComponent;
  let fixture: ComponentFixture<AdminAddjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
