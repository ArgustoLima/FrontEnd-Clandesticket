import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLoginComponent } from './cadastrar-login.component';

describe('CadastrarLoginComponent', () => {
  let component: CadastrarLoginComponent;
  let fixture: ComponentFixture<CadastrarLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarLoginComponent]
    });
    fixture = TestBed.createComponent(CadastrarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
