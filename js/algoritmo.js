(function () {
  //Variables
  var ctx;  //context
  var cnv;  //canvas
  var status = null;

  //Initial Fractal Setup
  var carpetWidth = [390, 130, 43.3, 14.4, 4.8, 1.6];
  var iteration = 4;
  var squareWidth = carpetWidth[iteration];
  var defaultLineWidth = 1.0;
  var originX = 200;
  var originY = 12;
  var rowLine = 1;
  var carpetColors = ["#E4F1BD", "#1957A3", "#1993A3", "#9119A3", "#E29A26"];
  var arrayCarpetX = [200, 330, 460, 200, 330, 460, 200, 330, 460];
  var arrayCarpetY = [12, 12, 12, 142, 142, 142, 271, 271, 271];
  var arrayRecursive = [0, 1, 1, 9, 81];

  var i = 0;
  var sierpinskiCarpet;
  var colectionCarpet = [];
  const background = new Image();

  //object carpetSquare - pseudo-class
  var carpetSquare = function (positionx, positiony, widthsquare) {
    this.positionX = positionx,
      this.positionY = positiony,
      this.width = widthsquare,
      this.height = widthsquare,
      this.render = function () {
        cnv.fillStyle = carpetColors[iteration];//"#1957A3";
        cnv.fillRect(this.positionX, this.positionY, this.width, this.height);

        cnv.lineWidth = defaultLineWidth;
        cnv.strokeStyle = "white";//"#7bbefc";
        cnv.strokeRect(this.positionX, this.positionY, this.width, this.height);
      };
  };

  function carpetMaster(originX, originY, actualIteration, actualrow) {
    var rowLine = actualrow;
    var column = 0;
    var initColumnPos = 0;
    var initRowPos = originY;

    for (squareLine = 1; squareLine <= 9; squareLine++) {

      initColumnPos = originX + (column * carpetWidth[actualIteration]);

      if (squareLine !== 5) {
        sierpinskiCarpet = new carpetSquare(initColumnPos, initRowPos, carpetWidth[actualIteration]);
        sierpinskiCarpet.render();
        colectionCarpet.push(sierpinskiCarpet);
        //console.log('Line= ' + squareLine + ' PosX= ' + initColumnPos + ' PosY= ' + initRowPos);
      }

      column += 1;

      if (squareLine === 3 || squareLine === 6 || squareLine === 9) {
        column = 0;
        initColumnPos = 0;
        initRowPos = originY + (rowLine * carpetWidth[actualIteration]);
        rowLine += 1;
      }
    }
  }

  //Onload da Pagina
  window.onload = init();

  function init() {
    ctx = document.getElementById('mcanvas');

    if (ctx !== null) {
      cnv = ctx.getContext('2d');
      start();
    } else
      alert('Impossible to load canvas');
  };

  function start() {
    status = 'start';
    background.src = "../images/fundo_sieski.jpg";

    background.onload = function () {
      cnv.drawImage(background, 0, 0, background.width, background.height);
    };


    if (iteration === 0) {
      sierpinskiCarpet = new carpetSquare(originX, originY, squareWidth, squareWidth);
      sierpinskiCarpet.render();
      colectionCarpet.push(sierpinskiCarpet);
    } else if (iteration === 1) {
      carpetMaster(originX, originY, iteration, rowLine);
    } else {
      var i = 0;
      var matrizCarpet = 0;



      for (i = 0; i < arrayRecursive[iteration]; i++) {

        if (i !== 4) {
          originX = arrayCarpetX[i];
          originY = arrayCarpetY[i];

          carpetInvisible = 4;
          recursive = 0;

          //totalRecursion = (3 ** iteration);
          totalRecursion = 9;

          if (iteration <= 1)
            totalRecursion = 0;

          rowLine = 1;
          recursivePositionX = originX;
          recursivePositionY = originY;

          //Recursion
          while (recursive < totalRecursion) {

            //Verify Invisible Carpet Square
            if (recursive !== carpetInvisible) {
              carpetMaster(recursivePositionX, recursivePositionY, iteration, rowLine);
            } else {
              console.log(recursive);
              carpetInvisible += 9;
            }

            recursive += 1;
            recursivePositionX += carpetWidth[iteration - 1];

            //Initial column value
            if (recursive % 3 === 0) {
              recursivePositionY = originY + (carpetWidth[iteration - 1] * rowLine);
              recursivePositionX = originX;
            }

            if (recursive % 6 === 0)
              recursivePositionY = originY + (carpetWidth[iteration - 1] * (rowLine + 1));

            if (recursive % 9 === 0) {
              recursivePositionX = originX + (carpetWidth[iteration - 1] + 14.4);
              recursivePositionY = originY + (carpetWidth[iteration - 1] * rowLine);

            }
            console.log("RECURSIVE= " + recursive + "==========================================");

          };
        };
      };
    };
  };

  function TapeteGrupo(posicao) {
    var lin = 0;
    var col = 0;
    var taminter = tamanhotapete[0] / Math.pow(3, passo);
    posix = posicao;

    for (i = 1; i <= 9; i++) {
      if (i !== 5) {
        sierpinskiCarpet = new carpetSquare(posix + taminter * (col), posiy + taminter * (lin), taminter);
        sierpinskiCarpet.render();
        colecao.push(sierpinskiCarpet);
      }

      col += 1;

      if (i === 3 || i === 6 || i === 9) {
        lin += 1;
        col = 0;
      }

    }
  };

  function Tapete(loop) {

    if (passo === 2) {
      coluna += 1;
    }

    // if(linha !== 5){
    for (i = 0; i <= 8; i++) {
      cnv.fillStyle = "yellow";

      if (i !== 4) {

        sierpinskiCarpet = new carpetSquare(posix + tamanhotapete[passo] * (col), posiy + tamanhotapete[passo] * (lin), tamanhotapete[passo]);
        sierpinskiCarpet.render();
        colecao.push(sierpinskiCarpet);
        totquad += 1;
      }

      col += 1;

      if (i === 2 || i === 5 || i === 8) { //2 5 8
        lin += 1;
        col = 0;


      }

      /*if(i === 8){
          lin=0;
          col=0;
          
          col1 = 11;
          col2 = 14;
          col3 = 17;
          posix = 930;
      }*/

    }

    //  }

    if (linha === 1 && coluna === 2) {
      posix = 930;
      posiy = 50;
      lin = 0;
      col = 0;
    }

    if (linha === 1 && coluna === 6) {
      posix = 1060;
      posiy = 50;
      lin = 0;
      col = 0;
      linha += 1;
    }

    if (iteracao <= 0) {
      iteracao += 1;
      Tapete(1);


    }
  };

  function TapeteSierpinski(loop) {
    console.log("Total = " + total);
    if (passo >= 2) {

      //   if (loop !== 5){   
      for (k = 0; k < 600; k++) {  //1458

        //Linha 
        if (j === 0 || j === 3 || j === 6) {
          pxg = 0;
        }


        if (j === 1 || j === 4 || j === 7) {
          pxg = (tamanhotapete[passo] * 3);
        }

        if (j === 2 || j === 5 || j === 8) {
          pxg = (tamanhotapete[passo] * 6);
        }



        //Coluna
        if (j <= 2) {
          pyg = 0;
        }

        if (j >= 3 && j <= 5) {
          pyg = (tamanhotapete[passo] * 3);
        }

        if (j >= 6) {
          pyg = (tamanhotapete[passo] * 6);
        }

        //if (k < 500){
        if (j !== 4) {
          var lin = 0;
          var col = 0;



          for (i = 0; i <= 8; i++) {
            cnv.fillStyle = "yellow";

            if (i !== 4) {

              sierpinskiCarpet = new carpetSquare(pxg + posix + tamanhotapete[passo] * (col), recy + pyg + posiy + tamanhotapete[passo] * (lin), tamanhotapete[passo]);
              sierpinskiCarpet.render();
              colecao.push(sierpinskiCarpet);
              totquad += 1;
            }

            col += 1;

            if (i === 2 || i === 5 || i === 8) {
              lin += 1;
              col = 0;
            }

          }
        } else {
          //totquad += 64;
        }
        //
        //end j != 4
        //}
        j += 1;

        /*Troca de coluna
        if (k !== 81){
        if (k % 9 === 0 && k > 0){ //81
            j = 0;
            console.log(k);
            pxg = 0;
            pyg = 0;
            
            if (contquad === 0){        
           
             posix = 800 + tamanhotapete[passo-2];
             contquad = 1;
            
              console.log(posix);
            }else{
              if (contquad === 1){
               posix = 800 + (tamanhotapete[passo-2]*2);
               contquad = 0;             
             }
            }
          
        }//end troca de coluna
    }
        //Troca de coluna
        if (k % 81 === 0 && k > 0){ //81
            posix = 800 + tamanhotapete[passo-2];
          
        }//end troca de coluna
        
        
        if(k % auxk === 0 && k > 0){ //243
            posix = 800;
            auxk = 45;
            
            if (contquady === 0){
             posiy = 50 + tamanhotapete[passo-2];
             contquady = 1;   
            // j = 0;
            }else{
              if (contquady === 1){
               posiy = 50 + (tamanhotapete[passo-2]*2);
               contquady = 0;  
             //  j = 0;
             }
            }          
    
        }*/

        //passo 3 = 192 e 320;

        if ((totquad % 192 === 0 || totquad % 320 === 0) && totquad <= 320) {

          //if (passo === 3){ 

          if (a === 0) {
            posix = 800;

          } else {
            if (a === 1) {
              posix = 930;
            } else {
              posix = 1060;
            }
          }

          posiy = posiy + tamanhotapete[passo - 2];
          j = 0;
          linha += 1;
          console.log(totquad);
          //  }

          //  if (passo === 4){
          //    posiy = posiy + tamanhotapete[passo-2];  
          //    posix = 800+43.3;  
          //  }



          // }
        } else {
          if (totquad % 64 === 0) { //passo 3 = 64 passo 4 = 512

            if (linha === 1) {
              posix = posix + (tamanhotapete[passo - 2] * 2);
              // alert(posix);
              linha = 2;
              ln = 2;
            } else {
              posix = posix + tamanhotapete[passo - 2];
            }

            if (j !== 4) {
              j = 0;
            }

          }//if 64            

        } //else


        if (totquad === 512) {
          totquad = 0;
          posiy = 50;
          linha = 0;
          a += 1;

          if (a === 3) {
            a = 0;
            posix = 800;
            posiy = posiy + 130;
            ln = 1;
          }
        }

        if (k % 72 === 0 && k > 0) {

          if (ln === 0) {
            posix = 930;
            ln = 1;
          } else {
            // posix = 1060;
          }


        }

      } //end for k
    }
    //  }

    console.log("total sierpinskiCarpets " + totquad);
  };

  //UPDATE
  function update() {
    draw();
  }

  //DRAW CANVAS
  function draw() {
    cnv.clearRect(0, 0, 700, 450);

    cnv.drawImage(background, 0, 0, background.width, background.height);

    cnv.strokeStyle = "yellow";
    cnv.strokeRect(200, 12, 390, 390);

    for (var c in colectionCarpet) {
      var pieceCarpet = colectionCarpet[c];
      cnv.fillStyle = "white";
      pieceCarpet.render();
    }

    cnv.font = "26px Arial Bold";
    var textInfo = "ITERATION : " + iteration;
    cnv.fillStyle = "white";
    cnv.fillText(textInfo, 90, 435);
  };

  //RECURSIVE / LOOP 
  function loop() {
    update();
    draw();
    requestAnimationFrame(loop, ctx);
  }

  //START
  if (status === 'start') {
    loop();
  };
}());