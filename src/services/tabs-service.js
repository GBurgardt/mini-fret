import $ from "jquery";
import { createElementFromHTML } from './utils-service'

export const getSampleTab = () => {
    return createElementFromHTML(
        `<div 
            class="sample-tab">

        </div>`
    )
}