import { useSelector, useDispatch } from "react-redux";
import { setItemsInCart,getItemsInCart } from "./redux/cartSlice";

export default function Home() {
  const itemsInCart: any = useSelector(getItemsInCart);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    dispatch(setItemsInCart(parseInt(itemsInCart) + 1))
  }

  return (
    <>
      <h2>
        Items in Cart : {itemsInCart}
      </h2>
      <button value="Add" type="button" onClick={addItemsToCart}>
        Add
      </button>
    </>
  )
}