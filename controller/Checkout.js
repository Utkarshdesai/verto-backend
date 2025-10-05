
const CheckoutCart = async(req,res) => 
{
     console.log('requet got')
   try {
       
      
       const item  = req.body 
      

       hasEmptyItem = item.some( (item) => item.quantity === 0)
       console.log(hasEmptyItem)

       if(hasEmptyItem)
       {
         return res.status(404).json({ 
            success: false,
            message: 'Add item to cart' 
        });
       }

       

      
     console.log('Order received:', item);

       //send response
       res.json({
        success: true,
        
        message: 'Order processed successfully',
       
    });


    } catch (error) {
        
        res.status(500).json({ 
            success: false,
            message: 'Failed to checkout product' 
        });
    
    }
}

module.exports = CheckoutCart