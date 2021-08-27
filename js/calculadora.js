
    function sumar (){
        var Num1 = parseInt(document.getElementById("Num1").value);
        var Num2 = parseInt(document.getElementById("Num2").value);
        document.getElementById("resultado").innerHTML = Num1 + Num2;
    }
    
    function restar (){
        
        var Num1 = parseInt(document.getElementById("Num1").value);
        var Num2 = parseInt(document.getElementById("Num2").value);
        document.getElementById("resultado").innerHTML = Num1 - Num2;
    }

    function multiplicar (){
        var Num1 = parseInt(document.getElementById("Num1").value);
        var Num2 = parseInt(document.getElementById("Num2").value);
        document.getElementById("resultado").innerHTML = Num1 * Num2;
    }

    function dividir (){
        var Num1 = parseInt(document.getElementById("Num1").value);
        var Num2 = parseInt(document.getElementById("Num2").value);
        document.getElementById("resultado").innerHTML = Num1 / Num2;
    }


    /*function borrar() {
        document.getElementById("formulario").reset();
    }*/
    
 function tabla(){
        //window.onload = function(){
    window.onload = tabla;
        
        numero = prompt("Introduce un número: ");
   document.getElementById("numero")
      
        document.write("<table border='1'><tr><td>Número</td><td>Resultado</td></tr>");
            for(i=0; i<=10; i++){
            
                document.write("<tr><td>"+numero+" x " + i +"</td><td>" + numero * i + "</td></tr>");
            }
        document.write("</table>");
}
    
