import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagNavComponent } from './tag-nav.component';

describe('TagNavComponent', () => {
  let component: TagNavComponent;
  let fixture: ComponentFixture<TagNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
