import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetComponent } from './aset.component';

describe('CustomerComponent', () => {
  let component: AssetComponent;
  let fixture: ComponentFixture<AssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
