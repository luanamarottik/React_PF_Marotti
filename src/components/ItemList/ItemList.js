import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = ({items}) => {
    return(
        <div className='ListGroup'>
            {items.map(prod => <ItemDetail key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList