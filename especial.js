class ContaEspecial extends ContaComum {
  constructor(numeroConta, senha, limite) {
    super(numeroConta, senha);
    this.limite = limite;
  }

  saque(valor, senha) {
    if (
      this.conferirSenha(senha) &&
      valor > 0 &&
      valor <= this.saldo + this.limite &&
      this.situacao === 1
    ) {
      this.saldo -= valor;
    } else {
      console.log("Saque inválido.");
    }
  }
}

// Teste
const contaEspecial = new ContaEspecial("54321", "senha456", 500);
contaEspecial.deposito(1000);
contaEspecial.saque(1200, "senha456"); // Saque usando parte do limite
console.log(`Saldo: ${contaEspecial.saldo}, Limite: ${contaEspecial.limite}`);
