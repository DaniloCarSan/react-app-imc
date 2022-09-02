export type level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}
export const lavels: level[] = [
    { title: "Magreza", color: '#96a3ab', icon: "down", imc: [0, 18.5] },
    { title: "Normal", color: '#0ead69', icon: "up", imc: [18.5, 24.9] },
    { title: "Sobrepeso", color: '#e2b039', icon: "down", imc: [25, 29.9] },
    { title: "Obesidade", color: '#c3423f', icon: "down", imc: [30, 39.9] },
    { title: "Obesidade Grave", color: '#e74c3c', icon: "down", imc: [40, 100] },
];

export const caculateIMC = (peso: number, altura: number) => (peso / Math.pow(altura, 2));

export const getIMCLevel = (imc: number) => {
    const level = lavels.find((level) => imc >= level.imc[0] && imc <= level.imc[1]);
    return level;
}

export const caculateIMCLevel = (peso: number, altura: number) => {
    const imc = caculateIMC(peso, altura);
    var level = getIMCLevel(imc);
    if (level) {
        level.yourImc = imc;
        return level;
    }
    return null;
}
