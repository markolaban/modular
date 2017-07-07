import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyComponent } from './assembly.component';

describe('AssemblyComponent', () => {
  let component: AssemblyComponent;
  let fixture: ComponentFixture<AssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
