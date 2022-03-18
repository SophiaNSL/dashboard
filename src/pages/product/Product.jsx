import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { CloudUpload } from '@material-ui/icons';

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                <button className="productAddBtn">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart 
                        data={productData}
                        title="Sales Performance"
                        dataKey="Sales"
                    />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/img/products/product1.png" alt="product" className="productInfoImg"/>
                        <span className="productName">Apple iPad Air 4</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productinfoItem">
                            <span className="productInfokey">ID:</span>
                            <span className="productInfoValue">7</span>
                        </div>

                        <div className="productinfoItem">
                            <span className="productInfokey">Sales:</span>
                            <span className="productInfoValue">2000</span>
                        </div>

                        <div className="productinfoItem">
                            <span className="productInfokey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>

                        <div className="productinfoItem">
                            <span className="productInfokey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="name">Product Name</label>
                        <input id="name" type="text" placeholder="Apple iPad Air 4"/>
                        <label htmlFor="instock">In Stock</label>
                        <select name="instock" id="instock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label htmlFor="active">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="/img/products/product1.png" alt="product" className="productUploadImg" />
                            <label htmlFor="file">
                               <CloudUpload />
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>

                        <button className="productBtn">Update</button>


                    </div>
                </form>
            </div>



            
        </div>
    )
}
