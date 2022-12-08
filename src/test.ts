import { Romanos } from './romanos';

describe("Testando conversao de numeros romanos", () => {
    test("Espero que ao mandar o valor 1, seja retornado I", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(1);
        //assert
        expect(retorno).toEqual("I");
    })
    
    test("Espero que ao mandar o valor 4, seja retornado IV", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(4);
        //assert
        expect(retorno).toEqual("IV");
    })

    test("Espero que ao mandar o valor 17, seja retornado XVII", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(17);
        //assert
        expect(retorno).toEqual("XVII");
    })

    test("Espero que ao mandar o valor 45, seja retornado XLV", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(45);
        //assert
        expect(retorno).toEqual("XLV");
    })

    test("Espero que ao mandar o valor 51, seja retornado LI", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(51);
        //assert
        expect(retorno).toEqual("LI");
    })

    test("Espero que ao mandar o valor 198, seja retornado CXCVIII", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(198);
        //assert
        expect(retorno).toEqual("CXCVIII");
    })

    test("Espero que ao mandar o valor -1, seja retornado uma mensagem de Erro", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = () => { sut.convert(-1) }
        //assert
        expect(retorno).toThrow("número não pode ser negativo");
    })

    test("Espero que ao mandar o valor acima do limite, seja retornado uma mensagem de Erro", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = () => { sut.convert(sut.limite_romanos()+1) }
        //assert
        expect(retorno).toThrow("número não disponível");
    })

    test("Espero que ao mandar o valor 255, seja retornado CCLV", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(255);
        //assert
        expect(retorno).toEqual("CCLV");
    })

    test("Espero que ao mandar o valor 399, seja retornado CCCXCIX", () => {
        //arrange
        const sut = new Romanos();
        //action
        const retorno = sut.convert(399);
        //assert
        expect(retorno).toEqual("CCCXCIX");
    })
})