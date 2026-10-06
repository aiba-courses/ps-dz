import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FromToDate } from './from-to-date';

describe('FromToDate', () => {
  let component: FromToDate;
  let fixture: ComponentFixture<FromToDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromToDate],
    }).compileComponents();

    fixture = TestBed.createComponent(FromToDate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
