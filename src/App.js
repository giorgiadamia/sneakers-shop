function App() {
    return (
        <div className="wrapper">
            <div className="overlay">
                <div className="drawer">
                    <h2>Cart</h2>

                    <div className="cart__item">
                        <img className="cart__item_image" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                        <div className="cart__item_description">
                            <p>Nike Blazer Mid Suede Men's Sneakers</p>
                            <b>100$</b>
                        </div>
                        <img className="cart__item_remove" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>

                    <div className="cart__item">
                        <img className="cart__item_image" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                        <div className="cart__item_description">
                            <p>Nike Blazer Mid Suede Men's Sneakers</p>
                            <b>100$</b>
                        </div>
                        <img className="cart__item_remove" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>
            </div>

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
                <div className="search-block">
                    <h1>All Sneakers</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Search..."/>
                    </div>
                </div>

                <div className="sneakers">
                    <div className="card">
                        <div className="card__favorite">
                            <img src="/img/heart-unliked.svg" alt="Unliked"/>
                        </div>
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
