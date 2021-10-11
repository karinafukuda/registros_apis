var botaoAdicionar = document.querySelector("#buscar-clientes");

botaoAdicionar.addEventListener("click", function (){

 var xhr = new XMLHttpRequest()

 xhr.open("GET", " https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes") //AJAX assincrono
 xhr.addEventListener("load", function(){
  var erroAjax = document.querySelector("#erro-ajax");
  if( xhr.status == 200){
   erroAjax.classList.add("invisivel");
   var resposta = xhr.responseText;
   var clientes = JSON.parse(resposta);
   console.log(clientes);
 
   clientes.forEach(function(cliente){
   adicionaClienteNaTabela(cliente);
   })  
  }else{
   console.log(xhr.status);
   console.log( xhr.responseText);
   
   erroAjax.classList.remove("invisivel");
  }

 });
 xhr.send();
});