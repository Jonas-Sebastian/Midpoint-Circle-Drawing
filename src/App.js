import React, { useEffect } from 'react';
import jumpscareImage from './download.jpg'
import jumpscareSound from './JumpScare.mp3'

function jumpScare(restartGame) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "black"; // Overlay color can be adjusted
  overlay.style.opacity = "0"; // Initially transparent

  // Append the overlay to the body
  document.body.appendChild(overlay);

  overlay.style.opacity = "1";

  const jumpScareImage = new Image();
  jumpScareImage.src = jumpscareImage;
  jumpScareImage.style.width = "100vw";
  jumpScareImage.style.height = "100vh";
  jumpScareImage.style.objectFit = "cover";
  overlay.appendChild(jumpScareImage);
  // Play scary sound (optional)
  const jumpScareSound = new Audio(jumpscareSound);
  jumpScareSound.play();
  jumpScareSound.volume = 0.3; //Adjust volume here (0.5 is 50%, 1.0 = 100%)
  
  // Function to remove the jumpscare image after a few seconds
  setTimeout(function () {
    overlay.parentNode.removeChild(overlay);
    jumpScareImage.parentNode.removeChild(jumpScareImage);
    restartGame();
  }, 3000); // Duration of the image in Milliseconds
}

function checkCollision(value, description, game, restartGame) {
  if (value.classList.contains("maze-border")) {
    description.textContent = "You lose the game!";
    game.style.pointerEvents = "none";
    restartGame();
  } else {
    return 0;
  }
}

function checkFinish(value, description, game, restartGame, startLevelTwo, startLevelThree) {
  if (value.classList.contains("finish1")) {
    description.textContent = "Congratulations! You win first level of the game.";
    game.style.pointerEvents = "none";
    startLevelTwo();
  } 
  else if (value.classList.contains("finish2")) {
    description.textContent = "Congratulations! You win second level of the game.";
    game.style.pointerEvents = "none";
    startLevelThree();
  }
  else if (value.classList.contains("end-game")) {
    description.textContent = "Congratulations! You win the game.";
    game.style.pointerEvents = "none";
    jumpScare(restartGame);
  } else {
    return 0;
  }
}

