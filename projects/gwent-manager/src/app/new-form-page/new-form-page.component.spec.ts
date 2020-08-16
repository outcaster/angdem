import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormPageComponent } from './new-form-page.component';

describe('NewFormPageComponent', () => {
  let component: NewFormPageComponent;
  let fixture: ComponentFixture<NewFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
