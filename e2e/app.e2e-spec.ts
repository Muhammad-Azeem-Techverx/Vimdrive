import { VimdriveTemplatePage } from './app.po';

describe('Vimdrive App', function() {
  let page: VimdriveTemplatePage;

  beforeEach(() => {
    page = new VimdriveTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
