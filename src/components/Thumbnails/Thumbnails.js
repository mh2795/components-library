import React from 'react';
import './Thumbnails.css';
import macbook from '../../images/MacBook.png';
import rating from '../../images/rate.png';
import price from '../../images/price.png';
import Button from '../Button/Button';
import Cart from './../../images/cart_2.png'
import Heart from './../../images/hearts.png'

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btns: 'btns-hidden'
    };
    this.hover = this.hover.bind(this);
    this.offhover = this.offhover.bind(this);
  }
  hover() {
    this.setState({
      btns: 'btns-show'
    });
  }
  offhover() {
    this.setState({
      btns: 'btns-hidden'
    });
  }
  render() {
    if (this.props.vertical) {
      if (this.props.border) {
        return (
          <div className="thumbnail-border">
            <div className={this.state.btns}>
              <Button icon={Cart} type="primary" litebg />
              <Button icon={Heart} type="primary" litebg />
            </div>
            <div className="first" onMouseEnter={this.hover} onMouseLeave={this.offhover}>
              <img className="macbook" src={macbook} alt="macbook pro image"/>
            </div>
            <hr/>
            <div className="second">
              <p className="title">Apple Macbook Pro</p>
              <img className="rating" src={rating} alt="rating image"/>
              <img className="price" src={price} alt="price image"/>
            </div>
          </div>
        );
      }
      if (this.props.fill) {
        return (
          <div className="thumbnail-fill">
            <div className={this.state.btns}>
              <Button icon={Cart} type="primary" litebg  />
              <Button icon={Heart} type="primary" litebg  />
            </div>
            <div className="first" onMouseEnter={this.hover} onMouseLeave={this.offhover}>
              <img className="macbook" src={macbook} alt="macbook pro image"/>
            </div>
            <hr/>
            <div className="second">
              <p className="title">Apple Macbook Pro</p>
              <img className="rating" src={rating} alt="rating image"/>
              <img className="price" src={price} alt="price image"/>
            </div>
          </div>
        );
      }
    }
    if (this.props.horizontal) {
      return (
        <div className="thumbnail-horizontal">
          <div className="first" onMouseEnter={this.hover} onMouseLeave={this.offhover}>
            <img className="macbook" src={macbook} alt="macbook pro image"/>
          </div>
          <div className="second-2">
            <p className="title">Apple Macbook Pro</p>
            <img className="rating" src={rating} alt="rating image"/>
            <img className="price" src={price} alt="price image"/>
          </div>
        </div>
      );
    }
    if (this.props.inline) {
      return (
        <div className="thumbnail-horizontal-2">
          <div className="first-2" onMouseEnter={this.hover} onMouseLeave={this.offhover}>
            <div className="float-hot">
              <Button label="HOT" type="danger" />
            </div>
            <img className="macbook-2" src={macbook} alt="macbook pro image"/>
          </div>
          <div className="second-3">
            <p className="title-2">Beats Solo2 On Ear Headphones - Black</p>
            <img className="rating" src={rating} alt="rating image"/>
            <span className="gray-span"> 0 reviews</span><span className="blue-span"> Submit a review</span>
            <hr/>
            <img className="price" src={price} alt="price image"/><br/>
            <span className="black-span">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor</span><br/>
            <div className="space">
              <Button label="Add To Cart" type="primary" litebg cart />
              <Button type="primary" litebg heart />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Thumbnail;