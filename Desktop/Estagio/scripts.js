// teste

async function idClientes() {
  try {                                                                            //**  "try{}"  serve para executar algo onde se espera um erro
    const response = await fetch('https://sistemalift1.com/lift_ps/api/Clientes'); // Linkando com a API
    const data = await response.json();

    const listaClientes = document.getElementById('id_Cliente'); // Criando uma variável "clientesList" e dando o valor do Id da Lista dos nomes
    data.forEach(Clientes => {                                      // Para cada cliente existente, executa essa ação (loop) 
      const Id = document.createElement('li');              // Declara uma variável e dá o valor da criação de uma lista em html
      Id.textContent = `${Clientes.id}`;                   // Adiciona texto à variável, no caso coloca o nome do cliente
      listaClientes.appendChild(Id);                        // Cria uma nova lista com as variáveis utilizadas
    });
  } catch (error) {                                               //**  "catch{}"  é a prevenção do erro
    console.error('Erro ao buscar lista de clientes:', error.message); // Prevenção de erro
  }
}



// PEDIDOSS EMITIDOSSS

async function Pedidos() {
  try {
    const response = await fetch('https://sistemalift1.com/lift_ps/api/Pedidos');       // por algum motivo do alem nao consigo renomear esse response sem dar erro
    const data = await response.json();

    const listaPedidos = document.getElementById('lista_Pedido');
    data.forEach(Pedidos => {
      const pedido = document.createElement('li');
      pedido.textContent = `${Pedidos.id}`;
      listaPedidos.appendChild(pedido);
    });
  } catch (error) {
    console.error('Erro ao buscar lista de Pedidos :', error.message);
  }
}



async function itensPedido(){
  const responsePedidos = await fetch('https://sistemalift1.com/lift_ps/api/Pedidos');
  const dataPedidos = await responsePedidos.json();

  const responseItens = await fetch('https://sistemalift1.com/lift_ps/api/ItensPedido');
  const dataItens = await responseItens.json();

  const responseProdutos = await fetch('https://sistemalift1.com/lift_ps/api/Produtos');
  const dataProdutos = await responseProdutos.json();

  const responseClientes = await fetch('https://sistemalift1.com/lift_ps/api/Clientes');
  const dataClientes = await responseClientes.json();

  const idProduto = document.getElementById('id_ProdutoPedido');
  const nomeProduto = document.getElementById('Produto');
  const quantidadeProduto = document.getElementById('Quantidade');
  const valorTotal = document.getElementById('Valor');

    dataItens.forEach(ItemPedido =>{
      if (idDescricaoPedido===ItemPedido.pedido){
        const produtoPedido = ItemPedido.produto;
        idProduto.textContent = `${ItemPedido.pedido}`;
        quantidadeProduto.textContent = `${ItemPedido.quantidade}`;
        const quant = `${ItemPedido.quantidade}`;
        dataProdutos.forEach(Produto =>{
          if (produtoPedido === Produto.id){
            nomeProduto.textContent = `${Produto.nome}`;
            const valor = quant * Produto.valor;
            valorTotal.textContent = `R$ ${valor}`;
          }
        })
      }
    })
}

async function nomePedidos() {
  try {
    const responsePedidos = await fetch('https://sistemalift1.com/lift_ps/api/Pedidos');
    const dataPedidos = await responsePedidos.json();

    const responseClientes = await fetch('https://sistemalift1.com/lift_ps/api/Clientes');
    const dataClientes = await responseClientes.json();

    const listaPedidos = document.getElementById('nome_Pedido');
    dataPedidos.forEach(Pedido => {              // Inicio do loop para comparar
      const IdPedido = Pedido.cliente;          // variavel com id do cliente responsavel pelo pedido
      dataClientes.forEach(Cliente => {
        const idCliente = Cliente.id;
        if (idCliente === IdPedido) {           // comparador para validar o mesmo nomee 
          const pedido = document.createElement('li');
          pedido.textContent = `${Cliente.nome}`;
          listaPedidos.appendChild(pedido);
        }
      });

    });
  } catch (error) {
    console.error('Erro ao buscar lista de Pedidos:', error.message);
  }
}

async function dataPedidos() {
  try {
    const response = await fetch('https://sistemalift1.com/lift_ps/api/Pedidos');
    const data = await response.json();

    const listaPedidos = document.getElementById('data_Pedido');
    data.forEach(Pedidos => {
      const pedido = document.createElement('li');
      pedido.textContent = `${Pedidos.data}`;
      listaPedidos.appendChild(pedido);
    });
  } catch (error) {
    console.error('Erro ao buscar lista de Pedidos', error.message);
  }
}

// PEDIDOSSSSSS

