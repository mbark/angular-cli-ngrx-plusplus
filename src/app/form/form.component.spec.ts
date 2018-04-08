import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PrettyJsonModule],
        declarations: [FormComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
