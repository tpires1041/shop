import styles from './page.module.css'
import Image from 'next/image'

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((products) =>
        <div className={styles.card} key={products.id}>
          <p>{products.title.slice(0, 16)}</p>
          <Image
            src={products.image}
            width={300}
            height={300}
          />
          <p>R$ {products.price}</p>
        </div>
      )}
    </main>
  );
}
