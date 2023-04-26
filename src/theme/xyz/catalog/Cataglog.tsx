import Image from 'next/image'
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


function Cataglog({products}: {products: Array<Product>}) {
  return (
    <section className='catalog'>
        {products.map(product => 
        <article className='product' key={product.id}>
            <h3> {product.title}</h3>
            <Image className='img' src={product.thumbnail} alt={product.title} width={600} height={400} />
            <p className="description">
                {product.description}
            </p>
        </article>
        )}
    </section>
  )
}

export default Cataglog