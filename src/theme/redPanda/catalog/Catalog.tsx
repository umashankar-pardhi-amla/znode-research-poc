import React from "react";
import styles from "./catalog.module.css";
import Image from "next/image";
import { Product } from "@/pages";

function Catalog({ products }: { products: Array<Product> }) {
  return (
    <section className={styles.catalog}>
      {products.map((product) => (
        <article className={styles.product} key={product.id}>
          <h3> {product.title}</h3>
          <Image
            className="img"
            src={product.thumbnail}
            alt={product.title}
            width={600}
            height={400}
          />
          <p className={styles.description}>{product.description}</p>
        </article>
      ))}
    </section>
  );
}

export default Catalog;
