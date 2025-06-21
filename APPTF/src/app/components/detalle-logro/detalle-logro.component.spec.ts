import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLogroComponent } from './detalle-logro.component';

describe('DetalleLogroComponent', () => {
  let component: DetalleLogroComponent;
  let fixture: ComponentFixture<DetalleLogroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleLogroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleLogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