async function produtoPedidos() {
  try {
    const response = await fetch('https://sistemalift1.com/lift_ps/api/ItensPedido');
    const data = await response.json();

    const responseProdutos = await fetch('https://sistemalift1.com/lift_ps/api/Produtos');
    const dataProdutos = await responseProdutos.json();

    const listaProdutosPedidos = document.getElementById('produto_Pedido');
    data.forEach(ItemPedido => {
      const produtoPedido = ItemPedido.produto;
      dataProdutos.forEach(Produtos => {
        const idProduto = Produtos.id;
        if (produtoPedido === idProduto) {
          const produto = document.createElement('li');
          produto.textContent = `${Produtos.nome}`;
          listaProdutosPedidos.appendChild(produto);
        }
      });
    });
  } catch (error) {
    console.error('Erro ao buscar lista de produtos:', error.message);
  }
}

async function valorPedido() {
  try {
    const responsePedidos = await fetch('https://sistemalift1.com/lift_ps/api/Pedidos');
    const dataPedidos = await responsePedidos.json();

    const responseItens = await fetch('https://sistemalift1.com/lift_ps/api/ItensPedido');
    const dataItens = await responseItens.json();

    const responseProdutos = await fetch('https://sistemalift1.com/lift_ps/api/Produtos');
    const dataProdutos = await responseProdutos.json();

    const listaValor = document.getElementById('valor_Pedido');

    dataPedidos.forEach(Pedido => {
      const IdPedido = Pedido.id;
      let totalValorPedido = 0; 

      dataItens.forEach(ItemPedido => {                                     // 3 loops para comparar id de produto, cliente e pedidos para filtrar e achar o valor final
        const idItensPedido = ItemPedido.pedido;                            
        if (idItensPedido === IdPedido) {
          const idProdutoPedido = ItemPedido.produto;
          const quantidadePedido = ItemPedido.quantidade;

          dataProdutos.forEach(Produto => {
            const idProduto = Produto.id;
            const valorProduto = Produto.valor;
            if (idProduto === idProdutoPedido) {
              totalValorPedido = valorProduto * quantidadePedido;
            }
          });
        }
      });

      
      const valorFinal = document.createElement('li');
      valorFinal.textContent = `R$ ${totalValorPedido}`;
      listaValor.appendChild(valorFinal);
    });
  } catch (error) {
    console.error('Erro ao buscar lista de Pedidos', error.message);
  }
}

async function btnDescricao() {
  const responsePedidos = await fetch('https://sistemalift1.com/lift_ps/api/Pedidos');
  const dataPedidos = await responsePedidos.json();

  const responseItens = await fetch('https://sistemalift1.com/lift_ps/api/ItensPedido');
  const dataItens = await responseItens.json();

  const responseProdutos = await fetch('https://sistemalift1.com/lift_ps/api/Produtos');
  const dataProdutos = await responseProdutos.json();


  const listaBtn = document.getElementById('btn_Pedido');
  dataPedidos.forEach(Pedido =>{
    const idPagina = Pedido.id;
    
    const link = document.createElement('button');
    link.textContent = `${idPagina}`;
    link.addEventListener('click', () =>{
      idDescricaoPedido = idPagina;
      paginaDescricao();
      itensPedido();
    })
    listaBtn.appendChild(link);
  })
}

async function paginaDescricao(){                                        // queimou meu cerebro...
  const responsePedidos = await fetch('https://sistemalift1.com/lift_ps/api/Pedidos');
  const dataPedidos = await responsePedidos.json();

  const responseItens = await fetch('https://sistemalift1.com/lift_ps/api/ItensPedido');
  const dataItens = await responseItens.json();

  const responseProdutos = await fetch('https://sistemalift1.com/lift_ps/api/Produtos');
  const dataProdutos = await responseProdutos.json();

  const responseClientes = await fetch('https://sistemalift1.com/lift_ps/api/Clientes');
  const dataClientes = await responseClientes.json();

  const nomeCliente = document.getElementById('lista_Nome');
  const cpfCliente = document.getElementById('lista_Cpf');
  const emailCliente = document.getElementById('lista_Email');
    dataClientes.forEach(Cliente =>{
      const idCliente = Cliente.id;
      
      if (idDescricaoPedido === idCliente){
        nomeCliente.textContent = `${Cliente.nome}`;

        cpfCliente.textContent = `${Cliente.cpf}`;

        emailCliente.textContent = `${Cliente.email}`;
      }
    })

  const dataPedido = document.getElementById('lista_Data');
    dataPedidos.forEach(Pedido =>{
      if (idDescricaoPedido === Pedido.cliente){
        const data = document.createElement('li');
        dataPedido.textContent = `${Pedido.data}`;
      }
    })
}

// Precisa disso para carregar os dados assim que carregar a pagina 

btnDescricao()

Pedidos();
nomePedidos();
dataPedidos();
valorPedido();

produtoPedidos();