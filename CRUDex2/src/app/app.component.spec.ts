import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugEl: DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance;

    debugEl = fixture.debugElement.query(By.css('h1'));
    htmlEl = debugEl.nativeElement;
  });

  it('should display original title',
    async(() => {
      fixture.detectChanges();
      expect(htmlEl.textContent).toContain(comp.title);
    })
  );

  it('should display a different test title',
    async(() => {
      comp.title = 'Test Title';
      fixture.detectChanges();
      expect(htmlEl.textContent).toContain('Test Title');
    })
  );
});
