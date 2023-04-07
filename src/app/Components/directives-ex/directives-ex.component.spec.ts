import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExComponent } from './directives-ex.component';

describe('DirectivesExComponent', () => {
  let component: DirectivesExComponent;
  let fixture: ComponentFixture<DirectivesExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
