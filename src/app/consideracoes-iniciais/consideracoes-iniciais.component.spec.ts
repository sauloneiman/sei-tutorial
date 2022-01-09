import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsideracoesIniciaisComponent } from './consideracoes-iniciais.component';

describe('ConsideracoesIniciaisComponent', () => {
  let component: ConsideracoesIniciaisComponent;
  let fixture: ComponentFixture<ConsideracoesIniciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsideracoesIniciaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsideracoesIniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
