import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFullComponent } from './article-full.component';

describe('ArticleFullComponent', () => {
  let component: ArticleFullComponent;
  let fixture: ComponentFixture<ArticleFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
