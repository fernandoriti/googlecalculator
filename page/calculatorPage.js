import { Selector } from 'testcafe';

class Page{
    constructor(){
        this.resultPrint = Selector('#cwos');
        this.ansPrint = Selector('span').withAttribute('jsname','ubtiRe');
        this.button = number => {
            return Selector('div').withExactText(number);
        }
    }
}

export default new Page();