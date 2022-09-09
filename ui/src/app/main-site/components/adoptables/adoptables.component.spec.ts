import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptablesComponent } from './adoptables.component';

describe('AdoptablesComponent', () => {
  let component: AdoptablesComponent;
  let fixture: ComponentFixture<AdoptablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
