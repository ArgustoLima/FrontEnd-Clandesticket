import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarItemComponent } from './comprar-item.component';

describe('ComprarItemComponent', () => {
  let component: ComprarItemComponent;
  let fixture: ComponentFixture<ComprarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarItemComponent]
    });
    fixture = TestBed.createComponent(ComprarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
