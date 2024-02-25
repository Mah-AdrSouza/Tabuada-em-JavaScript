
function calcular(id){
  var tabuada='';
   for (var i = 1; i <=10; i++) {
    console.log(id);
    tabuada += i+" x "+id+" = "+ id*i + "<br>";
}
resposta.innerHTML = tabuada;
}