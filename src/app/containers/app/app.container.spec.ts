import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppContainer } from './app.container';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppContainer],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppContainer);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'football-teams-workshop'`, () => {
    const fixture = TestBed.createComponent(AppContainer);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('football-teams-workshop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppContainer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'football-teams-workshop app is running!'
    );
  });
});
