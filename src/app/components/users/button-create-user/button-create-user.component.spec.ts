import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateUserComponent } from './button-create-user.component';

describe('ButtonCreateUserComponent', () => {
  let component: ButtonCreateUserComponent;
  let fixture: ComponentFixture<ButtonCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCreateUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
