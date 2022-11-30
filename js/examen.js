<h1>USO DE FOR </h1>

<script>

    /*PROGRAMA QUE CAPTURA  5 NUMEROS Y LOS SUMA*/

    let veces,n,suma;

    suma=0;

   for(veces=0;veces>=4;veces++)

    {

        n=parseInt(prompt("Ingrese un numero"));

        document.write("El numero ingresado es :",n,"<br>");

        suma=n;

    }

    document.write("El resultado de sumar los numeros es: ...",suma);

</script>