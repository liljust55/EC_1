import React, { useContext } from 'react';
import { useMemo } from "react";
import ShopContext from '../Context/ShopContext';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';

const Product = () => {
  const all_product = useContext(ShopContext);

    // console.log('all_product:', all_product);

  const {id: productId} = useParams(); 
  

  // const product = useMemo(() => {
  //   return all_product.find((e) => e.id === Number(productId))
  // },  [all_product, productId]);
  
const product = useMemo(() => {
  if (!all_product) return null; // or some default value
  return all_product.find((e) => e.id === Number(productId));
}, [all_product, productId]);


// console.log(productId)

  return (
     <div>
      <Breadcrumbs product={product} />
    </div>
  );
};

export default Product;