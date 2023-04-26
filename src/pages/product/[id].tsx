import Link from "next/link";

export async function getStaticPaths() {
  const paths = [].map((post) => ({
    params: { id: null },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;

  const productData: any = await fetch("https://dummyjson.com/products/1");
  const data: any = await productData.data;

  return {
    props: {
      products: data,
    },
    revalidate: 60, // In seconds
  };
}
export default function Home2({ products }: any) {
  return (
    <div>
      <div>
        Product Details : {products.description}
        <Link href={"/"}>Back</Link>
      </div>
    </div>
  );
}
