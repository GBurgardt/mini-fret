// Dependencias
import $ from "jquery";
import { createElementFromHTML } from '../../services/utils-service';

// SCSS
import './minifof.scss';

// HTML / Vista
const vistaMiniFof = createElementFromHTML(
    `
    <div class="guitar-string">
        
    </div>
    `
);

// Monto la vista
$(function () {
    $("#replace-content").replaceWith(vistaMiniFof)
});
