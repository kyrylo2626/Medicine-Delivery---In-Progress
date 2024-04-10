export default function CartForm() {

	return (
		<>
			<div className="cart_data">
				<div className="center_drugs">
					<label className="main_text">Order data:</label><br /><br />
				</div>
                <br />
				<div className="search_row">
					<div className="search_field" style={{width: '100%'}}>
						<label className="main_text" style={{width: '18%'}}>Name:</label>
						<input type="text" id="order_name" className="input_field" placeholder="Type your name"/>
					</div>
				</div>
                <br />
				<div className="search_row">
					<div className="search_field" style={{width: '100%'}}>
						<label className="main_text" style={{width: '18%'}}>Phone:</label>
						<input type="tel" id="order_phone" className="input_field" placeholder="Type your phone"/>
					</div>
				</div>
                <br />
				<div className="search_row">
					<div className="search_field" style={{width: '100%'}}>
						<label className="main_text" style={{width: '18%'}}>Email:</label>
						<input type="email" id="order_email" className="input_field" placeholder="Type your email"/>
					</div>
				</div>
                <br />
				<div className="search_row">
					<div className="search_field" style={{width: '100%'}}>
						<label className="main_text" style={{width: '18%'}}>Address:</label>
						<input type="text" id="order_address" className="input_field" placeholder="Type your address"/>
					</div>
				</div>
                <br />
			</div>
		</>
	)
}