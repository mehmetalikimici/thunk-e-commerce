import { useDispatch, useSelector } from "react-redux"
import { deleteItem, updateItem } from "../redux/actions/basketActions"

const BasketItem = ({item}) => {
  const dispatch = useDispatch()

  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between align-items-center mb-5 text-black">
        <div className="d-flex align-items-center gap-3">
            <img src={item.image} width={60} height={60}/>
            <h4>
                <span>{item.make}</span>
                <span>{item.model}</span>
            </h4>
            <h4 className="text-success">{item.price} ₺</h4>
        </div>
        <div className="d-flex align-items-center gap-3">
            <span>Miktar:{item.amount}</span>
            <button onClick={() => dispatch(updateItem(item))} className="btn btn-sm btn-primary text-light">+</button>
            <button onClick={() => dispatch(deleteItem(item.id))} className="btn btn-sm btn-danger text-light">X</button>
        </div>
    </div>
  )
}

export default BasketItem