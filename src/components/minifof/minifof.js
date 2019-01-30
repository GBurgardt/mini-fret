// Dependencias
import $ from "jquery";
import { createElementFromHTML } from '../../services/utils-service';
import { getSimpleNote } from '../../services/notes-service';

// minifof imports
import './minifof.scss';
import { minifofHtml } from "./minifof-html";

// HTML / Vista
const vistaMiniFof = createElementFromHTML(
    minifofHtml
);

// On init..
$(function () {
    $("#replace-content").replaceWith(vistaMiniFof)

    // Cuando hace click en play, arranca todo.
    $(".btn-play")[0].addEventListener('click', () => {
        $(".btn-play").remove();

        // Play.. Empieza a moverse todo

        playGame();
    })

    const playGame = () => {

        const noteTest = getSimpleNote();

        $('.guitar-string.string-1')[0]
            .appendChild(
                noteTest.elementNote
            );

        // Movimiento
        noteTest.itIsMoving = true;
    }

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