import { Ng2LibraryClientDemoPage } from './app.po';

describe('ng2-library-client-demo App', () => {
  let page: Ng2LibraryClientDemoPage;

  beforeEach(() => {
    page = new Ng2LibraryClientDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
