import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchRowComponent } from './launch-row.component';

describe('LaunchRowComponent', () => {
  let component: LaunchRowComponent;
  let fixture: ComponentFixture<LaunchRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
