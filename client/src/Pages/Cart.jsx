import React from "react"
import { useCart } from "react-use-cart"

const Cart = () => {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    // emptyCart 
  } = useCart()


  if (isEmpty) return <h1 className='text-center'>Your cart is empty</h1>
  else 
  return (
    <>
      <section>
        <div className='py-4 container'>
          <div className='row justify-center'>
            <div className='col-12'>
              <h5>Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
              <table className='table table-light table-hover m-0'>
                {items.map((item) => (
                  <tr >
                    <td>
                      <img
                        key={item._id}
                        src={item.imageSrc} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.color}</td>
                    <td>{item.countInStock}</td>

                    <td>
                      <button onClick={()=> updateItemQuantity(item._id, item.countInStock + 1)} className="">+</button>
                      <button onClick={()=> updateItemQuantity(item._id, item.countInStock - 1)} className="">-</button>
                      <button onClick={()=> removeItem(item._id)} className="">Remove</button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart