import $ from "jquery";
import { createElementFromHTML } from './utils-service'

export const getSimpleNote = (guitarString, order) => ({
    elementNote: createElementFromHTML(
        `<div id="note-${order}" class="simple-note"></div>`
    ),
    guitarString,
    length: 1, // Por ahora queda en 1, despues veo esto,
    order // Nro de nota. En orden de tocada
});