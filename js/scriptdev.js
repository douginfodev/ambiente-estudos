(function () {
    //Variables
    let ctx;  //context
    let cnv;  //canvas
    let variables = ["Screen Width: 1920px", "Screen Height: 1080px"];

    //Initial backgound image
    let backgroundDraw = new Image();
    backgroundDraw.src = '../images/barracanvas.png';

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
            cnv.strokeStyle = "white";
            cnv.strokeText(this.text, this.originX, this.originY);
        };
    };

    //Begin Code
    const canvasBackImage = new canvasBackground(backgroundDraw, 159, 800);
    const infoText = new canvasText(450, 400, "BEM VINDO AO CANVAS", "#7bbcfc");

    window.onload = init();

    function startDisplay() {
        let list = document.getElementById('list-display');

        for (var lines = 0; lines < variables.length; lines++) {
            let lineItem = document.createElement('li');

            lineItem.appendChild(document.createTextNode(variables[lines]));
            list.appendChild(lineItem);
        }
    };

    //Link html canvas element
    function init() {
        ctx = document.getElementById('mcanvas');

        //consolLog[0].value = 'Screen Width: 1920px';
        //consolLog[1].value = 'Screen Height: 1080px'; 
        /*consolLog[2].Text = 'Canvas Width: 1200px';
        consolLog[1].Text = 'Canvas Height: 810px'; 
        consolLog[3].Text = 'hhfddjgkhk'; */



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

        startDisplay();
    };

    //UPDATE
    function update() {
        draw();
    }

    //DRAW CANVAS
    function draw() {
        cnv.fillStyle = "black";
        cnv.clearRect(0, 0, 1410, 800);
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