import {Selector} from 'testcafe';

const resultPrint = Selector('span').withAttribute('id','cwos');
const ansPrint = Selector('span').withAttribute('jsname','ubtiRe');

const button = number => {
    return Selector('div').withExactText(number);
};

fixture `Google Calculator`
.page `https://www.google.com/search?q=calculator`
.meta('Fernandos calculator test');

test('Addition of two numbers should be successful', async t => {
    await t
        .click(button('1'))
        .click(button('+'))
        .click(button('2'))
        .click(button('='))
        .expect(resultPrint.innerText).eql('3')
});

test('Number pressed should be displayed', async t => {
    await t
        .click(button('6'))
        .expect(resultPrint.innerText).eql('6')
});

test('Button CE should delete last digit entered', async t =>{
    await t
        .click(button('6'))
        .click(button('CE'))
        .expect(resultPrint.innerText).eql('0')
});

test('Decimal point should be displayed', async t =>{
    await t
        .click(button('6'))
        .click(button('.'))
        .click(button('1'))
        .expect(resultPrint.innerText).eql('6.1')
});

test('Substraction of two numbers should be successful', async t => {
    await t
        .click(button('2'))
        .click(button('−'))
        .click(button('1'))
        .click(button('='))
        .expect(resultPrint.innerText).eql('1')
});

test('Multiplication of two numbers should be successful', async t => {
    await t
        .click(button('3'))
        .click(button('×'))
        .click(button('2'))
        .click(button('='))
        .expect(resultPrint.innerText).eql('6')
});

test('Division of two numbers should be successful', async t => {
    await t
        .click(button('1'))
        .click(button('2'))
        .click(button('÷'))
        .click(button('4'))
        .click(button('='))
        .expect(resultPrint.innerText).eql('3')        
});

test('Division by zero should return Infinity', async t => {
    await t
        .click(button('4'))
        .click(button('÷'))
        .click(button('0'))
        .click(button('='))
        .expect(resultPrint.innerText).eql('Infinity')
});

test('Button CE should change to AC', async t => {
    await t
        .click(button('1'))
        .click(button('2'))
        .click(button('÷'))
        .click(button('4'))
        .click(button('='))
        .expect(button('AC').innerText).eql('AC')
});

test('Button AC should reset display to 0', async t => {
    await t
        .click(button('1'))
        .click(button('2'))
        .click(button('÷'))
        .click(button('4'))
        .click(button('='))
        .click(button('AC'))
        .expect(resultPrint.innerText).eql('0')
});

test('Last operation should be displayed on top of main display', async t => {
    await t
        .click(button('1'))
        .click(button('2'))
        .click(button('÷'))
        .click(button('4'))
        .click(button('='))
        .expect(ansPrint.innerText).eql('12 ÷ 4 =')
});

test('Symbol should be replaced if pressed after other symbol', async t => {
    await t
        .click(button('4'))
        .click(button('+'))
        .click(button('−'))
        .expect(resultPrint.innerText).eql('4 -')
});