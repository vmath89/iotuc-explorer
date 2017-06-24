import { IotUseCaseExplorerFrontendPage } from './app.po';

describe('iot-use-case-explorer-frontend App', () => {
  let page: IotUseCaseExplorerFrontendPage;

  beforeEach(() => {
    page = new IotUseCaseExplorerFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
