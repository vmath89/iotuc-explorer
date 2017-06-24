import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCasesDetailsComponent } from './use-cases-details.component';

describe('UseCasesDetailsComponent', () => {
  let component: UseCasesDetailsComponent;
  let fixture: ComponentFixture<UseCasesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCasesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
