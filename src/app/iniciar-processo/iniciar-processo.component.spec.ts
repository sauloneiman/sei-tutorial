import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarProcessoComponent } from './iniciar-processo.component';

describe('IniciarProcessoComponent', () => {
  let component: IniciarProcessoComponent;
  let fixture: ComponentFixture<IniciarProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarProcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
