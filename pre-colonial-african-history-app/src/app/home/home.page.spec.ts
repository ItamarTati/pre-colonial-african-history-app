import { TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';

describe('HomePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});