import React from 'react'
import './Item.css'
function Item(props) {
    return (
        <div className="col-md-3">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                    <div class="row shop_container">
                        {/* <div class="col-lg-3 col-md-4 col-6"> */}
                        <div class="product">
                            <div class="product_img">
                                <a href="shop-product-detail.html">

                                    <img src={props.image} class="card-img-top img-fluid" alt="Image 1" />
                                </a>

                                <h5 class="card-title">{props.Name}</h5>
                                <a href="" class="btn btn-primary">
                                    <i class="fa fa-shopping-cart"></i>
                                    Add Cart</a>
                            </div>
                            <div class="product_info">

                                <div class="product_price">
                                    <span class="price"> ${props.new_price}</span>
                                    <del> ${props.old_price}</del>

                                </div>
                                <div class="rating_wrap">
                                    <div class="rating">
                                        <div class="product_rate" ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='name'>
                                <a href=''>
                                    <p>{props.desc}</p>
                                </a>
                            </div>
                        </div>
                        <br /><br />
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>


    )
}

export default Item