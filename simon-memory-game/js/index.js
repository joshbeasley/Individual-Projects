$(document).ready(function(){
  
  var clicked = [];
  var count = 1;
  var rand;
  var strict = false;
  var j = 0;
  var litID = [];
  var off;
  var on;
  var x;
  
  //generates random array of 20 value 1-4
  function generateRandomArray(){
    var randomArray = [];
    for(var i = 0; i < 20; i++){
      randomArray.push(Math.floor(Math.random() * 4) + 1);
    }
    return randomArray;
  }
  
  $('#on').click(function(){
    $('#on').addClass('btn-danger');
    $('#off').removeClass('btn-danger');
    $('#count').text('--');
    rand = generateRandomArray();
    
    $('#strict').click(function(){
      strict = true;
      $('#strict').addClass('strict1');
      alert("You have now activated strict mode... Good Luck!");
    });
    $('#start').click(function(){
      $('#count').text(count);
      playComputer(); 
    });
  });
  
  function playComputer(){
        //set interval length
        if (count <= 10) {
            off = 400;
            on = 800;

        }

        else {
            off = 250;
            on = 500;
        }

               x = setInterval(function () {

                if (rand[j] == 1) {

                    $('#1').addClass('animated flash');
                    $('#sound1')[0].play();
                    litID.push(1);


                    setTimeout(function () {

                        $('#1').removeClass('animated flash');

                    }, off);

                }

                else if (rand[j] == 2) {

                    $('#2').addClass('animated flash');
                    $('#sound2')[0].play();
                    litID.push(2);


                    setTimeout(function () {

                        $('#2').removeClass('animated flash');

                    }, off);

                }

                else if (rand[j] == 3) {

                    $('#3').addClass('animated flash');
                    $('#sound3')[0].play();
                    litID.push(3);


                    setTimeout(function () {

                        $('#3').removeClass('animated flash');

                    }, off);

                }

                else {

                    $('#4').addClass('animated flash');
                    $('#sound4')[0].play();
                    litID.push(4);


                    setTimeout(function () {

                        $('#4').removeClass('animated flash');

                    }, off);
                }

                 j++;

                   if (j>=count) {
                       clearInterval(x);
                   }

            }, on);

    }
  
   $('#1').on('click', function () {

            $('#1').addClass('animated flash');
            $('#sound1')[0].play();

            clicked.push(1);

            setTimeout(function () {
                $('#1').removeClass('animated flash');

            }, 250);

            checking();

        });

        $('#2').on('click', function () {

            $('#2').addClass('animated flash');
            $('#sound2')[0].play();

            clicked.push(2);

            setTimeout(function () {
                $('#2').removeClass('animated flash');

            }, 250);

            checking();
        });

        $('#3').on('click', function () {

            $('#3').addClass('animated flash');
            $('#sound3')[0].play();

            clicked.push(3);

            setTimeout(function () {
                $('#3').removeClass('animated flash');

            }, 250);

            checking();
        });

        $('#4').on('click', function () {

            $('#4').addClass('animated flash');
            $('#sound4')[0].play();

            clicked.push(4);

            setTimeout(function () {
                $('#4').removeClass('animated flash');

            }, 250);

            checking();
        });

   

    //to switch off
    $('#off').on('click', function () {
        $('#off').addClass('btn-danger');
        $('#on').removeClass('btn-danger');
        window.location.href=window.location.pathname;
    });           
               
 function checking() {

        if (litID.length == clicked.length) {

                if (litID.join() == clicked.join()) {

                        if (count == 20) {

                            setTimeout(function () {
                                alert("You win!");
                                window.location.href=window.location.pathname;
                            }, 1000);
                        }

                        else {
                            setTimeout(function () {
                                $('#count').text(count + 1);
                                count++;
                                litID = [];
                                clicked = [];
                                j = 0;
                                playComputer();

                            }, 1000);
                        }
                }

                else {
                    if (strict == true) {
                        alert('Sorry, you lost on strict mode. You must start over.');
                        window.location.href=window.location.pathname;

                    }

                    else {
                        setTimeout(function () {
                            $('#count').text('!!');
                            alert('Oooops! That doesn\'t seem to be the right sequence. Why don\'t you press the START button to try again.')

                            litID = [];
                            clicked = [];
                            j = 0;
                            change1();
                        }, 1000);
                    }
                }
    }
  }
  
 
});