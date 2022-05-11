import calculatorCounter from './modules/calculatorCounter'
import formSender from './modules/formSender'
import imageZoom from './modules/imageZoom'
import modal from './modules/modal'
import sliders from './modules/sliders'
import timer from './modules/timer'
import toTop from './modules/toTop'
import menu from './modules/menu'
import formValidator from './modules/formValidator'


sliders()
modal()
toTop()
timer('12 may 2022')
calculatorCounter()
imageZoom()
menu()
formValidator()
const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        
        formSender({
            formId: `form${index}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ] 
        })
    })
})