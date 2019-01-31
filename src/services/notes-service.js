import $ from "jquery";
import { createElementFromHTML } from './utils-service'

export const getSimpleNote = () => ({
    elementNote: createElementFromHTML(
        `<div class="simple-note"></div>`
    ),
    itIsMoving: false
});


// $(function () {

    // setInterval(() => {
    //     const notes = $(".simple-note");
        
    //     if (notes && notes.length > 0) {
    //         notes
    //             .css(
    //                 'top', 
    //                 '+=2'
    //             )
                
    //     }

    // }, 25);

// })