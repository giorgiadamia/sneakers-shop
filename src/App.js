function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="header__left">
                    <img width={40} height={40} src="/img/logo.png" alt=""/>
                    <div className="header__left_info">
                        <h3>Sneakers Shop</h3>
                        <p>The best shoes shop</p>
                    </div>
                </div>
                <ul className="header__right">
                    <li className="header__right_menu">
                        <img width={18} height={18} src="/img/cart.svg" alt=""/>
                        <span>210$</span>
                    </li>
                    <li>
                        <img src="/img/user.svg" alt=""/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>All Sneakers</h1>

                <div className="sneakers">
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneaker"/>
                        <p>Nike Blazer Mid Suede Men's Sneakers</p>
                        <div className="card__bottom">
                            <div>
                                <span>Price:</span>
                                <b>100 $</b>
                            </div>
                            <button>
                                <img src="/img/purchase.svg" alt="Add"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneaker"/>
                        <p>Nike Blazer Mid Suede Men's Sneakers</p>
                        <div className="card__bottom">
                            <div>
                                <span>Price:</span>
                                <b>100 $</b>
                            </div>
                            <button>
                                <img src="/img/purchase.svg" alt="Add"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneaker"/>
                        <p>Nike Blazer Mid Suede Men's Sneakers</p>
                        <div className="card__bottom">
                            <div>
                                <span>Price:</span>
                                <b>100 $</b>
                            </div>
                            <button>
                                <img src="/img/purchase.svg" alt="Add"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneaker"/>
                        <p>Nike Blazer Mid Suede Men's Sneakers</p>
                        <div className="card__bottom">
                            <div>
                                <span>Price:</span>
                                <b>100 $</b>
                            </div>
                            <button>
                                <img src="/img/purchase.svg" alt="Add"/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
