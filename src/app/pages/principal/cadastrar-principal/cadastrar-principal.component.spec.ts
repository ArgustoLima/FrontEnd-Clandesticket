import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPrincipalComponent } from './cadastrar-principal.component';

describe('CadastrarPrincipalComponent', () => {
  let component: CadastrarPrincipalComponent;
  let fixture: ComponentFixture<CadastrarPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPrincipalComponent]
    });
    fixture = TestBed.createComponent(CadastrarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
