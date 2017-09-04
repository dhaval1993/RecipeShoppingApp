import { RecipeShopAppPage } from './app.po';

describe('recipe-shop-app App', () => {
  let page: RecipeShopAppPage;

  beforeEach(() => {
    page = new RecipeShopAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
