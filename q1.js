class ContaComum {
  constructor(numeroConta, senha) {
    this.numeroConta = numeroConta;
    this.senha = senha;
    this.situacao = 1;
    this.dataAbertura = new Date();
    this.dataEncerramento = null;
    this.saldo = 0;
  }

  deposito(valor) {
    if (valor > 0 && this.situacao === 1) {
      this.saldo += valor;
    } else {
      console.log("Depósito inválido ou conta inativa.");
    }
  }

  saque(valor, senha) {
    if (
      this.conferirSenha(senha) &&
      valor > 0 &&
      valor <= this.saldo &&
      this.situacao === 1
    ) {
      this.saldo -= valor;
    } else {
      console.log("Saque inválido ou senha incorreta.");
    }
  }

  conferirSenha(senha) {
    return this.senha === senha;
  }

  abrirConta() {
    if (this.situacao !== 1) {
      this.situacao = 1;
      this.dataAbertura = new Date();
      console.log("Conta reaberta.");
    }
  }

  encerrarConta() {
    if (this.situacao === 1 && this.saldo === 0) {
      this.situacao = 2;
      this.dataEncerramento = new Date();
      console.log("Conta encerrada.");
    } else {
      console.log("Conta não pode ser encerrada.");
    }
  }
}

// teste
const conta = new ContaComum("12345", "senha123");
conta.deposito(1000);
conta.saque(500, "senha123");
conta.encerrarConta();
conta.saque(500, "senha123");
conta.encerrarConta();
console.log(
  `Saldo: ${conta.saldo}, Situação: ${
    conta.situacao === 1 ? "Ativa" : "Encerrada"
  }`
);
