import { IpimsDirectoryPage } from './app.po';

describe('ipims-directory App', () => {
  let page: IpimsDirectoryPage;

  beforeEach(() => {
    page = new IpimsDirectoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
