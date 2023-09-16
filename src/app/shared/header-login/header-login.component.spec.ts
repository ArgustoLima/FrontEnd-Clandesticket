import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoginComponent } from './header-login.component';

describe('HeaderLoginComponent', () => {
  let component: HeaderLoginComponent;
  let fixture: ComponentFixture<HeaderLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLoginComponent]
    });
    fixture = TestBed.createComponent(HeaderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
