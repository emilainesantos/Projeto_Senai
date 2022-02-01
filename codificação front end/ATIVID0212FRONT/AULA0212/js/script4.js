hoje = new Date();
xdia = hoje.getDay();

diaSemana = new Array(7);
diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda - Feira";
diaSemana[2] = "Terça - Feira";
diaSemana[3] = "Quarta - Feira";
diaSemana[4] = "Quinta - Feira";
diaSemana[5] = "Sexta - Feira";
diaSemana[6] = "Sábado";

document.write("o número da semana é:" + " " + (xdia+1));
document.write("<p><b>" + "hoje é:" + " " + diaSemana[xdia]);