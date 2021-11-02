import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsComponentComponent } from './claims-component.component';

describe('ClaimsComponentComponent', () => {
  let component: ClaimsComponentComponent;
  let fixture: ComponentFixture<ClaimsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
