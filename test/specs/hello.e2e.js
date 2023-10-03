const {expect} = require('@wdio/globals')
const HelloPage = require('../pageobjects/hello.page')

// To run Webdriver test against an application this application must be run (`npm start`) !!!
describe('Test Hello world page', () => {

    it('Toggle available', async () => {

        await HelloPage.open();

        await HelloPage.toggle('hello');
        await expect(HelloPage.h1).toBeExisting()

        await HelloPage.button.click();
        await expect(HelloPage.h1).not.toBeExisting();
    })

    it('Toggle not available', async () => {

        await HelloPage.open();

        await HelloPage.toggle('asdgafafasfs');
        await expect(HelloPage.h1).not.toBeExisting()

        await HelloPage.button.click();
        await expect(HelloPage.h1).not.toBeExisting();
    })
})

