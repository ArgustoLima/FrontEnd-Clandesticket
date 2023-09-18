import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarItemComponent } from './editar-item.component';

describe('EditarItemComponent', () => {
  let component: EditarItemComponent;
  let fixture: ComponentFixture<EditarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarItemComponent]
    });
    fixture = TestBed.createComponent(EditarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
