import modal from './modules/modal'
import three from './modules/threeslider'
import swipeUp from './modules/swipeUp'
import twoSloder from './modules/twoSlider'
import calc from './modules/calc'
// import validateCalc from './modules/validateCalc'
import timer from  './modules/timer'
import form from './modules/form'
import imageZoom from './modules/imageZoom'

modal()
three()
swipeUp()
twoSloder()
calc()
// validateCalc()
timer('1 may 2022')
imageZoom()
form({
    formId: '[name = "action-form"]', 
    someElem: [
        {
            type: 'block',
        }
    ] 
})
formSender({
    formId: '[name = "action-form2"]', 
    someElem: [
        {
            type: 'block',
        }
    ] 
})