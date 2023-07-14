import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartJobComponent } from './start-job.component';

describe('StartJobComponent', () => {
  let component: StartJobComponent;
  let fixture: ComponentFixture<StartJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
