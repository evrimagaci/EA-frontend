import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignFormComponent } from './sign-form.component';

describe('SignFormComponent', () => {
  let component: SignFormComponent;
  let fixture: ComponentFixture<SignFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
