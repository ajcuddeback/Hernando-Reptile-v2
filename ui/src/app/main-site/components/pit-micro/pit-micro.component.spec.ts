import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PITMicroComponent } from './pit-micro.component';

describe('PITMicroComponent', () => {
  let component: PITMicroComponent;
  let fixture: ComponentFixture<PITMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PITMicroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PITMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
