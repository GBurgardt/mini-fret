// Dependencias
import $ from "jquery";
import { createElementFromHTML } from '../../services/utils-service';
import * as notesService from '../../services/notes-service';
import * as tabsService from '../../services/tabs-service';

// minifof imports
import './minifof.scss';
import { minifofHtml } from "./minifof-html";

// HTML / Vista
const vistaMiniFof = createElementFromHTML(
    minifofHtml
);

// On init..
$(function () {

    ////////////////////////////////////////////////////////
    //////////////////////// Init //////////////////////////
    ////////////////////////////////////////////////////////

    // Estado del juego
    let state;

    // Id del intervalo (game loop) principal
    let mainIntervalId;

    // Tab actual (va a ser un super div largo)
    let currentTab;

    /**
     * Inicializa eventos y otros
     */
    const init = () => {
        //////// Eventos ////////
        $("#replace-content").replaceWith(vistaMiniFof)

        // Cuando hace click en play, arranca todo.
        $(".btn-play")[0].addEventListener('click', () => {
            const currentText = $(".btn-play")[0] && $(".btn-play")[0].firstElementChild ? 
                $(".btn-play")[0].firstElementChild.textContent : null;

            if (currentText && currentText === 'Play') {
                state = play;
                $(".btn-play")[0].firstElementChild.textContent = 'Pause';
            } else {
                state = paused;
                $(".btn-play")[0].firstElementChild.textContent = 'Play';
            }
        });

        // Llamo a setup para inicializar todo
        setup(null);
    }

    ////////////////////////////////////////////////////////
    ////////////////////// End Init ////////////////////////
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    ///////////////////// Life Cycle ///////////////////////
    ////////////////////////////////////////////////////////

    /**
     * Initialize the game sprites, set the game `state` to `play`
     * and start the 'gameLoop'
     */
    const setup = () => {

        // Cargo la tab elegida (por el momento dejo una fija)
        loadTab();

        // Arranco el loop principal
        gameLoop(null);

    }

    /**
     * Runs the current game `state` in a loop and renders the sprites
     * @param {*} delta 
     */
    const gameLoop = (delta) => {

        // Por ahora dejo un setInterval
        mainIntervalId = setInterval(() => {
            state && 
                state(delta);
        }, 200);
    }

    const play = (delta) => {
        console.log('play');
    }

    const paused = (delta) => {
        console.log('paused');
    }

    /**
     * All the code that should run at the end of the game
     */
    const end = () => { }

    ////////////////////////////////////////////////////////
    /////////////////// End Life Cycle /////////////////////
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    ////////////////// Others functions ////////////////////
    ////////////////////////////////////////////////////////

    /**
     * Carga la tab elegida. Creo una tab completa en un div y voy moviendo la tab completa?
     */
    const loadTab = () => {
        console.log('loadTab');

        currentTab = tabsService.getSampleTab();

        vistaMiniFof.appendChild(currentTab);

        debugger;

        // Test..
        // const noteTest = notesService.getSimpleNote();

        // $('.guitar-string.string-1')[0]
        //     .appendChild(
        //         noteTest.elementNote
        //     );

        // noteTest.itIsMoving = true;
    }

    ////////////////////////////////////////////////////////
    //////////////// End Others functions //////////////////
    ////////////////////////////////////////////////////////

    // Inicializo
    init();

});




// Evento 'keydown'
document.addEventListener(
    'keydown',
    e => {
        var keycode = e.keyCode;

        if (
            keycode === 49 ||
            keycode === 50 ||
            keycode === 51 ||
            keycode === 52 ||
            keycode === 53
        ) {
            $(
                `.fret.fret-${
                keycode - 50 + 2
                }`
            ).addClass('pressed');
        }
    },
    false
);

// Evento 'keyup'
document.addEventListener(
    'keyup',
    e => {
        var keycode = e.keyCode;

        if (
            keycode === 49 ||
            keycode === 50 ||
            keycode === 51 ||
            keycode === 52 ||
            keycode === 53
        ) {
            $(
                `.fret.fret-${
                keycode - 50 + 2
                }`
            ).removeClass('pressed')
        }
    },
    false
);










/* Interesting example
//Define any variables that are used in more than one function
let cat, state;

function setup() {

  //Create the `cat` sprite 
  cat = new Sprite(resources["images/cat.png"].texture);
  cat.y = 96; 
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  //Set the game state
  state = play;
 
  //Start the game loop 
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

  //Update the current game state:
  state(delta);
}

function play(delta) {

  //Move the cat 1 pixel to the right each frame
  cat.vx = 1
  cat.x += cat.vx;
}

*/