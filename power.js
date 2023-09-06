let  base = [/*10, 23, 30, 54, 65, 17, 26, 37, 61, 65, 31, 32, 54, 60, 63, 8, 21, 31, 32, 37, 3, 17, 26, 38, 54, 11, 23, 30, 54, 65, 18, 26, 37, 61, 65, 32, 32, 54, 60, 63, 9, 21, 31, 32, 37, 4, 17, 26, 38, 54, 12, 23, 30, 54, 65, 19, 26, 37, 61, 65, 33, 32, 54, 60, 63, 10, 21, 31, 32, 37, 5, 17, 26, 38, 54, 13, 23, 30, 54, 65, 20, 26, 37, 61, 65, 34, 32, 54, 60, 63, 11, 21, 31, 32, 37, 6, 17, 26, 38, 54, 14, 23, 30, 54, 65, 21, 26, 37, 61, 65, 35, 32, 54, 60, 63, 12, 21, 31, 32, 37, 7, 17, 26, 38, 54, 15, 23, 30, 54, 65, 22, 26, 37, 61, 65, 36, 32, 54, 60, 63, 13, 21, 31, 32, 37, 8, 17, 26, 38, 54, 16, 23, 30, 54, 65, 23, 26, 37, 61, 65, 37, 32, 54, 60, 63, 14, 21, 31, 32, 37, 9, 17, 26, 38, 54, 17, 23, 30, 54, 65, 24, 26, 37, 61, 65, 38, 32, 54, 60, 63, 15, 21, 31, 32, 37, 10, 17, 26, 38, 54, months*/ 18, 23, 30, 54, 65, 25, 26, 37, 61, 65, 39, 32, 54, 60, 63, 16, 21, 31, 32, 37, 11, 17, 26, 38, 54, 19, 23, 30, 54, 65, 26, 26, 37, 61, 65, 40, 32, 54, 60, 63, 17, 21, 31, 32, 37, 12, 17, 26, 38, 54, 20, 23, 30, 54, 65, 27, 26, 37, 61, 65, 41, 32, 54, 60, 63, 18, 21, 31, 32, 37, 13, 17, 26, 38, 54, 21, 23, 30, 54, 65, 28, 26, 37, 61, 65, 42, 32, 54, 60, 63, 19, 21, 31, 32, 37, 14, 17, 26, 38, 54, 22, 23, 30, 54, 65, 29, 26, 37, 61, 65, 43, 32, 54, 60, 63, 20, 21, 31, 32, 37, 15, 17, 26, 38, 54, 23, 23, 30, 54, 65, 30, 26, 37, 61, 65]; 

let turtle = []

function selectTopNumbers() {
  let frequency = {};
  if (!Array.isArray(base)) {
    console.error("Input must be an array");
    return;
  }

  if (!base.forEach) {
    base.forEach = function(callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
      }
    };
  }

  base.forEach(function(number) {
    frequency[number] = frequency[number] ? frequency[number] + 1 : 1;
  });

  let sortedNumbers = Object.keys(frequency).sort(function(a, b) {
    return frequency[b] - frequency[a];
  });

  for (let i = 0; i < 13; i++) {
    turtle.push(parseInt(sortedNumbers[i]));
  }

  console.log(turtle);
};

selectTopNumbers();
console.log(turtle);



const targets = [
  document.getElementById("number1"),
  document.getElementById("number2"),
  document.getElementById("number3"),
  document.getElementById("number4"),
  document.getElementById("number5"),
  document.getElementById("number6")
];
const button = document.getElementById("button");
button.addEventListener("click", startAnimation);
//button.addEventListener("click", slide);




function startAnimation() {
  const glassElements = document.querySelectorAll(".glass-element");
  glassElements.forEach((glassElement, index) => {
    glassElement.style.animationDuration = `${2 - 0.2 * index}s`;
    glassElement.classList.add("animate");
    const targets = glassElement.querySelectorAll("span");
    let final = selectRandomNumbers();
    let animationCounter = 0;
  
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      const animationInterval = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100).toString().padStart(2, "0");
        target.textContent = randomNumber;
        animationCounter = (animationCounter + 1) % 80;
      }, 50);
  
      setTimeout(() => {
        clearInterval(animationInterval);
        target.textContent = final[i];
      }, 1200 * (i + .4));
    }
  });
}



function selectRandomNumbers() {
  let randomNumbers = [];
  let final = [];
  while (final.length < 5) {
    let randomIndex;
    let randomNumber;
    if (final.length < 3) {
      randomIndex = Math.floor(Math.random() * turtle.length);
      randomNumber = turtle[randomIndex];
      if (!final.includes(randomNumber)) {
        final.push(randomNumber);
      }
    } else {
      randomNumber = Math.floor(Math.random() * 69) + 1;
      if (!turtle.includes(randomNumber) && !final.includes(randomNumber)) {
        final.push(randomNumber);
        console.log(final);
      }
    }
  }

  final.push(Math.floor(Math.random() * 25) + 1);

  for (let i = 0; i < final.length; i++) {
    if (final[i] < 10) {
      final[i] = "0" + final[i];
    }
  }

  return final;
}

function slide() {
    document.getElementById("one").style.animationName = "slideInLeft";
    document.getElementById("one").style.animationDuration = "1s";
    document.getElementById("one").style.animationIterationCount = "1";
    document.getElementById("two").style.animationName = "slideInLeft";
    document.getElementById("two").style.animationDuration = "1.3s";
    document.getElementById("two").style.animationIterationCount = "1";
    document.getElementById("three").style.animationName = "slideInLeft";
    document.getElementById("three").style.animationDuration = "1.6s";
    document.getElementById("three").style.animationIterationCount = "1";
    document.getElementById("four").style.animationName = "slideInLeft";
    document.getElementById("four").style.animationDuration = "1.9s";
    document.getElementById("four").style.animationIterationCount = "1";
    document.getElementById("five").style.animationName = "slideInLeft";
    document.getElementById("five").style.animationDuration = "2.2s";
    document.getElementById("five").style.animationIterationCount = "1";
  };
  /*
  function startAnimation() {
  const glassElements = document.querySelectorAll(".glass-element");
  glassElements.forEach((glassElement, index) => {
    glassElement.style.animationDuration = `${2 - 0.2 * index}s`;
    setTimeout(() => {
      glassElement.classList.add("animate");
      const targets = glassElement.querySelectorAll("span");
      let final = selectRandomNumbers();
      let animationCounter = 0;
    
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        const animationInterval = setInterval(() => {
          const randomNumber = Math.floor(Math.random() * 100).toString().padStart(2, "0");
          target.textContent = randomNumber;
          animationCounter = (animationCounter + 1) % 80;
        }, 50 * (index + 1));
    
        setTimeout(() => {
          clearInterval(animationInterval);
          target.textContent = final[i];
        }, 1600 * (i + .4));
      }
    }, 500 * index);
  });
}
*/  