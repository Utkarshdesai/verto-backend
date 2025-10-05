const  products  = require("../data/mockdata")




const FetchProducts = async (req,res) => {
    try {
        
     console.log(products)
      
    res.status(200).json({
        products,
        message : 'Product data fetch sucessfully'
    })


    } catch (error) {
         res.status(500).send('Failed to load product data.'); 
    }
}

module.exports = FetchProducts