let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;
let Saldo: number;

if(campoSaldo){
    campoSaldo.innerHTML = "0";
    Saldo = 0;
}

function somarAoSaldo(soma: number) {
    Saldo += soma;
    campoSaldo.innerHTML = Saldo.toString();
    soma = 0;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
