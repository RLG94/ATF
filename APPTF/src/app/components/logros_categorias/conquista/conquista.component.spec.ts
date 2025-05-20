import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConquistaComponent } from './conquista.component';

describe('ConquistaComponent', () => {
  let component: ConquistaComponent;
  let fixture: ComponentFixture<ConquistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConquistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConquistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
