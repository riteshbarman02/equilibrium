import Graph from "./js/graph.js";
var ob2 = document.getElementById("canvas_1");
// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  
  


}).appendTo(ob2);
var rect = two.makeRectangle(245, 80, 100, 70);
var button = document.getElementById('submit');
var button2 = document.getElementById('submit2');
var button3 = document.getElementById('submit3');
var load = two.makeArrow(245, 0, 245, 40);
var statements = two.makeText('Select the direction of Reaction that will',240,300);
statements.size=18;
var statement = two.makeText(' will  oppose the load',240,320);
statement.size=18;
load.linewidth = 3;
var reactionArrow1;
var reactionArrow2;
var reactionArrow3;
var flag;
// Style the rectangle
rect.fill = '#4B9991';
rect.stroke = 'black';
two.update();
// Add an event listener to the button
button.onclick = () => {
  var duration = 1000//Total animation duration in milliseconds
  var startTime = null;
  if (flag == 2){
    two.remove(reactionArrow2);
    reactionArrow1 = two.makeArrow(150, 80, 190, 80);
    reactionArrow1.linewidth = 3;
    reactionArrow1.stroke = 'red';
    two.update();
    flag=1;
    console.log('clicked1')
    
  }
  else if (flag == 3){
    two.remove(reactionArrow3);
    two.update();
    reactionArrow1 = two.makeArrow(150, 80, 190, 80);
    reactionArrow1.linewidth = 3;
    reactionArrow1.stroke = 'red';
    two.update();
    flag=1;
    console.log('clicked2')
  }
  else{
    flag=1;
    two.remove(reactionArrow1);
    reactionArrow1 = two.makeArrow(150, 80, 190, 80);
    reactionArrow1.linewidth = 3;
    reactionArrow1.stroke = 'red';
    console.log('clicked3')
  }
  // Define the animation function
  function animate(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = (timestamp - startTime);
    // Calculate the progress of the animation (between 0 and 1)
    const progress = Math.min(1, elapsedTime / duration);
    rect.translation.y += 5.3 * progress;
    load.translation.y += 5.3 * progress;
    reactionArrow1.translation.y += 5.3*progress;
    // Update the duration text element
    two.update();
    if (progress < 1) {
      // Continue the animation
      requestAnimationFrame(animate);
    } else {
      console.log('Animation complete');
    }
  }
  requestAnimationFrame(animate);
  rect.translation.y = 80;
  load.translation.y = 0;
};
button2.onclick = () => {
  var duration = 1000//Total animation duration in milliseconds
  var startTime = null;
  if (flag == 1){
    two.remove(reactionArrow1);
    reactionArrow2 = two.makeArrow(340, 80, 300, 80);
    reactionArrow2.linewidth = 3;
    reactionArrow2.stroke = 'red';
    two.update();
    flag=2;
    console.log('clicked1')
  }
  else if(flag == 3){
    two.remove(reactionArrow3);
    reactionArrow2 = two.makeArrow(340, 80, 300, 80);
    reactionArrow2.linewidth = 3;
    reactionArrow2.stroke = 'red';
    two.update();
    flag=2;
    console.log('clicked2')
  }
  else{
    two.remove(reactionArrow2);
    reactionArrow2 = two.makeArrow(340, 80, 300, 80);
    reactionArrow2.linewidth = 3;
    reactionArrow2.stroke = 'red';
    console.log('clicked3')
    flag=2;
  }
  // Define the animation function
  function animate(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = (timestamp - startTime);
    // Calculate the progress of the animation (between 0 and 1)
    const progress = Math.min(1, elapsedTime / duration);
    rect.translation.y += 5.3* progress;
    load.translation.y += 5.3* progress;
    reactionArrow2.translation.y += 5.3*progress;
    // Update the duration text element
    two.update();
    if (progress < 1) {
      // Continue the animation
      requestAnimationFrame(animate);
    } else {
      console.log('Animation complete');
    }
  }
  requestAnimationFrame(animate);
  rect.translation.y = 80;
  load.translation.y = 0;
};

button3.onclick = () => {
  if (flag == 1){
    two.remove(reactionArrow1);
    reactionArrow3 = two.makeArrow(245, 160, 245, 120);
    reactionArrow3.linewidth = 3;
    reactionArrow3.stroke = 'red';
    two.update();
    flag=3;
    console.log('clicked1')
  }
  else if (flag == 2){
    two.remove(reactionArrow2);
    reactionArrow3 = two.makeArrow(245, 160, 245, 120);
    reactionArrow3.linewidth = 3;
    reactionArrow3.stroke = 'red';
    two.update();
    flag=3;
    console.log('clicked2')
  }
  else{
    two.remove(reactionArrow3);
    reactionArrow3 = two.makeArrow(245, 160, 245, 120);
    reactionArrow3.linewidth = 3;
    reactionArrow3.stroke = 'red'; 
    two.update();
    flag=3;
    console.log('clicked3')
  }
  rect.translation.y = 80;
  load.translation.y = 0;
  two.update();
};










