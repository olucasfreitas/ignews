import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>23 de março de 2021</time>
            <strong>Boas práticas para devs em início de carreira</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              sed! At voluptas provident maxime voluptate possimus, amet sunt
              nemo, ipsum iure vel earum dolorum. Eos aperiam sed harum ipsum
              dolore.
            </p>
          </a>
          <a href="#">
            <time>23 de março de 2021</time>
            <strong>Boas práticas para devs em início de carreira</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              sed! At voluptas provident maxime voluptate possimus, amet sunt
              nemo, ipsum iure vel earum dolorum. Eos aperiam sed harum ipsum
              dolore.
            </p>
          </a>
          <a href="#">
            <time>23 de março de 2021</time>
            <strong>Boas práticas para devs em início de carreira</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              sed! At voluptas provident maxime voluptate possimus, amet sunt
              nemo, ipsum iure vel earum dolorum. Eos aperiam sed harum ipsum
              dolore.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
