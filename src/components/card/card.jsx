import Image from "next/image";
import styles from "./card.module.scss";

const Card = () => (
  <div className={styles.card}>
    <div className={styles.card_imageWrap}>
      <div className={styles.card_image}>
        <Image src="/images/headphone.jpg" alt="headphone" fill={true} />
      </div>
    </div>
    <div className={styles.card_content}>
      <div className={`${styles.card_label} h6 mb-10 c-orange`}>
        Product Reviews
      </div>
      <div className={`${styles.card_title} h3 mb-20`}>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra
      </div>
      <p className={`${styles.card_summary} h6 fw-600`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam,
        explicabo fuga aspernatur dicta quos esse doloremque.
      </p>
    </div>
  </div>
);

export default Card;
