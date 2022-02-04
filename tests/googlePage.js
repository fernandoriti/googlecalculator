import Page from "../page/calculatorPage.js";

fixture `Google Calculator`
.page `https://www.google.com/search?q=calculator`
.meta('Fernandos calculator test');

test('Addition of two numbers should be successful', async t => {
    await t
        .click(Page.button('1'))
        .click(Page.button('+'))
        .click(Page.button('2'))
        .click(Page.button('='))
        .expect(Page.resultPrint.innerText).eql('3')
});

test('Number pressed should be displayed', async t => {
    await t
        .click(Page.button('6'))
        .expect(Page.resultPrint.innerText).eql('6')
});

test('Button CE should delete last digit entered', async t =>{
    await t
        .click(Page.button('6'))
        .click(Page.button('CE'))
        .expect(Page.resultPrint.innerText).eql('0')
});

test('Decimal point should be displayed', async t =>{
    await t
        .click(Page.button('6'))
        .click(Page.button('.'))
        .click(Page.button('1'))
        .expect(Page.resultPrint.innerText).eql('6.1')
});

test('Substraction of two numbers should be successful', async t => {
    await t
        .click(Page.button('2'))
        .click(Page.button('−'))
        .click(Page.button('1'))
        .click(Page.button('='))
        .expect(Page.resultPrint.innerText).eql('1')
});

test('Multiplication of two numbers should be successful', async t => {
    await t
        .click(Page.button('3'))
        .click(Page.button('×'))
        .click(Page.button('2'))
        .click(Page.button('='))
        .expect(Page.resultPrint.innerText).eql('6')
});

test('Division of two numbers should be successful', async t => {
    await t
        .click(Page.button('1'))
        .click(Page.button('2'))
        .click(Page.button('÷'))
        .click(Page.button('4'))
        .click(Page.button('='))
        .expect(Page.resultPrint.innerText).eql('3')        
});

test('Division by zero should return Infinity', async t => {
    await t
        .click(Page.button('4'))
        .click(Page.button('÷'))
        .click(Page.button('0'))
        .click(Page.button('='))
        .expect(Page.resultPrint.innerText).eql('Infinity')
});

test('Button CE should change to AC', async t => {
    await t
        .click(Page.button('1'))
        .click(Page.button('2'))
        .click(Page.button('÷'))
        .click(Page.button('4'))
        .click(Page.button('='))
        .expect(Page.button('AC').innerText).eql('AC')
});

test('Button AC should reset display to 0', async t => {
    await t
        .click(Page.button('1'))
        .click(Page.button('2'))
        .click(Page.button('÷'))
        .click(Page.button('4'))
        .click(Page.button('='))
        .click(Page.button('AC'))
        .expect(Page.resultPrint.innerText).eql('0')
});

test('Last operation should be displayed on top of main display', async t => {
    await t
        .click(Page.button('1'))
        .click(Page.button('2'))
        .click(Page.button('÷'))
        .click(Page.button('4'))
        .click(Page.button('='))
        .expect(Page.ansPrint.innerText).eql('12 ÷ 4 =')
});

test('Symbol should be replaced if pressed after other symbol', async t => {
    await t
        .click(Page.button('4'))
        .click(Page.button('+'))
        .click(Page.button('−'))
        .expect(Page.resultPrint.innerText).eql('4 -')
});