// Dependencias
import $ from "jquery";
import { createElementFromHTML } from '../../services/utils-service';

// SCSS
import './minifof.scss';

// HTML / Vista
const vistaMiniFof = createElementFromHTML(
    `
    <div class="game-container">
        <div class="frets-container">
            <div class="fret fret-1"></div>
            <div class="fret fret-2"></div>
            <div class="fret fret-3"></div>
            <div class="fret fret-4"></div>
            <div class="fret fret-5"></div>
            <div class="fret guitar-pick"></div>
        </div>
    </div>
    `
);

// Monto la vista
$(function () {
    $("#replace-content").replaceWith(vistaMiniFof)
});
