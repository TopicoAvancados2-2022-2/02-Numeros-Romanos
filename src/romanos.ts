interface IRomanos {
    convert: (arg0: number) => string
}

class Romanos implements IRomanos {
    unidades = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    dezenas = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    centenas = ['', 'C']

    convert(numero: number): string {
        const numeroString = numero.toString().split('').reverse();
        
        const u = parseInt(numeroString[0]);
        const d = (numeroString.length >= 2) ? parseInt(numeroString[1]) : 0;
        const c = (numeroString.length >= 3) ? parseInt(numeroString[2]) : 0;

        return this.centenas[c] + this.dezenas[d] + this.unidades[u];
    }
}

export { IRomanos, Romanos }