import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPagamentoComponent } from './cadastrar-pagamento.component';

describe('CadastrarPagamentoComponent', () => {
  let component: CadastrarPagamentoComponent;
  let fixture: ComponentFixture<CadastrarPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPagamentoComponent]
    });
    fixture = TestBed.createComponent(CadastrarPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
