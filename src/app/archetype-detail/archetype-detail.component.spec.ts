import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchetypeDetailComponent } from './archetype-detail.component';

describe('ArchetypeDetailComponent', () => {
  let component: ArchetypeDetailComponent;
  let fixture: ComponentFixture<ArchetypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchetypeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchetypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
