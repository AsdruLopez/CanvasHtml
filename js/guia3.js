window.onload = function () {
    let canvas =
        document.getElementById("theLostCanvas");
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d")
        if (ctx) {
            ctx.lineWidth = 15;
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "red";

            ctx.beginPath();
            ctx.moveTo(50, 100);
            ctx.lineTo(100, 50);
            ctx.lineTo(150, 50);
            ctx.lineTo(100, 150);
            // ctx.fill();
            ctx.stroke();
            
            // segunda linea
            ctx.beginPath();
            ctx.moveTo(200,100);
            ctx.lineTo(250,50);
            ctx.lineTo(300,100);
            ctx.lineTo(250,150);
            ctx.closePath();
            ctx.stroke();

        } 
    }else { 
        alert("Su navegador soporta canvas");
    }


}