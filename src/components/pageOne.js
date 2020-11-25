import React,{ Component } from 'react'
import Slider,{Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import ReactPaginate from 'react-paginate';

class PageOne extends Component{
    constructor(props){
        super(props);
        this.state = {
            product : [
                {
                    image : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
                    name : 'Apple iPhone 12',
                    price : '₹1,29,900.00',
                    numPrice : 129900,
                    category : 'Mobiles',
                    isTopProduct : false
                },
                {
                    image : 'https://contents.mediadecathlon.com/p551528/2000x2000/sq/fts100_fitness_cardio_t-shirt_-_grey_domyos_by_decathlon_8278626_551528.jpg?k=8e0ea84d0e765c80ea0cb6dff77d2ff2',
                    name : 'Cardio T-shirt',
                    price : '₹599.00',
                    numPrice : 599,
                    category : 'T-shirt',
                    isTopProduct : false
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/61k1jK9XwVL._SL1500_.jpg',
                    name : 'Redmi Earbuds S',
                    price : '₹1,799.00',
                    numPrice : 1799,
                    category : 'Headphones',
                    isTopProduct : false
                },
                {
                    image : 'https://ae01.alicdn.com/kf/H9216d32fddd846abae794d067bee12e0t/2020-New-Children-Orthopedics-School-Bags-Kids-Backpack-In-Primary-Schoolbag-For-Teenagers-Girls-Boys-Waterproof.jpg',
                    name : 'School Bag',
                    price : '₹1,299.00',
                    numPrice : 1299,
                    category : 'Bags',
                    isTopProduct : false
                },
                {
                    image : 'https://image01.oneplus.net/ebp/202007/06/1-m00-15-d2-rb8lb18cw9kapfouaawjvqw4rbo469_840_840.png',
                    name : 'OnePlus Nord',
                    price : '₹24,999.00',
                    numPrice : 24999,
                    category : 'Mobiles',
                    isTopProduct : false
                },
                {
                    image : 'https://www.torontotees.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/500_40.png',
                    name : 'Hoodie Black',
                    price : '₹999.00',
                    numPrice : 999,
                    category : 'T-shirt',
                    isTopProduct : true
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/61rlb0IYNuL._SL1500_.jpg',
                    name : 'Boat Airdopes',
                    price : '₹1,999.00',
                    numPrice : 1999,
                    category : 'Headphones',
                    isTopProduct : true
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/71bdgYfofhL._UX500_.jpg',
                    name : 'Ladies Handbag',
                    price : '₹799.00',
                    numPrice : 799,
                    category : 'Bags',
                    isTopProduct : false
                },
                {
                    image : 'https://i01.appmifile.com/webfile/globalimg/in/cms/BA2627B1-1735-7AE7-B5B3-304C3E73A99B.jpg',
                    name : 'Redmi Note 9',
                    price : '₹13,999.00',
                    numPrice : 13999,
                    category : 'Mobiles',
                    isTopProduct : true
                }       
            ],
            pageOne : [
                {
                    image : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
                    name : 'Apple iPhone 12',
                    price : '₹1,29,900.00',
                    numPrice : 129900,
                    category : 'Mobiles',
                    isTopProduct : false
                },
                {
                    image : 'https://contents.mediadecathlon.com/p551528/2000x2000/sq/fts100_fitness_cardio_t-shirt_-_grey_domyos_by_decathlon_8278626_551528.jpg?k=8e0ea84d0e765c80ea0cb6dff77d2ff2',
                    name : 'Cardio T-shirt',
                    price : '₹599.00',
                    numPrice : 599,
                    category : 'T-shirt',
                    isTopProduct : false
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/61k1jK9XwVL._SL1500_.jpg',
                    name : 'Redmi Earbuds S',
                    price : '₹1,799.00',
                    numPrice : 1799,
                    category : 'Headphones',
                    isTopProduct : false
                },
                {
                    image : 'https://ae01.alicdn.com/kf/H9216d32fddd846abae794d067bee12e0t/2020-New-Children-Orthopedics-School-Bags-Kids-Backpack-In-Primary-Schoolbag-For-Teenagers-Girls-Boys-Waterproof.jpg',
                    name : 'School Bag',
                    price : '₹1,299.00',
                    numPrice : 1299,
                    category : 'Bags',
                    isTopProduct : false
                },
                {
                    image : 'https://image01.oneplus.net/ebp/202007/06/1-m00-15-d2-rb8lb18cw9kapfouaawjvqw4rbo469_840_840.png',
                    name : 'OnePlus Nord',
                    price : '₹24,999.00',
                    numPrice : 24999,
                    category : 'Mobiles',
                    isTopProduct : false
                },
                {
                    image : 'https://www.torontotees.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/500_40.png',
                    name : 'Hoodie Black',
                    price : '₹999.00',
                    numPrice : 999,
                    category : 'T-shirt',
                    isTopProduct : true
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/61rlb0IYNuL._SL1500_.jpg',
                    name : 'Boat Airdopes',
                    price : '₹1,999.00',
                    numPrice : 1999,
                    category : 'Headphones',
                    isTopProduct : true
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/71bdgYfofhL._UX500_.jpg',
                    name : 'Ladies Handbag',
                    price : '₹799.00',
                    numPrice : 799,
                    category : 'Bags',
                    isTopProduct : false
                },
                {
                    image : 'https://i01.appmifile.com/webfile/globalimg/in/cms/BA2627B1-1735-7AE7-B5B3-304C3E73A99B.jpg',
                    name : 'Redmi Note 9',
                    price : '₹13,999.00',
                    numPrice : 13999,
                    category : 'Mobiles',
                    isTopProduct : true
                }       
            ],
            pageTwo : [
                {
                    image : 'https://static.digit.in/default/236153bf8732dec69f50d9d866b383e23e995a0d.jpeg?tr=n-product_detail_leader_thumb',
                    name : 'Redmi Note 7s',
                    price : '₹9,999.00',
                    numPrice : 9999,
                    category : 'Mobiles',
                    isTopProduct : true
                },
                {
                    image : 'https://www.beyoung.in/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/s/h/shield_white_men_mockup_2.jpg',
                    name : 'Printed T-shirt',
                    price : '₹599.00',
                    numPrice : 599,
                    category : 'T-shirt',
                    isTopProduct : false
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/71EsNIqearL._SL1500_.jpg',
                    name : 'Leaf Wired Headset',
                    price : '₹499.00',
                    numPrice : 499,
                    category : 'Headphones',
                    isTopProduct : false
                },
                {
                    image : 'https://fns.modanisa.com/r/pro2/2019/07/31/z-okul-cantasi--kirmizi--yaygan-kids-1168363-1.jpg',
                    name : 'Kids School Bag',
                    price : '₹999.00',
                    numPrice : 999,
                    category : 'Bags',
                    isTopProduct : false
                },
                {
                    image : 'https://image01.oneplus.net/ebp/202007/06/1-m00-15-d2-rb8lb18cw9kapfouaawjvqw4rbo469_840_840.png',
                    name : 'OnePlus Nord',
                    price : '₹24,999.00',
                    numPrice : 24999,
                    category : 'Mobiles',
                    isTopProduct : false
                },
                {
                    image : 'https://5.imimg.com/data5/CV/VR/MY-37130084/men-s-t-shirts-500x500.jpg',
                    name : 'Polo T-shirt',
                    price : '₹699.00',
                    numPrice : 699,
                    category : 'T-shirt',
                    isTopProduct : true
                },
                {
                    name : 'Leaf Headphone',
                    image : 'https://cdn.shopify.com/s/files/1/1676/7297/products/Main-Image_5dd17660-d566-4297-bc2e-e43de833b2fc_800x.jpg?v=1598506184',
                    price : '₹1,999.00',
                    numPrice : 1999,
                    category : 'Headphones',
                    isTopProduct : true
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/61RSyB%2BkbzL._AC_UY395_.jpg',
                    name : 'Leather Handbag',
                    price : '₹2599.00',
                    numPrice : 2599,
                    category : 'Bags',
                    isTopProduct : false
                },
                {
                    image : 'https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg',
                    name : 'OnePlus 7 Pro',
                    price : '₹35,999.00',
                    numPrice : 35999,
                    category : 'Mobiles',
                    isTopProduct : false
                }       
            ],
            pageThree : [
                {
                    image : 'https://m.media-amazon.com/images/I/71VC+FfupjL._SX569._SX._UX._SY._UY_.jpg',
                    name : 'Full Hand T-shirt',
                    price : '₹599.00',
                    numPrice : 599,
                    category : 'T-shirt',
                    isTopProduct : false
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/71mQ9oKDMLL._SL1500_.jpg',
                    name : 'Mi Earphone',
                    price : '₹499.00',
                    numPrice : 499,
                    category : 'Headphones',
                    isTopProduct : true
                },
                {
                    image : 'https://5.imimg.com/data5/GT/QM/MY-52070189/girl-school-bags-500x500.jpg',
                    name : 'Pink School Bag',
                    price : '₹999.00',
                    numPrice : 999,
                    category : 'Bags',
                    isTopProduct : false
                },
                {
                    image : 'https://images-na.ssl-images-amazon.com/images/I/61mvp2lJI5L._SL1500_.jpg',
                    name : 'Google Pixel',
                    price : '₹34,999.00',
                    numPrice : 34999,
                    category : 'Mobiles',
                    isTopProduct : false
                },
                {
                    image : 'https://5.imimg.com/data5/MC/ID/MY-8764775/printed-t-shirt-500x500.jpg',
                    name : 'Yellow T-shirt',
                    price : '₹399.00',
                    numPrice : 699,
                    category : 'T-shirt',
                    isTopProduct : true
                },
                {
                    name : 'Mi Neckband',
                    image : 'https://images-na.ssl-images-amazon.com/images/I/71PEtDCxzgL._SL1500_.jpg',
                    price : '₹1,999.00',
                    numPrice : 1999,
                    category : 'Headphones',
                    isTopProduct : true
                },
                {
                    image : 'https://www.zenmountaingear.com/wp-content/uploads/2018/12/Endeavour-trekking-backpack-60-litres-snow-zen-mountain-gear-shop-2.jpg',
                    name : 'Trekking Bag',
                    price : '₹3,599.00',
                    numPrice : 3599,
                    category : 'Bags',
                    isTopProduct : false
                }      
            ],
            categoryFilter : [],
            priceFilter : [],
            min : 100,
            max : 120000,
            productDetail : {
                image : '',
                name : '',
                price : '',
                category : '',
                isTopProduct : false
            },
            errorMessage : {
                name : false,
                price : false,
                category : false
            },
            imgName : '',
            imgerror : false,
            isTopProductChecked : false,
            productDropdown : ''
        }
    }
    handleCategory(category){
        let filter = this.state.product.filter((value,index)=>{
            return value.category == category;
        })
        this.setState({
            categoryFilter : filter
        })
    }
    getImage = (event) => {
        this.setState({
            imgName : event.target.files[0].name,
            imgerror : false
        })
        if(event.target.files.length == 1){
            let validation = {...this.state.errorMessage, image : false}
            this.setState({
                errorMessage : validation
            })
        }   
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                let base64 = {...this.state.productDetail, image : e.target.result}
                this.setState({
                    productDetail : base64
                })
            };
            reader.readAsDataURL(event.target.files[0]);
          }
    }
    changePrice = (event) => {
        this.setState({
            min : event[0],
            max : event[1]
        })
    }
    lowPrice(){
        let lowToHigh = this.state.product.sort((a,b)=>{
            return a.numPrice - b.numPrice;
        })
        this.setState({
            product : lowToHigh
        })
    }
    highPrice(){
        let highToLow = this.state.product.sort((a,b)=>{
            return b.numPrice - a.numPrice
        })
        this.setState({
            product : highToLow
        })
    }
    handleClick = (event) => {
        this.setState({
            priceFilter : []
        })
        if(event.selected == 0){
            this.setState({
                product : this.state.pageOne
            })
        }
        if(event.selected == 1){
            this.setState({
                product : this.state.pageTwo
            })
        }
        if(event.selected == 2){
            this.setState({
                product : this.state.pageThree
            })
        }
        
    }
    allProducts(){
        this.setState({
            categoryFilter : []
        })
    }
    priceFilter(){
        let filter = this.state.product.filter((value,index)=>{
            return value.numPrice >= this.state.min && value.numPrice <= this.state.max;
        })
        this.setState({
            priceFilter : filter
        })
    }
    getProductDetail = (event) => {
        let data = {...this.state.productDetail, [event.target.name] : event.target.value}
        this.setState({
            productDetail : data,
            productDropdown : event.target.value
        })
    }
    handleCheckbox = (event) => {
        this.setState({
            isTopProductChecked : event.target.checked
        })

    }
    onSave(){   
        let validation = {...this.state.errorMessage,
            name : this.state.productDetail.name == '' ? true : false,
            price : this.state.productDetail.price == '' ? true : false,
            category : this.state.productDetail.category == '' ? true : false    
        }
        this.state.productDetail = {...this.state.productDetail, isTopProduct: this.state.isTopProductChecked}
        
        this.setState({
            errorMessage : validation,
        })
        if(this.state.imgName == ''){
            this.setState({
                imgerror : true
            })
        } 
        if(this.state.productDetail.name != ''  && this.state.productDetail.price != '' && this.state.productDetail.category != '' && this.state.imgName != ''){
            this.state.pageThree.push(this.state.productDetail);
            alert('Product added sucessfully')
            let clear = {...this.state.productDetail, name : '', image : '', price : '', category : ''}
            this.setState({
                productDetail : clear,
                imgName : '',
                checkbox : false,
                isTopProductChecked: false,
                productDropdown : ''
            })
        }
    }
    render(){
        let product = this.state.product.map((value,index)=>{
            return(
                <div className="col-4" key={index}>
                    <div className="card card-products">
                            <img className="card-img" src={value.image} />
                        <div className="card-body product-details">
                            <b style={{color:"#49639f"}}> {value.name} </b>
                            <br></br>
                            <b className="product-price"> {value.price} </b>
                        </div>
                    </div>
                </div>
            );
        })
        let productFilter = this.state.categoryFilter.map((value,index)=>{
            return(
                <div className="col-4" key={index}>
                    <div className="card card-products">
                            <img className="card-img" src={value.image} />
                        <div className="card-body product-details">
                            <b style={{color:"#49639f"}}> {value.name} </b>
                            <br></br>
                            <b className="product-price"> {value.price} </b>
                        </div>
                    </div>
                </div>
            );
        })
        let topProduct = this.state.product.filter((value,index)=>{
            return value.isTopProduct == true
        }).map((value,index)=>{
            return(
                <div className="card" key={index}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <img className="top-products-img" src={value.image}></img>
                            </div>
                            <div className="col-6">
                                <b style={{color:"#49639f"}}> {value.name} </b>
                                <br></br>
                                <img className="star-img" src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/star-icon.png'></img>
                                <img className="star-img" src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/star-icon.png'></img>
                                <img className="star-img" src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/star-icon.png'></img>
                                <img className="star-img" src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/star-icon.png'></img>
                                <img className="star-img" src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/star-icon.png'></img>
                                <br></br>
                                <br></br>
                                <b className="top-products"> {value.price} </b>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        let priceFilter = this.state.priceFilter.map((value,index)=>{
            return(
                <div className="col-4" key={index}>
                    <div className="card card-products">
                            <img className="card-img" src={value.image} />
                        <div className="card-body product-details">
                            <b style={{color:"#49639f"}}> {value.name} </b>
                            <br></br>
                            <b className="product-price"> {value.price} </b>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div className="container-fluid">
                <div className="header-align row">
                    <div className="col-1">
                        <b className="products">Products</b>
                    </div>
                    <div className="col-11">
                        <button type="button" className="btn-addProduct" data-toggle="modal" data-target="#myModal">Add Product</button>
                            <div id="myModal" className="modal fade modal-align" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                
                                    <div className="modal-head">
                                        <b>Add Product</b> 
                                        <div className="btn-close">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>                                      
                                        </div>                                    
                                    </div>

                                <div className="row">
                                    <div className="col-10 offset-1">
                                        <b>Product Category</b>
                                        <br></br>
                                        <select className="category-dropdown" id="dropdown" name="category" onChange={this.getProductDetail} value={this.state.productDropdown} >
                                            <option value='' disabled>Select</option>
                                            <option value="Mobiles">Mobiles</option>
                                            <option value="Headphones">Headphones</option>
                                            <option value="Bags">Bags</option>
                                            <option value="T-shirt">T-shirt</option>
                                        </select>
                                        {this.state.errorMessage.category && <div className="error-msg"><span>Please select any one category</span></div>}  
                                        <br></br>
                                        <b>Product Title</b>
                                        <br></br>
                                        <input className="input-box" name="name" type="text" value={this.state.productDetail.name} onChange={this.getProductDetail} placeholder="Enter product title"></input>
                                        {this.state.errorMessage.name && <div className="error-msg"><span>Please enter product title</span></div>}
                                        <br></br>
                                        <b>Price</b>
                                        <br></br>
                                        <input className="input-box" value={this.state.productDetail.price} name="price" type="text" onChange={this.getProductDetail} placeholder="Enter price"></input>
                                        {this.state.errorMessage.price && <div className="error-msg"><span>Please enter product price</span></div>}
                                        <br></br>
                                        <div className="top-products">
                                            <input className="checkbox" type="checkbox" id="checkbox" checked={this.state.isTopProductChecked} onChange={this.handleCheckbox}></input>
                                            <b>Top Products</b>
                                        </div>
                                        <br></br>
                                        <b>Upload Product Image</b>
                                        <br></br>
                                        <div className="upload">
                                            <label htmlFor="upload-photo"><b>Upload</b></label>
                                            <input type="file" id="upload-photo" onChange={this.getImage}></input>
                                            {this.state.imgName != '' && <span style={{color:"green"}}> {this.state.imgName} </span>}
                                            {this.state.imgerror && <div style={{color:"red"}}><span>Please upload an image</span></div>}
                                        </div>
                                        <hr></hr>
                                        <div className="modal-bottom">
                                            <button type="button" className="btn-cancel" data-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn-save" onClick={()=>this.onSave()}>Save</button>
                                        </div>
                                    </div> 
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <b className="header-text">CATEGORIES</b>
                        <div className="card card-category">
                            <div className="card-body">
                                <b onClick={()=>this.handleCategory('Mobiles')}>Mobiles</b>
                                <hr></hr>
                                <b onClick={()=>this.handleCategory('Headphones')}>Headphones</b>                         
                                <hr></hr>                              
                                <b onClick={()=>this.handleCategory('Bags')}>Bags</b>
                                <hr></hr>
                                <b onClick={()=>this.handleCategory('T-shirt')}>T-shirt</b>
                                <hr></hr>
                                <b onClick={()=>this.allProducts()}>All Products</b>
                                <br></br>
                            </div>
                        </div>
                        <div>
                            <b>FILTER BY PRICE</b>
                                <Range min={200} max={130000} className="slider" onChange={this.changePrice} defaultValue={[100,130000]}/>    
                                <button className="btn-filter" onClick={()=>this.priceFilter()}>Filter</button>
                                <b className="price">Price: &#8377;{this.state.min} - &#8377;{this.state.max} </b>
                                <br></br>
                                <b className="top-products">Top Products</b>
                                <div className="top-products-align">
                                {topProduct}
                                </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <b className="header-text">Showing 1-8 of 9 results</b>

                        <div className="dropdown dropdown-align">
                            <a className="btn btn-dropdown dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Default sorting
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" onClick={()=>this.lowPrice()}>Low to High</a>
                                <a className="dropdown-item" onClick={()=>this.highPrice()}>High to Low</a>
                            </div>
                        </div>
                        <br></br>
                        <div className="row content">
                            {this.state.categoryFilter.length == 0 ?  this.state.priceFilter.length == 0 ? product : priceFilter : productFilter}
                        </div>
                    </div>
                </div>
                <div className="page-align">
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        pageCount={3}
                        marginPagesDisplayed={3}
                        onPageChange={this.handleClick}
                        containerClassName={'pagination'}
                        activeClassName={'pagination-active'}
                    />
                </div>
            </div>
        );
    }
}

export default PageOne;