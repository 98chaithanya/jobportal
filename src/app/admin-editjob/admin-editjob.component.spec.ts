import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditjobComponent } from './admin-editjob.component';

describe('AdminEditjobComponent', () => {
  let component: AdminEditjobComponent;
  let fixture: ComponentFixture<AdminEditjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
