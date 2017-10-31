import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  linkNameId = {
    skills: 'Skills-name',
    contact: 'Contact-name',
    work: 'Work-name',
    education: 'Education-name',
    about: 'About-name',
  };

  linkId = {
    skills: 'Skills',
    contact: 'Contact',
    work: 'Work',
    education: 'Education',
    about: 'About',
  };

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('.text')).getText();
  }

  getLinkName(id) {
    return element(by.id(id)).getText();
  }

  clickLink(id) {
    const EC = ExpectedConditions;
    const link = element(by.css(`#${id}`));
    browser.wait(EC.visibilityOf(link), 5000);
    link.click();
  }
}
