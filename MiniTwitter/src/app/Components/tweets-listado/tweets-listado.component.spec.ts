import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsListadoComponent } from './tweets-listado.component';

describe('TweetsListadoComponent', () => {
  let component: TweetsListadoComponent;
  let fixture: ComponentFixture<TweetsListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetsListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
