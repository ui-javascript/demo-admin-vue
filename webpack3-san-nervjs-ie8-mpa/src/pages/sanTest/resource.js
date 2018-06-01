import imgSrc from "assets/images/super.jpg"
import $ from "jquery"

let img = (`
    <div>
        <img src="${imgSrc}" alt="hhhhh">
    </div>
`);

$('body').append(img)
