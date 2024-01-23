import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavigationComponent } from './m-navigation.component';

describe('MNavigationComponent', () => {
  let component: MNavigationComponent;
  let fixture: ComponentFixture<MNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
