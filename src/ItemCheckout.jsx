import React  from 'react';

export function ItemCheckout(props) {
  return(<div className='container'>
    <div className='row'>
      <img alt={"item"} src={props.itemImage} width='100vw' height="100vw"/>
      <div className='col'>
        <div className="glacial-indifference-bold">{props.itemName}</div>
        <div className="glacial-indifference">Size {props.itemSize}</div>
        <div className="glacial-indifference">Qty {props.itemQuantity}</div>
        {typeof (props.itemPrice) == 'undefined' ? '' : <div className="glacial-indifference">{convertToRupiah(props.itemPrice)}</div>}
      </div>
    </div>
  </div>);
}

export function convertToRupiah(angka)
{
  var rupiah = '';
  var angkarev = angka.toString().split('').reverse().join('');
  for(var i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
  return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}
