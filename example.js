
var opcion = prompt("GES: Bienvenido al GES. Si tienes alguna de las siguientes preguntas por favor ingresa el número.\n1. Pagar matricula\n2.Consultar notas de un curso\n3.Salir");

if(opcion == 1) alert("Un personal de soporte se contactará contigo para el pago de la matricula");
else if(opcion == 2){
  var curso = prompt("Ingrese el curso: \n1. Lógica de programación 1\n2. Lógica de programación 2");
  if(curso == 1) alert("Lógica de programación 1 - nota: 89");
  else if(curso == 2) alert("Lógica de programación 1 - nota: 98");
}else if(opcion == 3){
  alert("Feliz día");
}
