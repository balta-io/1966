import { MinhaAppNgPage } from './app.po';

describe('minha-app-ng App', function() {
  let page: MinhaAppNgPage;

  beforeEach(() => {
    page = new MinhaAppNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
