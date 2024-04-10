import { useEffect } from 'react';
import CartForm from './CartForm';
import { CartModule } from '../modules/CartModule'


export default function CartPage(props) {

	const {state, setState} = CartModule();
	const {cart, setCartItem} = props;
	useEffect(() => getTotalPrice(cart, setState), [cart, setState])

	return (
		<>	
			{
				cart.length !== 0
				? <>
					<CartForm />

					<div className="cart_items">
						<div className="center_drugs">
							<label className="main_text">Order list:</label>
							<br /><br />
						</div>

						<div id="elements" style={{height: '55vh'}}>
							{cart.map((item, index) => (
							<>
							<div className="order_list" key={index}>
								<div style={{width: '150px', height: '150px'}}>
									<img src={`data:image/jpeg;base64,${item.image}`} className="cart_image" alt="drug" />
								</div>
								<div className="cart_item">
									<label className="main_text">{item.name}</label>
									<br />
									<label className="main_text">Price: {item.price}$</label>
									<br /><br />
									<div className="order_count_items">
										<input type="number" onChange={
											(evnt) => {
												cart[index].order_count = Number(evnt.target.value)
												setCartItem(cart)
												getTotalPrice(cart, setState)
											}
										} defaultValue='1' id={`order_name${item.id}`} className="cart_input"/>
									</div>
								</div>
							</div>
							<br /><br />
							</>
							))}
						</div>

						<div className="order">
							<label className="main_text">Total price: {state.totalPrice}$</label>
							<button onClick={() => {
								cart.length !== 0
								? buyAction(cart, setState)
								: console.log(5)
								}} type="button" className="main_button">Buy</button>
						</div>
					</div>
				</>
				: <>
					<div style={{width: '100%'}}>
						<div className='select_div' style={{marginTop: '17%'}}>
							<label className="select_text">Cart is empty</label>
						</div>
					</div>
				</>
			}
		</>
	)
}



function buyAction(cart, setState) {
	let order = {};

	try {
		order.data = {
			name: document.getElementById('order_name').value,
			phone: document.getElementById('order_phone').value,
			email: document.getElementById('order_email').value,
			address: document.getElementById('order_address').value
		}
	} catch (error) {
		
	}
	
	order.items = [];
	cart.forEach(item => {
		if (item.order_count !== 0) {
			order.items.push(
				{
					id: item.id,
					order_count: item.order_count
				}
			)
		}
	})

	setState(prev => ({ ...prev, postData: order }));
}



function getTotalPrice(cart, setState) {
	let sum = 0;
	if (cart.length !== 0) cart.forEach(item => sum += (item.price * item.order_count));
	setState(prev => ({ ...prev, totalPrice: sum }))
}