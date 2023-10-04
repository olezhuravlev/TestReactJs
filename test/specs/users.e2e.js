const UsersPage = require('../pageobjects/users.page')

// To run Webdriver test against an application this application must be run (`npm start`) !!!
describe('Test Users page', () => {

    it('Data loading', async () => {
        await UsersPage.loadData();
    })

    it('Delete first user from the list', async () => {
        await UsersPage.loadData();
        await UsersPage.deleteFirstUser();
    })
})

