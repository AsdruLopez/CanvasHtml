window.onload = function () {

  // Let indica una variable  a nivel de bloque {}
  // llamado al componente html
  let canvas = document.getElementById("theLostCanvas");
  if (canvas //si el objeto existe
    && // and ambas partes debe ser verdaderas
    // || or solamente uan debe ser verdadera
    // ! not !true
    canvas.getContext) {
    let ctx = canvas.getContext("2d"); //definimos los ejes x,y
    if (ctx) {
      // ubicar el centro de canvas
      let centroX = canvas.width / 2;
      let centroY = canvas.height / 2;

      // definimos el radio

      let radioExterno = 95; // radio de las puas
      let radioInterno = 50; // radio del circulo
      let radioMedio = radioInterno * 1.6;
      let radioCentro = 20;

      //numoer de puntos del engranaje
      let numeroPuntos = 40;

      // configuramos las lineas
      ctx.beginPath(); // nos indica el inicio dde la linea
      ctx.lineJoin = "bevel";
      // al unir las lineas se utiliza una finaliza un acabado redondo

      for (
        let i = 0;
        //se llama por convencion
        i < numeroPuntos;
        //dondicion logica true o false
        i++
        // al valor de i se le sumara 1 
        // variable =+   variable = variable + variable
        // i -- resta el valor en 1

      ) {
        if (
          i % 2 == 0
          // i que es el marcapasos de for
          // % el residuo de i divido en 2
          // == igual
          // != diferente 
        ) {
          //si el valor es par
          radio = radioExterno;
        } else {
          // si no es par
          radio = radioInterno;
        }
        //creo el segmento del angulo que se movera
        // al pintar linea
        let angulo = Math.PI * 2 / numeroPuntos * (i + 1);

        // calculamos las doordenadas externas.
        let x = (radio * Math.sin(angulo)) + centroX;
        let y = (radio * Math.cos(angulo)) + centroY;


        if (i == 0) {
          ctx.moveTo(x, y); // inicio de linea
        } else {
          ctx.lineTo(x, y); // linea complementaria
        }

      }





      //configuracion de visulizacion de las linea
      ctx.closePath(); // cerramos la figura en el punto indicado
      //por defecto es el inicio (moveTo)
      ctx.lineWidth() = 5; //ancho de linea
      ctx.strokeStyle = "orange"; // define el color externo de la linea
      ctx.fillStyle = "red"; // define el color de relleno de la forma
      ctx.stroke(); // pintamos la linea

    }  }
}

window.onload = function () {
  let canvas = document.getElementById("theLostCanvas");
  if (canvas && canvas.getContext) {
    let ctx = canvas.getContext("2d");
    if (ctx) {
      let centroX = canvas.width / 2;
      let centroY = canvas.height / 2;

      let radioExterno = 95; 
      let radioInterno = 50; 
      let numeroPuntos = 40;

      ctx.beginPath();
      ctx.lineJoin = "bevel";

      for (let i = 0; i < numeroPuntos; i++) {
        let radio = (i % 2 === 0) ? radioExterno : radioInterno;
        let angulo = Math.PI * 2 / numeroPuntos * (i + 1);
        let x = (radio * Math.sin(angulo)) + centroX;
        let y = (radio * Math.cos(angulo)) + centroY;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.lineWidth = 5; // Corregido aquí
      ctx.strokeStyle = "orange"; 
      ctx.fillStyle = "red"; 
      ctx.stroke(); 
      ctx.fill(); // Añadir relleno si es necesario
    }
  }
}
