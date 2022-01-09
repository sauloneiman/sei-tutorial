import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaProcessoComponent } from './tela-processo.component';

describe('TelaProcessoComponent', () => {
  let component: TelaProcessoComponent;
  let fixture: ComponentFixture<TelaProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaProcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
