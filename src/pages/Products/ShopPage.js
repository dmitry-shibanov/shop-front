import React, { Component } from 'react';
import '../Products/ShopPage.css';
import axios from '../../axios';
import Product from '../../components/Product/Product';

class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {}
            ],
            currentSort:''
        }
    }


    componentDidMount() {
        axios.get('/posts').then(response => {
            console.log(response);
            this.setState({
                lists: response.data.slice(0, 15)
            })
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    }

    sortProducts(event) {
        const name = event.target.innerText;
        event.target.classList.add('active');
        console.log(event.target)
        console.log(name);
        switch (name) {
            case 'Стандарт Бязь':
                break;
            case 'Стандарт Гост':
                break;
            case 'Delux':
                break;
            case 'Премиум':
                break;
            default:
                break;
        }
    }

    render() {
        const copyProducts = this.state.lists.map(item => {
            console.log(item);
            return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
        })
        return (
            // <div className="container-fluid">
            //     <div className="row">
            //         <div className="col-2 px-1 bg-dark position-fixed" id="sticky-sidebar">
            //             <p>
            //                 {"djaljdlasjl"}
            //                 </p>
            //         </div>
            //         <div className="col grid" id="main">

            //             {copyProducts}
            //         </div>
            //     </div>
            // </div>
            <div class="container-fluid">
                <div class="row">
                    {/* px-1 */}
                    <div class="col-3 position-fixed left-slider" id="sticky-sidebar" style={{ padding: "0px" }}>
                        <ul class="list-group list-group-flush" style={{ width: "100%" }}>
                            <li class="list-group-item list-group-item-action active" value="Вся продукция" onClick={this.sortProducts.bind(this)}>Вся продукция</li>
                            <li class="list-group-item list-group-item-action" value="jdsasakl" onClick={this.sortProducts.bind(this)}>Стандарт Бязь</li>
                            <li class="list-group-item list-group-item-action" style={{ marginRight: "0px" }} onClick={this.sortProducts.bind(this)}>Стандарт Гост</li>
                            <li class="list-group-item list-group-item-action" onClick={this.sortProducts.bind(this)}>Delux</li>
                            <li class="list-group-item list-group-item-action" onClick={this.sortProducts.bind(this)}>Премиум</li>
                        </ul>
                    </div>
                    <div class="col offset-3 grid" id="main">
                        {copyProducts}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopPage;