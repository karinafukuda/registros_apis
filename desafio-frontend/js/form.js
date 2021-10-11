var botaoAdicionar = document.querySelector("#adicionar-cliente");

botaoAdicionar.addEventListener( "click", function (event){
 event.preventDefault();
 var form = document.querySelector("#form-adiciona");
 //Extraindo informações do cliente do form
 var cliente = obtemClienteDoForm(form);
 
 //Valida se o cliente é true or false
 var erros = validaCliente(cliente);

 if(erros.length > 0 ){
  exibeMensagensDeErro(erros);
   return;
 }
 
 adicionaClienteNaTabela(cliente);
 
 //Limpar os campos após adição na tabela
 form.reset();

 var mensagensErro = document.querySelector("#mensagens-erro");
 mensagensErro.innerHTML ="";
 
});

function obtemClienteDoForm(form){
 var cliente = {
   Id: form.id.value,
   codigo: form.codigo.value,
   data:form.data.value,
   nome:form.nome.value,
   nome_fantasia: form.nome_fantasia.value,
   cnpj: form.cnpj.value,
   cep: form.cep.value
 }  
 return cliente;
}

function adicionaClienteNaTabela(cliente){
  //Cria o campo na tabela
  var clienteTr = montaTr(cliente);
  //Adiciona cliente na tabela
 var tabela = document.querySelector("#tabela-clientes");
 tabela.appendChild(clienteTr);
}

function montaTr (cliente){
 var clienteTr = document.createElement("tr");
 clienteTr.classList.add("cliente");

 clienteTr.appendChild(montaTd(cliente.Id, "info-id"));
 clienteTr.appendChild(montaTd(cliente.codigo, "info-codigo"));
 clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
 clienteTr.appendChild(montaTd(cliente.nome_fantasia, "info-nome_fantasia"));
 clienteTr.appendChild(montaTd(cliente.cnpj, "info-cnpj"));
 clienteTr.appendChild(montaTd(cliente.cep, "info-cep"));
 clienteTr.appendChild(montaTd(cliente.endereco, "info-endereco"));
 clienteTr.appendChild(montaTd(cliente.bairro, "info-bairro"));
 clienteTr.appendChild(montaTd(cliente.localidade, "info-localidade"));
 clienteTr.appendChild(montaTd(cliente.logradouro, "info-logradouro"));
 clienteTr.appendChild(montaTd(cliente.uf, "info-uf"));
 clienteTr.appendChild(montaTd(cliente.data, "info-data"));

 return clienteTr;
}

function montaTd(dado, classe){
 var td = document.createElement("td");
 td.textContent = dado;
 td.classList.add(classe);

 return td;
}

function exibeMensagensDeErro(erros){
 var ul = document.querySelector("#mensagens-erro");
 //apagar após exibir msgs de erro
 ul.innerHTML ="";
 erros.forEach(function(erro){
   var li = document.createElement("li");
   li.textContent = erro;
   ul.appendChild(li);
 });
}

function validaCliente(cliente){
 //lista de erros - array
 var erros =[];

  if (cliente.Id.length == 0){
   erros.push("-O campo id não pode estar em branco. -")
  }
  if (cliente.codigo.length == 0){
   erros.push("O campo código não pode estar em branco. -")
  }
  if (cliente.nome.length == 0){
   erros.push("O campo nome não pode estar em branco. -")
  }
 if (cliente.nome_fantasia.length == 0){
  erros.push("O campo nome fantasia não pode estar em branco. -")
 }
 if (cliente.cnpj.length == 0){
  erros.push("O campo cnpj não pode estar em branco. ")
 }

 return erros;
} 



