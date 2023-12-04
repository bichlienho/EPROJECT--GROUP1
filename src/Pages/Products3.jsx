import React from 'react'
import './Pages.css'
import Item from '../Component/Item/Item'
import Products_toshiba from '../json/Products3.json'
function Products3() {
    return (
        <div>

            <div class="banner_section slide_wrap shop_banner_slider staggered-animation-wrap">
                <div id="carouselExampleControls" class="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 1.png')" }}>
                            <div class="banner_slide_content banner_content_inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div class="banner_content2">
                                                <h6 class="mb-2 mb-sm-3 staggered-animation text-uppercase" data-animation="fadeInDown" data-animation-delay="0.2s">Harvel Electric</h6>
                                                <h2 class="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.3s">Toshiba</h2>
                                                <p class="staggered-animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                    Take Toshiba, Take the World..</p>
                                                <a class="btn btn-line-fill btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="fadeInUp" data-animation-delay="0.1s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 28.jpg')" }}>
                            <div class="banner_slide_content banner_content_inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div class="banner_content2">

                                                <h2 class="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.2s">Committed to People, Committed to the Future.</h2>
                                                <a class="btn btn-border-fill btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="fadeInUp" data-animation-delay="0.4s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 29.jpg')" }}>
                            <div class="banner_slide_content banner_content_inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div class="banner_content2">

                                                <h2 class="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.3s">Mobility. Taken to another level.</h2>
                                                <a class="btn btn-border-fill btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="fadeInUp" data-animation-delay="0.2s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        Products_toshiba.map((sp, i) => {
                            return <Item name={sp.name} image={sp.image} new_price={sp.new_price} old_price={sp.old_price} desc={sp.desc} category={sp.category} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Products3
