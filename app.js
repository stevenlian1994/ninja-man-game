var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

// var world = [
//     [2,2,2,2,2,2,2,2],
//     [2,2,2,2,2,2,2,2],
//     [2,2,2,2,2,2,2,2],
//     [0,0,2,0,0,2,0,0],
//     [0,0,2,0,0,2,0,0],
//     [2,2,2,2,2,2,2,2],
//     [2,2,2,2,2,2,2,2],
//     [2,2,2,2,2,2,2,2],
// ];

// var dictionary = {
//     0: 'wall',
//     1: 'blank',
//     2: 'sushi'
// }

// function updateWorld(){
//     document.getElementById('world').innerHTML = ''
//     for (var i=0;i<world.length; i++){ //world.length
//         document.getElementById('world').innerHTML += "<div class='row'></div>"
//         for (var j=0;j<world[i].length; j++){
//             document.getElementById('world').innerHTML += "<div class='" +dictionary[world[i][j]]+ "'></div>"
//         }
//     }
// }
// updateWorld();

// function update(){
//     updateWorld();
//     document.getElementById('ninjaman').style.top = 40*topValue + 'px';
//     document.getElementById('ninjaman').style.left = 40*leftValue + 'px';
//     document.getElementById('header').innerHTML = 'Ninja Man || ' + 'Score: ' + score;
// }

// var topValue = 1;
// var leftValue = 1;

// var score = 0

// function checkEat(x,y){
//     if(world[x][y] != 1){
//         world[x][y] = 1;
//         score += 10;
//     }
// }

// var enemyTop = 6;
// var enemyLeft = 4;

// document.getElementById('bluey').style.top = 40*enemyTop + 'px';
// document.getElementById('bluey').style.left = 40*enemyLeft + 'px';



// setInterval(
//     function(){
//         switch(Math.round(4*Math.random())){
//             case 1:
//                 if(world[enemyTop-1][enemyLeft] > 0)
//                     enemyTop-=1;
//                 break;
//             case 2:
//                 if(world[enemyTop+1][enemyLeft] > 0)
//                     enemyTop+=1;
//                 break;
//             case 3:
//                 if(world[enemyTop][enemyLeft-1] > 0)
//                     enemyLeft-=1;
//                 break;
//             case 4:
//                 if(world[enemyTop][enemyLeft+1] > 0)
//                     enemyLeft+=1;
//                 break;
//         }
//         document.getElementById('bluey').style.top = 40*enemyTop + 'px';
//         document.getElementById('bluey').style.left = 40*enemyLeft + 'px';
//     }
//     , 150);

// setInterval(
//     function(){
//         if (enemyTop == topValue && enemyLeft == leftValue){
//             alert('Game Over');
//             document.location.reload();
//         }
//     }
//     , 40);

// var noSushi = true;

// setInterval(
//     function(){
//         for(var i = 0; i < world.length; i++){
//             if(world[i].includes(2)){
//                 console.log('there is sushi');
//                 noSushi = false;
//             }
//         }
//         if(noSushi == true){
//             console.log('no sushi');
//             alert('You won');
//             document.location.reload();
//         }
//         noSushi = true;
//     }
//     ,300);



// onkeydown = function(e) {
//     //up 38
//     if(e.keyCode == 38 && world[topValue-1][leftValue] > 0){
//         checkEat(topValue-1,leftValue);
//         topValue -= 1;
//     }
//     //down 40
//     if(e.keyCode == 40 && world[topValue+1][leftValue] > 0){
//         checkEat(topValue+1,leftValue);
//         topValue += 1;
//     }
//     //left 37
//     if(e.keyCode == 37 && world[topValue][leftValue-1] > 0){
//         checkEat(topValue,leftValue-1);
//         leftValue -= 1;
//     }
//     //right 39
//     if(e.keyCode == 39 && world[topValue][leftValue+1] > 0){
//         checkEat(topValue,leftValue+1);
//         leftValue += 1;
//     }
//     update();
// }





// need dictionary - check
// need to create template world / map  v - check
// make ninjaman move - check
// map borders - check 
// eat food - check
// add score - check
// add enemies - check
// add lose condition - check
// add win condition - check
// restart the game - 

//UNUSED CODE:

// function updateWorld() {
//     for (var i=0; i<10; i++) {
//         world[i] = [];
//         for (var j=0; j<10; j++) {
//             world[i].push(Math.round(2*Math.random()));
//         }
//     }
// }
// updateWorld();
