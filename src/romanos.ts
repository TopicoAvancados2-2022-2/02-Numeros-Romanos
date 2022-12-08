interface IRomanos {
    convert: (arg0: number) => string
}

class Romanos implements IRomanos {
    unidades = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    dezenas = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    centenas = ['', 'C', 'CC', 'CCC']

    limite_romanos(): number {
        return this.unidades.length + this.dezenas.length * 10 + this.centenas.length * 100;
    }

    convert(numero: number): string {
        if (numero < 0)
            throw new Error("número não pode ser negativo"); 

        if (numero > this.limite_romanos())
            throw new Error("número não disponível");

        const numeroString = numero.toString().split('').reverse();
        
        const u = parseInt(numeroString[0]);
        const d = (numeroString.length >= 2) ? parseInt(numeroString[1]) : 0;
        const c = (numeroString.length >= 3) ? parseInt(numeroString[2]) : 0;

        return this.centenas[c] + this.dezenas[d] + this.unidades[u];
    }
}

export { IRomanos, Romanos }