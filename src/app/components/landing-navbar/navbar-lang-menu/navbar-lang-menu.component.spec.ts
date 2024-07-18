import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLangMenuComponent } from './navbar-lang-menu.component';

describe('NavbarLangMenuComponent', () => {
  let component: NavbarLangMenuComponent;
  let fixture: ComponentFixture<NavbarLangMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarLangMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarLangMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
