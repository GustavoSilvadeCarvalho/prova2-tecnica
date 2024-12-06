class ContaPoupanca extends ContaComum {
  constructor(numeroConta, senha, dataAniversario) {
    super(numeroConta, senha);
    this.dataAniversario = new Date(dataAniversario);
  }

  aplicarJurosMensais() {
    const hoje = new Date();
    if (
      hoje.getDate() === this.dataAniversario.getDate() &&
      hoje.getMonth() === this.dataAniversario.getMonth()
    ) {
      this.saldo += this.saldo * 0.01;
    }
  }
}

// Teste
const contaPoupanca = new ContaPoupanca("67890", "senha789", "2024-12-05");
contaPoupanca.deposito(1000);
contaPoupanca.aplicarJurosMensais();
console.log(`Saldo após juros: ${contaPoupanca.saldo}`);
