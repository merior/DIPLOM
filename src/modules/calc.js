import { animate } from './helper'

const calc = () => {
    const calcType = document.getElementById('calc-type')
    const calcMaterial = document.getElementById('calc-type-material')
    const calcSquare = document.getElementById('calc-input')
    const total = document.getElementById('calc-total')
    
    console.log(total)
    // let count = 0
    // let intervalID

    

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value
        const calcSquareValue = calcSquare.value

        let totalValue = 0
        

        

        if (calcType.value && calcSquare.value){
            totalValue = calcSquareValue * calcTypeValue * calcMaterialValue

            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    total.placeholder = Math.round(totalValue * progress)
                }
              });
            
        } 
        else{
            totalValue = 0
        }
        


        
        
    }

    document.addEventListener('change', (e) => {
        if ( e.target === calcSquare ||
            e.target === calcType || e.target === calcMaterial){

                countCalc()
        }
    })
}
export default calc