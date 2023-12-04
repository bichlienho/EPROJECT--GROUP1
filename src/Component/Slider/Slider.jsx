import React from 'react'

function Slider() {
    return (
        <div>
            <div class="banner_section slide_wrap shop_banner_slider staggered-animation-wrap">
                <div id="carouselExampleControls" class="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 48.jpg')" }}>
                            <div class="banner_slide_content banner_content_inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div class="banner_content2">
                                                <h5 class="mb-2 mb-sm-3 staggered-animation font-weight-light" data-animation="fadeInDown" data-animation-delay="0.2s">Homepages</h5>
                                                <h2 class="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.2s">HARVEL ELECTRIC</h2>
                                                <a class="btn btn-border-fill btn-radius staggered-animation text-uppercase" href="/samsung" data-animation="fadeInUp" data-animation-delay="0.4s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 51.jpg')" }}>
                            <div class="banner_slide_content banner_content_inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div class="banner_content2">
                                                <h2 class="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.2s">Quality Products</h2>
                                                <a class="btn btn-border-fill btn-radius staggered-animation text-uppercase" href="/samsung" data-animation="fadeInUp" data-animation-delay="0.4s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item background_bg" style={{ backgroundImage: "url('assets/images/banner/banner 50.jpg')" }}>
                            <div class="banner_slide_content banner_content_inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div class="banner_content2">
                                                <h2 class="staggered-animation" data-animation="fadeInDown" data-animation-delay="0.2s">Good Price, Super Discount</h2>
                                                <a class="btn btn-border-fill btn-radius staggered-animation text-uppercase" href="/samsung" data-animation="fadeInUp" data-animation-delay="0.4s">Shop Now</a>
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
        </div>
    )
}

export default Slider
