
/**
 * 
 * @param offers type of discount

 */

   export  const applyDiscount = (offers: {type: string, sliceValue?: number, value: number}, totalAmount: number) => {

        switch (offers.type) {
            case 'percentage':

            return {
                price: totalAmount - (totalAmount * offers.value /100) ,
                type: 'percentage'
            }
                
    
            case 'minus':

            return {
                price: totalAmount - offers.value,
                type: 'minus'
            }
                    
            case 'slice':

            const discount = Math.floor(totalAmount / offers.sliceValue) * offers.value

            return {
                price: totalAmount - discount,
                type: 'slice'
            }

            default:
                return
        }
    }