export default function MazeGame() {
  useEffect(() => {
    const game = document.querySelector(".game");
    const levelOne = document.querySelector(".level-one");
    const levelTwo = document.querySelector(".level-two");
    const levelThree = document.querySelector(".level-three");
    const levelNumber = document.querySelector(".level-number");
    const description = document.querySelector(".description");
    const gameBtn = document.querySelector(".game-btn");

    function restartGame() {
      gameBtn.style.display = "inline-block";
      gameBtn.textContent = "Play again!";
      gameBtn.onclick = () => {
        game.style.pointerEvents = "all";
        gameBtn.style.display = "none";
        levelOne.style.display = "block";
        levelTwo.style.display = "none";
        levelThree.style.display = "none";
        levelNumber.textContent = 1;
        description.textContent =
          "Make it to the finish line. You should not touch the border of the maze.";
      };
    }

    function startLevelTwo() {
      gameBtn.style.display = "inline-block";
      gameBtn.textContent = "Level 2";
      gameBtn.onclick = () => {
        game.style.pointerEvents = "all";
        levelNumber.textContent = 2;
        levelOne.style.display = "none";
        levelTwo.style.display = "block";
        levelThree.style.display = "none";
        levelNumber.textContent = 2;
        description.textContent =
          "Make it to the finish line. You should not touch the border of the maze.";
      };
    }

    function startLevelThree() {
      gameBtn.style.display = "inline-block";
      gameBtn.textContent = "Level 3";
      gameBtn.onclick = () => {
        game.style.pointerEvents = "all";
        levelNumber.textContent = 3;
        levelOne.style.display = "none";
        levelTwo.style.display = "none";
        levelThree.style.display = "block";
        levelNumber.textContent = 3;
        description.textContent =
          "Make it to the finish line. You should not touch the border of the maze.";
      };
    }

    window.addEventListener("mousemove", (e) => {
      checkCollision(e.target, description, game, restartGame);
      checkFinish(e.target, description, game, restartGame, startLevelTwo, startLevelThree);
    });
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <section>
      <div className="content">
        <h2 className="level-title">
          Level <span className="level-number">1</span>
        </h2>
        <p className="description">
          Make it to the finish line. You should not touch the border of the
          maze.
        </p>
        <button className="game-btn">Level 2</button>
      </div>
      <div className="game">
        <svg class="level-one" width="820pt" height="380pt" viewBox="0 0 820 380" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          {/* Maze 1 */}
          <g transform="translate(0,372)scale(.075,.075)">
            <path transform="translate(50,50)"  d="M 390 -4590 l -80 0 0 20 0 20 -20 0 -20 0 0 25 0 25 20 0 20 0 0 20 0 20 60 0 60 0 0 15 0 15 -80 0 -80 0 0 20 0 20 85 0 85 0 0 -15 0 -15 15 0 15 0 0 -25 0 -25 -14 0 -14 0 -5 -20 -5 -20 -56 0 -56 0 0 -15 0 -15 75 0 75 0 0 -25 0 -25 -80 0 z M 600 -4590 l -100 0 0 25 0 25 35 0 35 0 0 75 0 75 25 0 25 0 0 -75 0 -75 40 0 40 0 0 -25 0 -25 -100 0 z M 821 -4590 l -61 0 0 20 0 20 -20 0 -20 0 0 80 0 80 25 0 25 0 0 -35 0 -35 55 0 55 0 0 35 0 35 20 0 20 0 0 -80 0 -80 -14 0 -14 0 -5 -20 -5 -20 -61 0 z m 4 50 l 55 0 0 15 0 15 -55 0 -55 0 0 -15 0 -15 55 0 z M 1030 -4590 l -80 0 0 100 0 100 25 0 25 0 0 -35 0 -35 50 0 50 0 0 35 0 35 25 0 25 0 0 -40 0 -40 -20 0 -20 0 0 -15 0 -15 20 0 20 0 0 -25 0 -25 -20 0 -20 0 0 -20 0 -20 -80 0 z m 20 50 l 50 0 0 15 0 15 -50 0 -50 0 0 -15 0 -15 50 0 z M 1280 -4588 l -96 -3 -7 7 -7 7 0 19 0 18 40 0 40 0 0 75 0 75 25 0 25 0 0 -75 0 -75 41 0 40 0 -3 -22 -3 -23 -95 -3 z " fill="white"/>
            <path class="maze-border" d="M 7397 -3990 c -1938 0 -3527 3 -3530 7 -4 3 -7 642 -7 1420 l 0 1413 -1245 0 -1245 0 0 -1155 0 -1155 -60 0 -60 0 0 1215 0 1215 1368 -2 1367 -3 3 -1413 2 -1412 3405 0 3405 0 0 1870 0 1870 -430 0 -430 0 -2 -1368 -3 -1367 -2475 0 -2475 0 -3 1367 -2 1368 -2320 0 -2320 0 0 -1670 0 -1670 -65 0 -65 0 0 1730 0 1730 2450 0 2450 0 0 -1365 0 -1365 2350 0 2350 0 0 1365 0 1365 555 0 555 0 0 -1995 0 -1995 -3523 0 z " fill="#007fff"/>
            <path fill-rule="evenodd" id="path1" d="M 7395 -3860 l -3405 0 0 1415 0 1415 -1370 0 -1370 0 0 -1210 0 -1210 -455 0 -455 0 0 1665 0 1665 2320 0 2320 0 0 -1370 0 -1370 2480 0 2480 0 0 1370 0 1370 430 0 430 0 0 -1870 0 -1870 -3405 0 z "/>
          </g>

          {/* Start Box */}
          <rect width="120" height="120" fill="black" />
          
          {/* Start Text */}
          <g transform="translate(0,390)scale(.075,.075)">
            <path d="M 390 -4590 l -80 0 0 20 0 20 -20 0 -20 0 0 25 0 25 20 0 20 0 0 20 0 20 60 0 60 0 0 15 0 15 -80 0 -80 0 0 20 0 20 85 0 85 0 0 -15 0 -15 15 0 15 0 0 -25 0 -25 -14 0 -14 0 -5 -20 -5 -20 -56 0 -56 0 0 -15 0 -15 75 0 75 0 0 -25 0 -25 -80 0 z M 600 -4590 l -100 0 0 25 0 25 35 0 35 0 0 75 0 75 25 0 25 0 0 -75 0 -75 40 0 40 0 0 -25 0 -25 -100 0 z M 821 -4590 l -61 0 0 20 0 20 -20 0 -20 0 0 80 0 80 25 0 25 0 0 -35 0 -35 55 0 55 0 0 35 0 35 20 0 20 0 0 -80 0 -80 -14 0 -14 0 -5 -20 -5 -20 -61 0 z m 4 50 l 55 0 0 15 0 15 -55 0 -55 0 0 -15 0 -15 55 0 z M 1030 -4590 l -80 0 0 100 0 100 25 0 25 0 0 -35 0 -35 50 0 50 0 0 35 0 35 25 0 25 0 0 -40 0 -40 -20 0 -20 0 0 -15 0 -15 20 0 20 0 0 -25 0 -25 -20 0 -20 0 0 -20 0 -20 -80 0 z m 20 50 l 50 0 0 15 0 15 -50 0 -50 0 0 -15 0 -15 50 0 z M 1280 -4588 l -96 -3 -7 7 -7 7 0 19 0 18 40 0 40 0 0 75 0 75 25 0 25 0 0 -75 0 -75 41 0 40 0 -3 -22 -3 -23 -95 -3 z " fill="white"/>
          </g>

          {/* Finish Box */}
          <rect class="finish1" x="745.4" y="294" width="64.6" height="70" fill="#C0C0C0" />
        </svg>
        

        <svg class="level-two" width="1091" height="528" viewBox="0 0 1091 528" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1_18:35" maskUnits="userSpaceOnUse" x="41" y="0" width="1050" height="528" fill="black">
            <rect fill="white" x="41" width="1050" height="528" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1080 11H977V232H857L806 232V283V361H660V69V32V18H331L280 18V69V216V267H331L419 267V465.07L103 465.07V136H52V516H90.1406V516.07L470.141 516.07V465.07H470V267V216H331V69L609 69V361V412L660 412L854 412V410H857V283H977H1054H1080V11Z" />
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1080 11H977V232H857L806 232V283V361H660V69V32V18H331L280 18V69V216V267H331L419 267V465.07L103 465.07V136H52V516H90.1406V516.07L470.141 516.07V465.07H470V267V216H331V69L609 69V361V412L660 412L854 412V410H857V283H977H1054H1080V11Z" fill="black" />
          <path class="maze-border" d="M977 11V0H966V11H977ZM1080 11H1091V0H1080V11ZM977 232V243H988V232H977ZM857 232V243V232ZM806 232V221H795V232H806ZM806 361V372H817V361H806ZM660 361H649V372H660V361ZM660 18H671V7.00003H660V18ZM331 18V29V18ZM280 18V7.00001L269 7.00001V18H280ZM280 267H269V278H280V267ZM331 267V278V267ZM419 267H430V256H419V267ZM419 465.07V476.07H430V465.07H419ZM103 465.07H92V476.07H103V465.07ZM103 136H114V125H103V136ZM52 136V125H41V136H52ZM52 516H41V527H52V516ZM90.1406 516H101.141V505H90.1406V516ZM90.1406 516.07H79.1406V527.07L90.1406 527.07V516.07ZM470.141 516.07V527.07H481.141V516.07H470.141ZM470.141 465.07H481.141V454.07H470.141V465.07ZM470 465.07H459V476.07H470V465.07ZM470 216H481V205H470V216ZM331 216H320V227H331V216ZM331 69V58H320V69H331ZM609 69H620V58H609V69ZM609 412H598V423H609V412ZM660 412V423V412ZM854 412V423H865V412H854ZM854 410V399H843V410H854ZM857 410V421H868V410H857ZM857 283V272H846V283H857ZM1080 283V294H1091V283H1080ZM977 22H1080V0H977V22ZM988 232V11H966V232H988ZM857 243H977V221H857V243ZM806 243L857 243V221L806 221V243ZM817 283V232H795V283H817ZM817 361V283H795V361H817ZM660 372H806V350H660V372ZM649 69V361H671V69H649ZM649 32V69H671V32H649ZM649 18V32H671V18H649ZM331 29H660V7.00003H331V29ZM280 29L331 29V7.00003L280 7.00001V29ZM291 69V18H269V69H291ZM291 216V69H269V216H291ZM291 267V216H269V267H291ZM331 256H280V278H331V256ZM419 256L331 256V278L419 278V256ZM430 465.07V267H408V465.07H430ZM103 476.07L419 476.07V454.07L103 454.07V476.07ZM114 465.07V136H92V465.07H114ZM103 125H52V147H103V125ZM41 136V516H63V136H41ZM52 527H90.1406V505H52V527ZM101.141 516.07V516H79.1406V516.07H101.141ZM470.141 505.07L90.1406 505.07V527.07H470.141V505.07ZM459.141 465.07V516.07H481.141V465.07H459.141ZM470 476.07H470.141V454.07H470V476.07ZM459 267V465.07H481V267H459ZM459 216V267H481V216H459ZM331 227H470V205H331V227ZM320 69V216H342V69H320ZM609 58L331 58V80L609 80V58ZM620 361V69H598V361H620ZM620 412V361H598V412H620ZM660 401L609 401V423L660 423V401ZM854 401L660 401V423L854 423V401ZM843 410V412H865V410H843ZM857 399H854V421H857V399ZM846 283V410H868V283H846ZM977 272H857V294H977V272ZM1054 272H977V294H1054V272ZM1080 272H1054V294H1080V272ZM1069 11V283H1091V11H1069Z" fill="#007fff" mask="url(#path-1-outside-1_18:35)" />
          <rect y="11" width="155" height="150" fill="black" />
          <rect class="finish2" x="977" y="11" width="103" height="73" fill="#C0C0C0" />
          <g transform="translate(15,420)scale(.075,.075)">
            <path d="M 390 -4590 l -80 0 0 20 0 20 -20 0 -20 0 0 25 0 25 20 0 20 0 0 20 0 20 60 0 60 0 0 15 0 15 -80 0 -80 0 0 20 0 20 85 0 85 0 0 -15 0 -15 15 0 15 0 0 -25 0 -25 -14 0 -14 0 -5 -20 -5 -20 -56 0 -56 0 0 -15 0 -15 75 0 75 0 0 -25 0 -25 -80 0 z M 600 -4590 l -100 0 0 25 0 25 35 0 35 0 0 75 0 75 25 0 25 0 0 -75 0 -75 40 0 40 0 0 -25 0 -25 -100 0 z M 821 -4590 l -61 0 0 20 0 20 -20 0 -20 0 0 80 0 80 25 0 25 0 0 -35 0 -35 55 0 55 0 0 35 0 35 20 0 20 0 0 -80 0 -80 -14 0 -14 0 -5 -20 -5 -20 -61 0 z m 4 50 l 55 0 0 15 0 15 -55 0 -55 0 0 -15 0 -15 55 0 z M 1030 -4590 l -80 0 0 100 0 100 25 0 25 0 0 -35 0 -35 50 0 50 0 0 35 0 35 25 0 25 0 0 -40 0 -40 -20 0 -20 0 0 -15 0 -15 20 0 20 0 0 -25 0 -25 -20 0 -20 0 0 -20 0 -20 -80 0 z m 20 50 l 50 0 0 15 0 15 -50 0 -50 0 0 -15 0 -15 50 0 z M 1280 -4588 l -96 -3 -7 7 -7 7 0 19 0 18 40 0 40 0 0 75 0 75 25 0 25 0 0 -75 0 -75 41 0 40 0 -3 -22 -3 -23 -95 -3 z " fill="white"/>
          </g>
        </svg>


        <svg class="level-three" width="900pt" height="675pt" viewBox="0 0 900 675" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          {/* Maze 3*/}
          <g transform="translate(0,500)scale(.075,.075)">
            <path class="maze-border" d="M 6960 -6260 l -4560 0 0 605 0 605 65 0 65 0 0 -540 0 -540 1080 0 1080 0 0 810 0 810 -440 0 -440 0 0 -485 0 -485 -65 0 -65 0 0 880 0 880 -455 0 -455 0 0 65 0 65 215 0 215 0 0 785 0 785 -295 0 -295 0 0 65 0 65 295 0 295 0 0 165 0 165 65 0 65 0 0 -1015 0 -1015 240 0 240 0 0 -395 0 -395 505 0 505 0 0 -875 0 -875 865 0 865 0 0 345 0 345 -565 0 -565 0 0 65 0 65 565 0 565 0 0 925 0 925 410 0 410 0 0 -65 0 -65 -345 0 -345 0 0 -860 0 -860 625 0 625 0 0 -65 0 -65 -625 0 -625 0 0 -345 0 -345 1075 0 1075 0 0 865 0 865 65 0 65 0 0 -865 0 -865 1235 0 1235 0 0 770 0 770 -645 0 -645 0 0 65 0 65 645 0 645 0 0 1270 0 1270 -1115 0 -1115 0 0 -260 0 -260 725 0 725 0 0 -800 0 -800 -65 0 -65 0 0 735 0 735 -660 0 -660 0 0 -350 0 -350 -65 0 -65 0 0 675 0 675 -380 0 -380 0 0 65 0 65 1560 0 1560 0 0 360 0 360 -1865 0 -1865 0 0 -430 0 -430 -395 0 -395 0 0 -380 0 -380 585 0 585 0 0 -75 0 -75 280 0 280 0 0 -65 0 -65 -280 0 -280 0 0 -360 0 -360 780 0 780 0 0 305 0 305 65 0 65 0 0 -940 0 -940 330 0 330 0 0 -65 0 -65 -330 0 -330 0 0 -195 0 -195 595 0 595 0 0 295 0 295 65 0 65 0 0 -360 0 -360 -725 0 -725 0 0 895 0 895 -780 0 -780 0 0 -495 0 -495 -65 0 -65 0 0 130 0 130 -325 0 -325 0 0 65 0 65 325 0 325 0 0 800 0 800 -585 0 -585 0 0 510 0 510 395 0 395 0 0 365 0 365 -745 0 -745 0 0 -875 0 -875 -160 0 -160 0 0 -845 0 -845 -65 0 -65 0 0 845 0 845 -385 0 -385 0 0 -455 0 -455 -65 0 -65 0 0 455 0 455 -355 0 -355 0 0 65 0 65 510 0 510 0 0 565 0 565 65 0 65 0 0 -565 0 -565 390 0 390 0 0 810 0 810 -900 0 -900 0 0 -525 0 -525 -65 0 -65 0 0 525 0 525 -925 0 -925 0 0 -485 0 -485 -65 0 -65 0 0 485 0 485 -398 -2 -397 -3 -3 -802 -2 -803 660 0 660 0 0 -65 0 -65 -660 0 -660 0 0 -800 0 -800 405 0 405 0 0 415 0 415 65 0 65 0 0 -415 0 -415 485 0 485 0 0 -65 0 -65 -955 0 -955 0 0 -780 0 -780 -45 0 -45 0 0 2560 0 2560 5185 0 5185 0 0 -2640 0 -2640 -4560 0 z " fill="#007fff"/>
            <path d="M 1775 -6260 l -625 0 0 80 0 80 45 0 45 0 0 780 0 780 955 0 955 0 0 65 0 65 -485 0 -485 0 0 415 0 415 -65 0 -65 0 0 -415 0 -415 -405 0 -405 0 0 800 0 800 660 0 660 0 0 65 0 65 -660 0 -660 0 0 805 0 805 400 0 400 0 0 -485 0 -485 65 0 65 0 0 485 0 485 925 0 925 0 0 -525 0 -525 65 0 65 0 0 525 0 525 900 0 900 0 0 -810 0 -810 -390 0 -390 0 0 565 0 565 -65 0 -65 0 0 -565 0 -565 -510 0 -510 0 0 -65 0 -65 355 0 355 0 0 -455 0 -455 65 0 65 0 0 455 0 455 385 0 385 0 0 -845 0 -845 65 0 65 0 0 845 0 845 160 0 160 0 0 875 0 875 745 0 745 0 0 -365 0 -365 -395 0 -395 0 0 -510 0 -510 585 0 585 0 0 -800 0 -800 -325 0 -325 0 0 -65 0 -65 325 0 325 0 0 -130 0 -130 65 0 65 0 0 495 0 495 780 0 780 0 0 -895 0 -895 725 0 725 0 0 360 0 360 -65 0 -65 0 0 -295 0 -295 -595 0 -595 0 0 195 0 195 330 0 330 0 0 65 0 65 -330 0 -330 0 0 940 0 940 -65 0 -65 0 0 -305 0 -305 -780 0 -780 0 0 360 0 360 280 0 280 0 0 65 0 65 -280 0 -280 0 0 75 0 75 -585 0 -585 0 0 380 0 380 395 0 395 0 0 430 0 430 1865 0 1865 0 0 -360 0 -360 -1560 0 -1560 0 0 -65 0 -65 380 0 380 0 0 -675 0 -675 65 0 65 0 0 350 0 350 660 0 660 0 0 -735 0 -735 65 0 65 0 0 800 0 800 -725 0 -725 0 0 260 0 260 1115 0 1115 0 0 -1270 0 -1270 -645 0 -645 0 0 -65 0 -65 645 0 645 0 0 -770 0 -770 -1235 0 -1235 0 0 865 0 865 -65 0 -65 0 0 -865 0 -865 -1075 0 -1075 0 0 345 0 345 625 0 625 0 0 65 0 65 -625 0 -625 0 0 860 0 860 345 0 345 0 0 65 0 65 -410 0 -410 0 0 -925 0 -925 -565 0 -565 0 0 -65 0 -65 565 0 565 0 0 -345 0 -345 -865 0 -865 0 0 875 0 875 -505 0 -505 0 0 395 0 395 -240 0 -240 0 0 1015 0 1015 -65 0 -65 0 0 -165 0 -165 -295 0 -295 0 0 -65 0 -65 295 0 295 0 0 -785 0 -785 -215 0 -215 0 0 -65 0 -65 455 0 455 0 0 -880 0 -880 65 0 65 0 0 485 0 485 440 0 440 0 0 -810 0 -810 -1080 0 -1080 0 0 540 0 540 -65 0 -65 0 0 -605 0 -605 -625 0 z "/>
          </g>

          {/* Start Box */}
          <rect x="86.275" y="30.5" width="93" height="90" fill="black" />

          {/* Finish Box */}
          <rect class="end-game" x="797.25" y="365.7" width="60" height="54.1" fill="#C0c0c0" />

         {/* Start Text */}
          <g transform="translate(80,395)scale(.07,.07)">
            <path d="M 390 -4590 l -80 0 0 20 0 20 -20 0 -20 0 0 25 0 25 20 0 20 0 0 20 0 20 60 0 60 0 0 15 0 15 -80 0 -80 0 0 20 0 20 85 0 85 0 0 -15 0 -15 15 0 15 0 0 -25 0 -25 -14 0 -14 0 -5 -20 -5 -20 -56 0 -56 0 0 -15 0 -15 75 0 75 0 0 -25 0 -25 -80 0 z M 600 -4590 l -100 0 0 25 0 25 35 0 35 0 0 75 0 75 25 0 25 0 0 -75 0 -75 40 0 40 0 0 -25 0 -25 -100 0 z M 821 -4590 l -61 0 0 20 0 20 -20 0 -20 0 0 80 0 80 25 0 25 0 0 -35 0 -35 55 0 55 0 0 35 0 35 20 0 20 0 0 -80 0 -80 -14 0 -14 0 -5 -20 -5 -20 -61 0 z m 4 50 l 55 0 0 15 0 15 -55 0 -55 0 0 -15 0 -15 55 0 z M 1030 -4590 l -80 0 0 100 0 100 25 0 25 0 0 -35 0 -35 50 0 50 0 0 35 0 35 25 0 25 0 0 -40 0 -40 -20 0 -20 0 0 -15 0 -15 20 0 20 0 0 -25 0 -25 -20 0 -20 0 0 -20 0 -20 -80 0 z m 20 50 l 50 0 0 15 0 15 -50 0 -50 0 0 -15 0 -15 50 0 z M 1280 -4588 l -96 -3 -7 7 -7 7 0 19 0 18 40 0 40 0 0 75 0 75 25 0 25 0 0 -75 0 -75 41 0 40 0 -3 -22 -3 -23 -95 -3 z " fill="white"/>
          </g>
        </svg>
      </div>
    </section>
  );
}
