import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlimpiadasComponent } from './olimpiadas.component';

describe('OlimpiadasComponent', () => {
  let component: OlimpiadasComponent;
  let fixture: ComponentFixture<OlimpiadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlimpiadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OlimpiadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
