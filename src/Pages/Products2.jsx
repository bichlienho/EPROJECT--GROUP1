import React from 'react'
import './Pages.css'
import Item from '../Component/Item/Item'
import Products_lg from '../json/Products2.json'
function Products2() {
    return (
        <div>

            <div class="banner_section slide_wrap shop_banner_slider staggered-animation-wrap">
                <div id="carouselExampleControls" class="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 17.png')" }}>
                            <div class="banner_slide_content banner_content_inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div class="banner_content2">
                                                <h6 class="mb-2 mb-sm-3 staggered-animation text-uppercase" data-animation="fadeInDown" data-animation-delay="0.2s">Harvel Electric</h6>
                                                <h2 class="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.3s">LG</h2>
                                                <h1 class="staggered-animation" data-animation="fadeInUp" data-animation-delay="0.4s">LIFE'S GOOD.</h1>
                                                <a class="btn btn-line-fill btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="fadeInUp" data-animation-delay="0.1s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 16.png')" }}>
                        </div>
                        <div class="carousel-item background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 14.png')" }}>
                        </div>
                    </div>
                    <ol class="carousel-indicators indicators_style2">
                        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="heading_s1 text-center">
                        <h1>PRODUCTS</h1>
                    </div>
                </div>
            </div>

            <div class="thongtinsp">
                <div class="row">
                    {
                        Products_lg.map((sp, i) => {
                            return <Item name={sp.name} image={sp.image} new_price={sp.new_price} old_price={sp.old_price} desc={sp.desc} category={sp.category} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Products2
