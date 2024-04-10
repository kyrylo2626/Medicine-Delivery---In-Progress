import { Link, Outlet } from 'react-router-dom';

const LayoutComponent = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav_panel">
                        <Link to="/shop" className="nav_button">Shop</Link>
                        <Link to="/cart" className="nav_button">Cart</Link>
                        <Link to="/shop" className="nav_button">History</Link>
                        <Link to="/shop" className="nav_button">Coupons</Link>
                    </nav>
                </div>
            </header>

            <div className="main">
                <div className="container">
                    <div className="elements">
                        <Outlet />
                    </div>
                </div>
            </div>

            <footer className="footer_field">
                <div className="container">
                    <div className="page_buttons">
                        <div id="footer_content">
                            
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export { LayoutComponent };