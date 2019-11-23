import React, { Component } from 'react'
import {connect} from 'react-redux'
import  Card  from '../components/Card'

const mapStateToProps = state => {
    return { products: state.products};
};

export class ProductPage extends Component {
    renderCard = (product) =>{
        return(
          <Card product ={product}/>
        )
    }
    renderCardGroup = () =>{
        return(
            <div className="cardGroup">
                {this.renderCard(this.props.products[this.props.match.params.id-1])}
            </div>
        )
    }
    render() {
        return (
            <div>
                {/* aqui virá o carousel */}
                {this.renderCardGroup()}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProductPage)
