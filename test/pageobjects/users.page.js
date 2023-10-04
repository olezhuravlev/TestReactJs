const {$} = require('@wdio/globals')
const Page = require('./page');

class UsersPage extends Page {

    get loadingTitle() {
        return $('#users-loading');
    }

    get usersList() {
        return $('#users-list');
    }

    get usersItems() {
        return $('#users-list').react$$('User'); // Name of React component.
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('Can\'t load users!');
        }
    }

    async deleteFirstUser() {
        try {

            const usersCountBefore = await this.usersItems.length;
            if (!usersCountBefore) {
                throw new Error('Users not found!');

            }

            await this.usersItems[0].$('#user-delete').click();

            //await browser.debug();
            const usersCountAfter = await this.usersItems.length;
            if (usersCountBefore - usersCountAfter !== 1) {
                throw new Error(`Deletion error! Before: ${usersCountBefore}, after: ${usersCountAfter}`);
            }

        } catch (e) {
            throw new Error('Cannot delete user: ' + e.message)
        }
    }

    open() {
        return super.open('users-test');
    }
}

module.exports = new UsersPage();
