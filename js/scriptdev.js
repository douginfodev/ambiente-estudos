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

    //Begin Code
    const canvasBackImage = new canvasBackground(backgroundDraw, 1450, 780);

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
        //cnv.drawImage(background, 0, 0, background.width, background.height);
    }

    //RECURSIVE / LOOP 
    function loop() {
        update();
        draw();
        requestAnimationFrame(loop, ctx);
    }

}());