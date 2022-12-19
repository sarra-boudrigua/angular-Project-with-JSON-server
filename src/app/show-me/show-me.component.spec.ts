import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeComponent } from './show-me.component';

describe('ShowMeComponent', () => {
  let component: ShowMeComponent;
  let fixture: ComponentFixture<ShowMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
