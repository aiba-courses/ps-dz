import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioList } from './radio-list';

describe('RadioList', () => {
  let component: RadioList;
  let fixture: ComponentFixture<RadioList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioList],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
