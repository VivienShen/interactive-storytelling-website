var quiz = {
    Q0 : {id:0, question: 'Green energy technology like solar, wind and hydro is more expensive and unreliable than fossil fuels.', answer: 'false', explanation: 'False because clean energy technology saves you more money over time than using fossil fuels, and they are more reliable due to the advancements in technology.', question2: 'Green energy technology like solar, wind and hydro is more expensive and unreliable than fossil fuels.'},
    Q1 : {id:1, question: 'Climate change is a natural process and not because of humans.', answer: 'false', explanation: 'False because while the Earth’s temperature changes over time from natural causes, it is only a small amount compared to what we’ve seen in the last hundred years, with humans releasing 100 times more carbon dioxide than any natural causes like volcanoes.', question2: 'Climate change is a natural process and not because of humans.'},
    Q2 : {id:2, question: 'The world will end because of climate change in the next couple of decades.', answer: 'false', explanation: 'False because the world will not end due to climate change in the next couple of decades, but the longer we don’t take action, the more consequences there will be and it will be harder to fix. With some cities going underwater, natural disasters, extinction of more wildlife and more.', question2: 'The world will end because of climate change in the next couple of decades.'},
    Q4 : {id:3, question: 'Farms are causing some greenhouse gasses.', answer: 'true', explanation: 'True because methane is a greenhouse gas released from some animals, mostly cows, and is 80 times more stronger than carbon dioxide. Farmers need to provide animals with more nutritious food, and scientists need to create better food for cows to release less methane.', question2: 'Farms are causing some greenhouse gasses.'},
    Q5 : {id:4, question: 'The ocean can absorb carbon dioxide.', answer: 'true', explanation: 'True because the ocean is absorbing massive amounts of carbon dioxide from the air, but that means it becomes more acidic which is destroying parts of the ocean.', question2: 'The ocean can absorb carbon dioxide.'},
    Q6 : {id:5, question: 'Climate change doesn’t exist because winter is still so cold and there is snow.', answer: 'false', explanation: 'False because while you might still feel cold and not much of a difference, scientists see the weather over a longer period of time like several decades, and even 1 degree increase in the Earth’s temperature can be severely damaging.', question2: 'Climate change doesn’t exist because winter is still so cold and there is snow.'},
    Q7 : {id:6, question: 'Some cities and countries can go underwater because of climate change.', answer: 'true', explanation: 'True because a lot of places located near the coastline are at the risk of going underwater if the rising sea levels increase even 1.5 meters.', question2: 'Some cities and countries can go underwater because of climate change.'},
    Q8 : {id:7, question: 'Canada won’t be affected by climate because it’s cold and not near the equator.', answer: 'false', explanation: 'False because even though Canada is at a good location and won’t suffer as bad as some other countries, we can still expect more extreme weather in Canada like forest fires, floods, heatwaves and more.', question2: 'Canada won’t be affected by climate because it’s cold and not near the equator.'},
    Q9 : {id:8, question: 'Climate change can impact our health.', answer: 'true', explanation: 'True because climate change can have many different types of impacts on our health due to air pollution, diseases from the water quality, diseases from bugs such as mosquitoes, and more.', question2: 'Climate change can impact our health.'},
    Q10 : {id:9, question: 'Climate change can cause food shortages.', answer: 'true', explanation: 'True because increased droughts on current farmlands would cause food shortages and increase prices on food that not everyone can afford.', question2: 'Climate change can cause food shortages.'}
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  
var bank = [];
// Used like so
for(var key in quiz) {
    bank.push(quiz[key]);
}
shuffle(bank);
console.log(bank);

//question1
document.getElementById('q1').innerHTML += bank[0].question;
document.getElementById('exp1').innerHTML += bank[0].explanation;
document.getElementById('q1r').innerHTML += bank[0].question2;
var a1 = document.getElementById('an1');
var a2 = document.getElementById('an2');
var a1r = document.getElementById('an1r');
var a2r = document.getElementById('an2r');

if (bank[0].answer == "true"){
    a1.className += " plus-btn";
    a1.innerHTML = "True";
    a1r.innerHTML = "✓ True"
    a2.className += " minus-btn";
    a2.innerHTML = "False";
    a2r.innerHTML = "X False"
    console.log(true);
}else if (bank[0].answer == "false") {
    a1.className += " minus-btn";
    a1.innerHTML = "True";
    a1r.innerHTML = "X True"
    a2.className += " plus-btn";
    a2.innerHTML = "False";
    a2r.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2.className);

//question2
document.getElementById('q2').innerHTML += bank[1].question;
document.getElementById('exp2').innerHTML += bank[1].explanation;
document.getElementById('q2r').innerHTML += bank[1].question2;
var a1_2 = document.getElementById('an1_2');
var a2_2 = document.getElementById('an2_2');
var a1r_2 = document.getElementById('an1r_2');
var a2r_2 = document.getElementById('an2r_2');

if (bank[1].answer == "true"){
    a1_2.className += " plus-btn";
    a1_2.innerHTML = "True";
    a1r_2.innerHTML = "✓ True"
    a2_2.className += " minus-btn";
    a2_2.innerHTML = "False";
    a2r_2.innerHTML = "X False"
    console.log(true);
}else if (bank[1].answer == "false") {
    a1_2.className += " minus-btn";
    a1_2.innerHTML = "True";
    a1r_2.innerHTML = "X True"
    a2_2.className += " plus-btn";
    a2_2.innerHTML = "False";
    a2r_2.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_2.className);

//question3
document.getElementById('q3').innerHTML += bank[2].question;
document.getElementById('exp3').innerHTML += bank[2].explanation;
document.getElementById('q3r').innerHTML += bank[2].question2;
var a1_3 = document.getElementById('an1_3');
var a2_3 = document.getElementById('an2_3');
var a1r_3 = document.getElementById('an1r_3');
var a2r_3 = document.getElementById('an2r_3');

if (bank[2].answer == "true"){
    a1_3.className += " plus-btn";
    a1_3.innerHTML = "True";
    a1r_3.innerHTML = "✓ True"
    a2_3.className += " minus-btn";
    a2_3.innerHTML = "False";
    a2r_3.innerHTML = "X False"
    console.log(true);
}else if (bank[2].answer == "false") {
    a1_3.className += " minus-btn";
    a1_3.innerHTML = "True";
    a1r_3.innerHTML = "X True"
    a2_3.className += " plus-btn";
    a2_3.innerHTML = "False";
    a2r_3.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_3.className);

//question4
document.getElementById('q4').innerHTML += bank[3].question;
document.getElementById('exp4').innerHTML += bank[3].explanation;
document.getElementById('q4r').innerHTML += bank[3].question2;
var a1_4 = document.getElementById('an1_4');
var a2_4 = document.getElementById('an2_4');
var a1r_4 = document.getElementById('an1r_4');
var a2r_4 = document.getElementById('an2r_4');

if (bank[3].answer == "true"){
    a1_4.className += " plus-btn";
    a1_4.innerHTML = "True";
    a1r_4.innerHTML = "✓ True"
    a2_4.className += " minus-btn";
    a2_4.innerHTML = "False";
    a2r_4.innerHTML = "X False"
    console.log(true);
}else if (bank[3].answer == "false") {
    a1_4.className += " minus-btn";
    a1_4.innerHTML = "True";
    a1r_4.innerHTML = "X True"
    a2_4.className += " plus-btn";
    a2_4.innerHTML = "False";
    a2r_4.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_4.className);

//question5
document.getElementById('q5').innerHTML += bank[4].question;
document.getElementById('exp5').innerHTML += bank[4].explanation;
document.getElementById('q5r').innerHTML += bank[4].question2;
var a1_5 = document.getElementById('an1_5');
var a2_5 = document.getElementById('an2_5');
var a1r_5 = document.getElementById('an1r_5');
var a2r_5 = document.getElementById('an2r_5');

if (bank[4].answer == "true"){
    a1_5.className += " plus-btn";
    a1_5.innerHTML = "True";
    a1r_5.innerHTML = "✓ True"
    a2_5.className += " minus-btn";
    a2_5.innerHTML = "False";
    a2r_5.innerHTML = "X False"
    console.log(true);
}else if (bank[4].answer == "false") {
    a1_5.className += " minus-btn";
    a1_5.innerHTML = "True";
    a1r_5.innerHTML = "X True"
    a2_5.className += " plus-btn";
    a2_5.innerHTML = "False";
    a2r_5.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_5.className);

//question6
document.getElementById('q6').innerHTML += bank[5].question;
document.getElementById('exp6').innerHTML += bank[5].explanation;
document.getElementById('q6r').innerHTML += bank[5].question2;
var a1_6 = document.getElementById('an1_6');
var a2_6 = document.getElementById('an2_6');
var a1r_6 = document.getElementById('an1r_6');
var a2r_6 = document.getElementById('an2r_6');

if (bank[5].answer == "true"){
    a1_6.className += " plus-btn";
    a1_6.innerHTML = "True";
    a1r_6.innerHTML = "✓ True"
    a2_6.className += " minus-btn";
    a2_6.innerHTML = "False";
    a2r_6.innerHTML = "X False"
    console.log(true);
}else if (bank[5].answer == "false") {
    a1_6.className += " minus-btn";
    a1_6.innerHTML = "True";
    a1r_6.innerHTML = "X True"
    a2_6.className += " plus-btn";
    a2_6.innerHTML = "False";
    a2r_6.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_6.className);

//question7
document.getElementById('q7').innerHTML += bank[6].question;
document.getElementById('exp7').innerHTML += bank[6].explanation;
document.getElementById('q7r').innerHTML += bank[6].question2;
var a1_7 = document.getElementById('an1_7');
var a2_7 = document.getElementById('an2_7');
var a1r_7 = document.getElementById('an1r_7');
var a2r_7 = document.getElementById('an2r_7');

if (bank[6].answer == "true"){
    a1_7.className += " plus-btn";
    a1_7.innerHTML = "True";
    a1r_7.innerHTML = "✓ True"
    a2_7.className += " minus-btn";
    a2_7.innerHTML = "False";
    a2r_7.innerHTML = "X False"
    console.log(true);
}else if (bank[6].answer == "false") {
    a1_7.className += " minus-btn";
    a1_7.innerHTML = "True";
    a1r_7.innerHTML = "X True"
    a2_7.className += " plus-btn";
    a2_7.innerHTML = "False";
    a2r_7.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_7.className);

//question8
document.getElementById('q8').innerHTML += bank[7].question;
document.getElementById('exp8').innerHTML += bank[7].explanation;
document.getElementById('q8r').innerHTML += bank[7].question2;
var a1_8 = document.getElementById('an1_8');
var a2_8 = document.getElementById('an2_8');
var a1r_8 = document.getElementById('an1r_8');
var a2r_8 = document.getElementById('an2r_8');

if (bank[7].answer == "true"){
    a1_8.className += " plus-btn";
    a1_8.innerHTML = "True";
    a1r_8.innerHTML = "✓ True"
    a2_8.className += " minus-btn";
    a2_8.innerHTML = "False";
    a2r_8.innerHTML = "X False"
    console.log(true);
}else if (bank[7].answer == "false") {
    a1_8.className += " minus-btn";
    a1_8.innerHTML = "True";
    a1r_8.innerHTML = "X True"
    a2_8.className += " plus-btn";
    a2_8.innerHTML = "False";
    a2r_8.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_8.className);

//question9
document.getElementById('q9').innerHTML += bank[8].question;
document.getElementById('exp9').innerHTML += bank[8].explanation;
document.getElementById('q9r').innerHTML += bank[8].question2;
var a1_9 = document.getElementById('an1_9');
var a2_9 = document.getElementById('an2_9');
var a1r_9 = document.getElementById('an1r_9');
var a2r_9 = document.getElementById('an2r_9');

if (bank[8].answer == "true"){
    a1_9.className += " plus-btn";
    a1_9.innerHTML = "True";
    a1r_9.innerHTML = "✓ True"
    a2_9.className += " minus-btn";
    a2_9.innerHTML = "False";
    a2r_9.innerHTML = "X False"
    console.log(true);
}else if (bank[8].answer == "false") {
    a1_9.className += " minus-btn";
    a1_9.innerHTML = "True";
    a1r_9.innerHTML = "X True"
    a2_9.className += " plus-btn";
    a2_9.innerHTML = "False";
    a2r_9.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_9.className);

//question10
document.getElementById('q10').innerHTML += bank[9].question;
document.getElementById('exp10').innerHTML += bank[9].explanation;
document.getElementById('q10r').innerHTML += bank[9].question2;
var a1_10 = document.getElementById('an1_10');
var a2_10 = document.getElementById('an2_10');
var a1r_10 = document.getElementById('an1r_10');
var a2r_10 = document.getElementById('an2r_10');

if (bank[9].answer == "true"){
    a1_10.className += " plus-btn";
    a1_10.innerHTML = "True";
    a1r_10.innerHTML = "✓ True"
    a2_10.className += " minus-btn";
    a2_10.innerHTML = "False";
    a2r_10.innerHTML = "X False"
    console.log(true);
}else if (bank[9].answer == "false") {
    a1_10.className += " minus-btn";
    a1_10.innerHTML = "True";
    a1r_10.innerHTML = "X True"
    a2_10.className += " plus-btn";
    a2_10.innerHTML = "False";
    a2r_10.innerHTML = "✓ False"
    console.log(false);
}
console.log(a2_10.className);