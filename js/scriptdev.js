(function () {
    //Variables
    let ctx;  //context
    let cnv;  //canvas

    //Initial backgound image
    let backgroundDraw = new Image();
    backgroundDraw.src = '../images/fundo_sieski.jpg';

    //pseudo-object
    const canvasBackground = function (Background, Width, Height) {
        this.width = Width;
        this.height = Height;
        this.originX = 0;
        this.originY = 0;
        this.render = function () {
            cnv.drawImage(Background, this.originX, this.originY, this.width, this.height);
        };
    };

    //pseudo-object - DrawText
    const canvasText = function (positionX, positionY, Text, Color) {
        this.text = Text;
        this.font = "52px Arial Bold";
        this.color = Color;
        this.originX = positionX;
        this.originY = positionY;
        this.render = function () {
            cnv.font = this.font;
            cnv.fillStyle = this.color;
            cnv.fillText(this.text, this.originX, this.originY);
        };
    };

    //Begin Code
    const canvasBackImage = new canvasBackground(backgroundDraw, 1450, 780);
    const infoText = new canvasText(450, 400, "Bem vindo ao canvas", "yellow");

    window.onload = init();

    //Link html canvas element
    function init() {
        ctx = document.getElementById('mcanvas');

        if (ctx !== null) {
            cnv = ctx.getContext('2d');
            start();
        } else
            alert('Impossible to load canvas');
    };

    function start() {
        backgroundDraw.onload = function () {
            canvasBackImage.render();
            infoText.render();
        };
    };

    //UPDATE
    function update() {
        draw();
    }

    //DRAW CANVAS
    function draw() {
        cnv.clearRect(0, 0, 700, 450);
        canvasBackImage.render();
        infoText.render();
    }

    //RECURSIVE / LOOP 
    function loop() {
        update();
        draw();
        requestAnimationFrame(loop, ctx);
    }

}());