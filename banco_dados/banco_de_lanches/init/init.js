const nomes = [
  "GUSTAVO ALBERTO BIGOVAI",
  "ELIZEU ALCIDES PACHECO SOBRINHO",
  "PEDRO ALVES MACHADO",
  "LARISSA APARECIDA DA CRUZ",
  "ESTEVAO BUDNI DE SOUZA",
  "THIAGO CARTA ORCIUCH",
  "ESTHER CHUINCA",
  "RAMON COLTRO GOULART",
  "LORENZO DELLA PASQUA TONIAL",
  "LUKAS EDUARDO BACILI RODRIGUES",
  "VITORIA ELOIZE RIBEIRO MUNHOZ",
  "ALEX FANIS LIMA",
  "VITOR GABRIEL MACHADO MARTINS",
  "OTAVIO GALVAO MACHADO",
  "PEDRO HENRICK BORGES TRIZOTE",
  "GYORGE HENRIQUE KORC MONASSA MOREIRA",
  "THIAGO HENRIQUE SANTANA DE SOUSA",
  "CAUE KLAK ANDRETTA",
  "DANYLO LACOY CONTI DA SILVA",
  "PEDRO MACHADO DE MELO",
  "LYVIA MARIA KUCHTA DE SOUZA",
  "RHUAN MARTINS ALVES",
  "FELIPE MATHEUS LINCK LECHETA",
  "GIOVANNA MENDES RICHTER",
  "GABRIEL OLIVEIRA MULLER GONCALVES DE SOUZA",
  "MATHEUS REIS ALVES DE SOUZA",
  "SAMUEL RIBEIRO AGUIAR",
  "ENZO RIBEIRO",
  "MARTHA RICHTER DE DEUS",
  "AMANDA SANTOS SCHRAMM",
  "KAYKE SEIXAS PEREIRA",
  "ARTUR TSCHOEKE TABORDA",
  "JOAO VICTOR ROSA DOS SANTOS",
  "BRUNA VITORIA MIRANDA BARBOSA"
];

const lanches = [
  "Pizza",
  "Hamburguer",
  "Coxinha",
  "Pastel",
  "Pao de queijo",
  "Esfiha",
  "Empada",
  "Hot dog",
  "Tapioca",
  "Sanduiche natural",
  "Misto quente",
  "Pao de batata",
  "Enroladinho de salsicha",
  "Kibe",
  "Pao de milho",
  "Crepe",
  "Pao de alho",
  "Pipoca",
  "Bolo de cenoura",
  "Brigadeiro",
  "Pao com queijo",
  "Croissant",
  "Donut",
  "Waffle",
  "Panqueca",
  "Acaraje",
  "Bauru",
  "Lasanha",
  "Batata frita",
  "Torta salgada",
  "Churros",
  "Pao de queijo recheado",
  "Wrap de frango",
  "Pao de batata doce"
];

if (nomes.length !== lanches.length) {
  throw new Error("A quantidade de alunos e lanches deve ser igual.");
}

db = db.getSiblingDB("banco_da_turma");

const alunos = nomes.map((nome, i) => ({
  nome,
  lanche_favorito: lanches[i]
}));

// Em uma primeira inicializacao, insere todos os alunos.
// Se ja houver registros, atualiza os alunos existentes e
// adiciona os que ainda nao estiverem cadastrados.
alunos.forEach(aluno => {
  db.alunos.updateOne(
    { nome: aluno.nome },
    { $set: { lanche_favorito: aluno.lanche_favorito } },
    { upsert: true }
  );
});

db.alunos.createIndex(
  { lanche_favorito: 1 },
  {
    unique: true,
    name: "lanche_favorito_unico"
  }
);

print("Cadastro concluido!");
print("Total de alunos: " + db.alunos.countDocuments());
print("Lista de alunos e lanches:");
db.alunos.find({}, { _id: 0 }).sort({ nome: 1 }).forEach(printjson);

