import Image from "next/image";
import React from "react";
import styles from "./catalog.module.css";
export interface Product {
  brand: string;
  category: string;
  description: string;
  id: number;
  price: number;
  stock: number;
  thumbnail: string;
  title: string;
}

function Cataglog({ products }: { products: Array<Product> }) {
  return (
    <section className={styles.TEST}>
      {products.map((product) => (
        <article className={styles.product} key={product.id}>
          <Image
            className="img"
            src={product.thumbnail}
            alt={product.title}
            width={600}
            height={400}
          />
          <h3> {product.title}</h3>
        </article>
      ))}
    </section>
  );
}

export default Cataglog;
