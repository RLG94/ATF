import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiracionComponent } from './inspiracion.component';

describe('InspiracionComponent', () => {
  let component: InspiracionComponent;
  let fixture: ComponentFixture<InspiracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspiracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspiracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
