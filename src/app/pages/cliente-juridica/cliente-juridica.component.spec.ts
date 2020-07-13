import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteJuridicaComponent } from './cliente-juridica.component';

describe('ClienteJuridicaComponent', () => {
  let component: ClienteJuridicaComponent;
  let fixture: ComponentFixture<ClienteJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
