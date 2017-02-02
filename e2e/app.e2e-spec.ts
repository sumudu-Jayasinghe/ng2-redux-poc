import { Ng2ReduxPocPage } from './app.po';

describe('ng2-redux-poc App', function() {
  let page: Ng2ReduxPocPage;

  beforeEach(() => {
    page = new Ng2ReduxPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
