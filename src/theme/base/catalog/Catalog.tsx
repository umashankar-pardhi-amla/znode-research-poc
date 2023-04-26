import React from 'react'

export interface Product { 
    brand: string;
    category: string;
    description: string
    id: number;
    price: number;
    stock: number;
    thumbnail: string;
    title: string;
  }

function Catalog({products}: {products: Array<Product>}) {
  return (
    <section className='table'>
    <table style={{width: '100%'}}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {products.map(product =>  (
        
        <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
        </tr>
      
    ))}
      </tbody>
    </table>
  </section>
  )
}

export default Catalog