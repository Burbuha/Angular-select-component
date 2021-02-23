import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubcriberComponent } from './form-subscriber.component';

describe('FormSubcriberComponent', () => {
  let component: FormSubcriberComponent;
  let fixture: ComponentFixture<FormSubcriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSubcriberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubcriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
