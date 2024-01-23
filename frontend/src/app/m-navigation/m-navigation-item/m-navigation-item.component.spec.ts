import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavigationItemComponent } from './m-navigation-item.component';

describe('MNavigationItemComponent', () => {
  let component: MNavigationItemComponent;
  let fixture: ComponentFixture<MNavigationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MNavigationItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
