import { ShopModule } from '../modules/ShopModule'


export default function ShopPage(props) {

    const {state, setState} = ShopModule();
    const {cart, setCartItem} = props;
        
    return (
        <>
            <div className="shops" >
                <div className='center_element'>
                    <label className="main_text">Shops:</label>
                    <br /><br />
                </div>
                <div id="elements">
                {state.getData &&
                state.getData.stores.map((shop, index) => (
                    <>  
                        <button id={`shop${index}`} key={index} type="button" className="shops_button"
                            onClick={() => {
                                styleChanger(index, state.getData.stores.length);
                                setState(prev => ({ ...prev, postData: shop.id }))
                            }
                        }>{shop.name}</button>
                        <br /><br />
                    </>
                ))}
                </div>
            </div>
                
            {state.getData &&
            state.getData.drugs
            ? <div className="drugs">
                <div className='center_drugs'>
                    <label className="main_text">Drugs:</label>
                    <br /><br />
                </div>
                <div id="elements">
                {state.getData.drugs.filter((row, rowIndex) => 
                    (rowIndex === 0 || rowIndex % 3 === 0))
                    .map((drugRow, rowIndex) => (
                        <div className="items" key={rowIndex}>
                            {state.getData.drugs.filter((item, index) => (Math.floor(index / 3) === rowIndex))
                                .map(drug => (
                                    drug.id !== "empty"
                                    ? <div className="item" key={drug.id}>
                                        <img src={`data:image/jpeg;base64,${drug.image}`} className="main_image" alt="drug" />
                                        <label className="side_text">{drug.name}</label>
                                        <br />
                                        <label className="side_text">{drug.price}$</label>
                                        <br /><br />
                                        <button type="button" className="main_button"
                                            onClick={() => {
                                                drug.order_count = 1;
                                                !cart ? setCartItem([drug]) : setCartItem([...cart, drug])
                                            }
                                        }>Buy</button>
                                    </div>
                                    : <div className="item" />
                                ))
                            }
                        </div>
                    ))
                }
                </div>
            </div>
            : <div className="drugs">
                <div className='select_div'>
                    <label className="select_text">Select a store</label>
                    <br /><br />
                </div>
            </div>
            }
        </>
    )
}



function styleChanger(item_id, shops_len) {
    for (let i = 0; i < shops_len; i++) document.getElementById("shop"+i).className = 'shops_button';
    document.getElementById("shop"+item_id).className = 'select_shop_button';
}