import $ from "jquery";

import * as notesService from './notes-service';
import { createElementFromHTML } from './utils-service'

export const getSampleTab = () => {
    return createElementFromHTML(
        `
        <div class="sample-tab">

            <div class="string-default string-1">
                <div id="note-1" class="simple-note"></div>
            </div>
            <div class="string-default string-2">
                <div id="note-2" class="simple-note"></div>
                <div class="empty-note"></div>
                <div id="note-3" class="simple-note"></div>
                <div class="empty-note"></div>
            </div>
            <div class="string-default string-3">
                <div id="note-4" class="simple-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
            </div>
            <div class="string-default string-4">
            <div id="note-5" class="simple-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
                <div class="empty-note"></div>
            </div>
            <div class="string-default string-5">
                
            </div>

        </div>
        `
    )
}


/**
 * Checkea si hay presionado un fret y se presiona asterisco. Y checkea si justo ese fret esta sobre una nota
 * Retorna la nota?
 */
export const checkIfPressedNote = (keysMap) => {

    // Al offset de las notas le tengo que restar el tamaño del pad (mas sus margenes, bordes y padding)
    const heightPadAux = $('.pad-container').height() + 9 + 9 + 6 + 1;

    // Teclas que se estan presionando en este instante
    const keysPressed = Object.keys(keysMap)
        .filter(
            k => keysMap[k]
        );

    // Si hay 2 o mas teclas presionandose..
    if (keysPressed && keysPressed.length >= 2) {
        
        // Posicion/es del/os fret/frets presionado/s
        const posiFrets = keysPressed
            .filter(
                kp => kp !== "106"
            )
            .map(
                f => document.getElementsByClassName(
                    `fret-${
                        Number(f) - 50 + 2
                    }`
                )[0].getBoundingClientRect()
            );


        
        // Posicion de las notas de la tab actual
        const notes = Array.from(document.getElementsByClassName('simple-note'))
            .map(
                domElement => ({
                    domElement,
                    rect: domElement.getBoundingClientRect()

                })
            );

        const currentFret = posiFrets[0];

        const noteTaped = notes
            .find(
                pn => checkOverlap(pn.rect, currentFret)
            )

        if (noteTaped) {
            console.log('OK');
        }

    }

}


const checkOverlap = (rect1, rect2) =>
    !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    )





    /*

    // Si hay 2 o mas teclas presionandose..
    if (keysPressed && keysPressed.length >= 2) {
        
        // Posicion/es del/os fret/frets presionado/s
        const posiFrets = keysPressed
            .filter(
                kp => kp !== "106"
            )
            .map(
                f => $(
                    `.fret.fret-${
                        Number(f) - 50 + 2
                    }`
                )
            )
            .map(
                fElement => fElement.position()
            )

        
        
        // Posicion de las notas de la tab actual
        const posiNotes = $('.simple-note').get()
            .map(
                n => $(n).offset()
            )
            .map(
                posi => ({
                    ...posi,
                    top: posi.top - heightPadAux
                })
            )
        

        const currentFret = posiFrets[0];

        const test = posiNotes
            .some(
                pn => 
                    pn.top > (currentFret.top - 20) &&
                    pn.top < (currentFret.top + 20)
            )

        if (test) {
            console.log('OK');
        }

    }


    */