const {$} = require('@wdio/globals')
const Page = require('./page');

class HelloPage extends Page {

    get input() {
        return $('input[type="text"]');
        //return $('#search');
    }

    get button() {
        return $('#toggle');
    }

    get h1() {
        return $('#hello');
    }

    async toggle(text) {
        await this.input.setValue(text);
        await this.button.click();
    }

    open() {
        return super.open('hello');
    }
}

module.exports = new HelloPage();
