import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import swal from 'sweetalert';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl} = item;

  const additemAndSwal = (item) => {
      addItem(item);
      swal({
        title: "Item Added!",
        text: `You successfully added ${item.name} to your cart`,
        icon: "success",
    });

  }
  
  return(
  <div className='collection-item'>
    <div 
      
      className='image'
      style={{
        backgroundImage:`url(${imageUrl})`
      }}
      />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton inverted onClick={() => additemAndSwal(item)}> ADD TO CART </CustomButton>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item =>  dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);