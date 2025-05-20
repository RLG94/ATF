import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesfaseComponent } from './desfase.component';

describe('DesfaseComponent', () => {
  let component: DesfaseComponent;
  let fixture: ComponentFixture<DesfaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesfaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesfaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
