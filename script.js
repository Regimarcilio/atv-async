function buscarProduto(codigo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produtos = {
        101: { codigo: 101, nome: "Teclado", preco: 149.90 },
        102: { codigo: 102, nome: "Mouse", preco: 79.90 },
        103: { codigo: 103, nome: "Monitor", preco: 899.90 }
      };

      const produto = produtos[codigo];

      if (produto) {
        resolve(produto);
      } else {
        reject(new Error("Produto não encontrado."));
      }
    }, 1500);
  });
}

async function exibirProduto(codigo) {
  try {
    const produto = await buscarProduto(codigo);
    console.log("Produto encontrado:", produto);
  } catch (error) {
    console.error("Erro:", error.message);
  } finally {
    console.log('finalizado');   
  }
}

exibirProduto(102);
