import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruemessageComponent } from './truemessage.component';

describe('TruemessageComponent', () => {
  let component: TruemessageComponent;
  let fixture: ComponentFixture<TruemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruemessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
