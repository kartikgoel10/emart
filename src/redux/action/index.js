// adding items to cart
export const addCart = (product) => {
    return{
        type : "ADDCART",
        payload : product
    }
}

// deleting item in cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}