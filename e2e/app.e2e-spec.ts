import { element, browser } from 'protractor';
import { AppPage } from './app.po';

describe('my-site App', () => {
  let page: AppPage;
  browser.driver.manage().window().setSize(1920, 1080);

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have a title, and set to About', () => {
    expect(page.getTitleText()).toEqual('About');
  });

  it('should have update title to Skills', () => {
    page.clickLink(page.linkId.skills);
    expect(page.getTitleText()).toEqual('Skills');
  });

  it('should have update title to About', () => {
    page.clickLink(page.linkId.skills);
    expect(page.getTitleText()).toEqual('Skills');
    page.clickLink(page.linkId.about);
    expect(page.getTitleText()).toEqual('About');
  });

  it('should have update title to Contact', () => {
    page.clickLink(page.linkId.contact);
    expect(page.getTitleText()).toEqual('Contact');
  });

  it('should have update title to Work Experience', () => {
    page.clickLink(page.linkId.work);
    expect(page.getTitleText()).toEqual('Work Experience');
  });

  it('should have update title to Education', () => {
    page.clickLink(page.linkId.education);
    expect(page.getTitleText()).toEqual('Education');
  });
});
