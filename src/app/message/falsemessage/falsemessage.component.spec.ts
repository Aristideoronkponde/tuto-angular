import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsemessageComponent } from './falsemessage.component';

describe('FalsemessageComponent', () => {
  let component: FalsemessageComponent;
  let fixture: ComponentFixture<FalsemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FalsemessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FalsemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
