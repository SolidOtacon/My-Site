import { element, browser } from 'protractor';
import { AppPage } from './app.po';

describe('my-site App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have a title, and set to About', () => {
    expect(page.getTitleText()).toEqual('About');
  });

  // it('should have update title to Skills', () => {
  //   // expect(page.getLinkName(page.linkNameId.skills)).toBe('Skills');
  //   page.clickLink(page.linkId.skills);
  //   expect(page.getTitleText()).toEqual('not');
  // });
});
