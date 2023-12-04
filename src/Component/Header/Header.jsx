import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
            <header class="header_wrap fixed-top header_with_topbar">
                <div class="top-header">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <div class="lng_dropdown me-2">
                                        <select name="countries" class="custome_select">
                                            <option value='en' style={{ backgroundImage: "url('assets/images/logo/logoanh.png')" }} data-title="English">English</option>
                                            <option value='indo' style={{ backgroundImage: "url('assets/images/logo/logoindo.png')" }} data-title="Indonesia">Indonesia</option>
                                            <option value='us' style={{ backgroundImage: "url('assets/images/logo/logomy.png')" }} data-title="United States">United States</option>
                                        </select>
                                    </div>
                                    <div class="me-3">
                                        <select name="countries" class="custome_select">
                                            <option value='USD' data-title="USD">USD</option>
                                            <option value='Rupiah' data-title="Rupiah">Rupiah</option>
                                            <option value='GBR' data-title="GBR">GBR</option>
                                        </select>
                                    </div>
                                    <ul class="contact_detail text-center text-lg-start">
                                        <li><i class="ti-mobile"></i><span>+ 84-0938-540-335</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center text-md-end">
                                    <ul class="header_list">

                                        <li><a href="/login"><i class="ti-user"></i><span>LOGIN</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom_header dark_skin main_menu_uppercase">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="home.html">
                                <img class="logo_light" src="assets/images/logo/logo1_1.png" alt="logo" />
                                <img class="logo_dark" src="assets/images/logo/logo1_1.png" alt="logo" />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                                <span class="ion-android-menu"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li><a class="nav-link nav_item" href="/">Home</a></li>


                                    <li class="dropdown">
                                        <a class="dropdown-toggle nav-link" href="#" >PRODUCTS</a>
                                        <div class="dropdown-menu dropdown-reverse">
                                            <ul>


                                                <li>
                                                    <a class="dropdown-item menu-link " href="/productsamsung">SAMSUNG</a>

                                                </li>
                                                <li>
                                                    <a class="dropdown-item menu-link " href="/productstoshiba">TOSHIBA</a>

                                                </li>
                                                <li>
                                                    <a class="dropdown-item menu-link " href="/productslg">LG</a>

                                                </li>
                                                <li>
                                                    <a class="dropdown-item menu-link " href="/productspanasonic">PANASONIC</a>

                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="dropdown dropdown-mega-menu">
                                        <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">CATEGORIES</a>
                                        <div class="dropdown-menu">
                                            <ul class="mega-menu d-lg-flex">
                                                <li class="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li class="dropdown-header">Fans</li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Panasonic</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Toshiba</a></li>

                                                    </ul>
                                                </li>
                                                <li class="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li class="dropdown-header">Electric Kettle</li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="catelogories-ampana.html">Panasonic</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="Categories-amtoshiba.html">Toshiba</a></li>
                                                    </ul>
                                                </li>
                                                <li class="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li class="dropdown-header">Air-conditioner</li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Panasonic</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Toshiba</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Samsung</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">LG</a></li>

                                                    </ul>
                                                </li>
                                                <li class="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li class="dropdown-header">Desk Lamp</li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="categories-denpana.html">Panasonic</a></li>

                                                    </ul>
                                                </li>
                                                <li class="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li class="dropdown-header">Washing machine</li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="/category_pana_washing">Panasonic</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Toshiba</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Samsung</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">LG</a></li>

                                                    </ul>
                                                </li>
                                                <li class="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li class="dropdown-header">Fridge</li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Panasonic</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Toshiba</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Samsung</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">LG</a></li>

                                                    </ul>
                                                </li>

                                            </ul>

                                        </div>

                                    </li>


                                    <li><a class="nav-link nav_item" href="/contactus">CONTACT US</a></li>
                                    <li><a class="nav-link nav_item" href="/terms">TERMS OF SERVICE</a></li>
                                    <li><a class="nav-link nav_item" href="/policy">PRIVACY POLICY</a></li>
                                </ul>
                            </div>


                            <ul class="navbar-nav attr-nav align-items-center">
                                <li><a href="javascript:void(0);" class="nav-link search_trigger"><i class="linearicons-magnifier"></i></a>
                                    <div class="search_wrap">
                                        <span class="close-search"><i class="ion-ios-close-empty"></i></span>
                                        <form>
                                            <input type="text" placeholder="Search" class="form-control" id="search_input" />
                                            <button type="submit" class="search_icon"><i class="ion-ios-search-strong"></i></button>
                                        </form>
                                    </div><div class="search_overlay"></div><div class="search_overlay"></div>
                                </li>
                                <li class="dropdown cart_dropdown"><a class="nav-link cart_trigger" href="#" data-bs-toggle="dropdown"><i class="linearicons-cart"></i><span class="cart_count">2</span></a>
                                    <div class="cart_box dropdown-menu dropdown-menu-right">
                                        <ul class="cart_list">
                                            <li>
                                                <a href="#" class="item_remove"><i class="ion-close"></i></a>
                                                <a href="#"><img src="assets/images/cart_thamb1.jpg" alt="cart_thumb1" />Variable product 001</a>
                                                <span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>78.00</span>
                                            </li>
                                            <li>
                                                <a href="#" class="item_remove"><i class="ion-close"></i></a>
                                                <a href="#"><img src="assets/images/cart_thamb2.jpg" alt="cart_thumb2" />Ornare sed consequat</a>
                                                <span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>81.00</span>
                                            </li>
                                        </ul>
                                        <div class="cart_footer">
                                            <p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price"> <span class="price_symbole">$</span></span>159.00</p>
                                            <p class="cart_buttons"><a href="/cart" class="btn btn-fill-line btn-radius view-cart">View Cart</a></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header