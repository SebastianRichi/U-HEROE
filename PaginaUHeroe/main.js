function addFields() {

    //Se crea el nunero de inputs
    var number = document.getElementById("notas").value;

    //Se obtiene el luegar donde se van a agregar los inputs
    var container = document.getElementById("container");

    //Esto para eliminar los inputs anteriores
    while (container.hasChildNodes()) {
    
        container.removeChild(container.lastChild);
    
    }
    
    for (i=0;i<number;i++) {

        // Salto de linea
        container.appendChild(document.createElement("br"));
        
        // Agregar el nodo de texto de manera aleatoria
        container.appendChild(document.createTextNode( "Nota:" ));

        // Crear el input con su tipo y nu nombre
        var input = document.createElement("input");
        input.type = "text";
        input.id = "nota" + i;
        input.className = "cuadros";
        container.appendChild(input);

        
        container.appendChild(document.createTextNode( "Porcentaje:" ));

        // Crear el otro input
        var input2= document.createElement("input");
        input2.type = "text";
        input2.id = "porcentaje" + i;
        input2.className = "cuadros";
        container.appendChild(input2);
    
    }
}

function calcular() {

    var nombreMateria = document.getElementById("nombreDeLaMateria").value;
    var dondeVaResultado = document.getElementById("resultado");
    var number = document.getElementById("notas").value;




        if(number == 2) {

            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var resultado = notas0 + notas1;
            var tp = porcentaje0 + porcentaje1;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 3) {

            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var resultado = notas0 + notas1 + notas2;
            var tp = porcentaje0 + porcentaje1 + porcentaje2;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 4) {

            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var porcentaje3 = parseFloat(document.getElementById("porcentaje3").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var notas3 = ((nota3 * porcentaje3) / 100);
            var resultado = notas0 + notas1 + notas2 + notas3;
            var tp = porcentaje0 + porcentaje1 + porcentaje2 + porcentaje3;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 5) {

            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var nota4 = parseFloat(document.getElementById("nota4").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var porcentaje3 = parseFloat(document.getElementById("porcentaje3").value);
            var porcentaje4 = parseFloat(document.getElementById("porcentaje4").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var notas3 = ((nota3 * porcentaje3) / 100);
            var notas4 = ((nota4 * porcentaje4) / 100);
            var resultado = notas0 + notas1 + notas2 + notas3 + notas4;
            var tp = porcentaje0 + porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 6) {

            
            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var nota4 = parseFloat(document.getElementById("nota4").value);
            var nota5 = parseFloat(document.getElementById("nota5").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var porcentaje3 = parseFloat(document.getElementById("porcentaje3").value);
            var porcentaje4 = parseFloat(document.getElementById("porcentaje4").value);
            var porcentaje5 = parseFloat(document.getElementById("porcentaje5").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var notas3 = ((nota3 * porcentaje3) / 100);
            var notas4 = ((nota4 * porcentaje4) / 100);
            var notas5 = ((nota5 * porcentaje5) / 100);
            var resultado = notas0 + notas1 + notas2 + notas3 + notas4 + notas5;
            var tp = porcentaje0 + porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4 + porcentaje5;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 7) {

            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var nota4 = parseFloat(document.getElementById("nota4").value);
            var nota5 = parseFloat(document.getElementById("nota5").value);
            var nota6 = parseFloat(document.getElementById("nota6").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var porcentaje3 = parseFloat(document.getElementById("porcentaje3").value);
            var porcentaje4 = parseFloat(document.getElementById("porcentaje4").value);
            var porcentaje5 = parseFloat(document.getElementById("porcentaje5").value);
            var porcentaje6 = parseFloat(document.getElementById("porcentaje6").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var notas3 = ((nota3 * porcentaje3) / 100);
            var notas4 = ((nota4 * porcentaje4) / 100);
            var notas5 = ((nota5 * porcentaje5) / 100);
            var notas6 = ((nota6 * porcentaje6) / 100);
            var resultado = notas0 + notas1 + notas2 + notas3 + notas4 + notas5 + notas6;
            var tp = porcentaje0 + porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4 + porcentaje5 + porcentaje6;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 8) {
            
            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var nota4 = parseFloat(document.getElementById("nota4").value);
            var nota5 = parseFloat(document.getElementById("nota5").value);
            var nota6 = parseFloat(document.getElementById("nota6").value);
            var nota7 = parseFloat(document.getElementById("nota7").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var porcentaje3 = parseFloat(document.getElementById("porcentaje3").value);
            var porcentaje4 = parseFloat(document.getElementById("porcentaje4").value);
            var porcentaje5 = parseFloat(document.getElementById("porcentaje5").value);
            var porcentaje6 = parseFloat(document.getElementById("porcentaje6").value);
            var porcentaje7 = parseFloat(document.getElementById("porcentaje7").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var notas3 = ((nota3 * porcentaje3) / 100);
            var notas4 = ((nota4 * porcentaje4) / 100);
            var notas5 = ((nota5 * porcentaje5) / 100);
            var notas6 = ((nota6 * porcentaje6) / 100);
            var notas7 = ((nota7 * porcentaje7) / 100);
            var resultado = notas0 + notas1 + notas2 + notas3 + notas4 + notas5 + notas6 + notas7;
            var tp = porcentaje0 + porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4 + porcentaje5 + porcentaje6 + porcentaje7;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 9) {
            
            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var nota4 = parseFloat(document.getElementById("nota4").value);
            var nota5 = parseFloat(document.getElementById("nota5").value);
            var nota6 = parseFloat(document.getElementById("nota6").value);
            var nota7 = parseFloat(document.getElementById("nota7").value);
            var nota8 = parseFloat(document.getElementById("nota8").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var porcentaje3 = parseFloat(document.getElementById("porcentaje3").value);
            var porcentaje4 = parseFloat(document.getElementById("porcentaje4").value);
            var porcentaje5 = parseFloat(document.getElementById("porcentaje5").value);
            var porcentaje6 = parseFloat(document.getElementById("porcentaje6").value);
            var porcentaje7 = parseFloat(document.getElementById("porcentaje7").value);
            var porcentaje8 = parseFloat(document.getElementById("porcentaje8").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var notas3 = ((nota3 * porcentaje3) / 100);
            var notas4 = ((nota4 * porcentaje4) / 100);
            var notas5 = ((nota5 * porcentaje5) / 100);
            var notas6 = ((nota6 * porcentaje6) / 100);
            var notas7 = ((nota7 * porcentaje7) / 100);
            var notas8 = ((nota8 * porcentaje8) / 100);
            var resultado = notas0 + notas1 + notas2 + notas3 + notas4 + notas5 + notas6 + notas7 + notas8;
            var tp = porcentaje0 + porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4 + porcentaje5 + porcentaje6 + porcentaje7 + porcentaje8;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
        else if(number == 10) {
            
            var nota0 = parseFloat(document.getElementById("nota0").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var nota4 = parseFloat(document.getElementById("nota4").value);
            var nota5 = parseFloat(document.getElementById("nota5").value);
            var nota6 = parseFloat(document.getElementById("nota6").value);
            var nota7 = parseFloat(document.getElementById("nota7").value);
            var nota8 = parseFloat(document.getElementById("nota8").value);
            var nota9 = parseFloat(document.getElementById("nota9").value);
            var porcentaje0 = parseFloat(document.getElementById("porcentaje0").value);
            var porcentaje1 = parseFloat(document.getElementById("porcentaje1").value);
            var porcentaje2 = parseFloat(document.getElementById("porcentaje2").value);
            var porcentaje3 = parseFloat(document.getElementById("porcentaje3").value);
            var porcentaje4 = parseFloat(document.getElementById("porcentaje4").value);
            var porcentaje5 = parseFloat(document.getElementById("porcentaje5").value);
            var porcentaje6 = parseFloat(document.getElementById("porcentaje6").value);
            var porcentaje7 = parseFloat(document.getElementById("porcentaje7").value);
            var porcentaje8 = parseFloat(document.getElementById("porcentaje8").value);
            var porcentaje9 = parseFloat(document.getElementById("porcentaje9").value);
            var notas0 = ((nota0 * porcentaje0) / 100);
            var notas1 = ((nota1 * porcentaje1) / 100);
            var notas2 = ((nota2 * porcentaje2) / 100);
            var notas3 = ((nota3 * porcentaje3) / 100);
            var notas4 = ((nota4 * porcentaje4) / 100);
            var notas5 = ((nota5 * porcentaje5) / 100);
            var notas6 = ((nota6 * porcentaje6) / 100);
            var notas7 = ((nota7 * porcentaje7) / 100);
            var notas8 = ((nota8 * porcentaje8) / 100);
            var notas9 = ((nota9 * porcentaje9) / 100);
            var resultado = notas0 + notas1 + notas2 + notas3 + notas4 + notas5 + notas6 + notas7 + notas8 + notas9;
            var tp = porcentaje0 + porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4 + porcentaje5 + porcentaje6 + porcentaje7 + porcentaje8 + porcentaje9;
            
            dondeVaResultado.innerHTML = "Tu promedio en el " + tp + "% de " + nombreMateria + " es " + resultado;

        }
    }    