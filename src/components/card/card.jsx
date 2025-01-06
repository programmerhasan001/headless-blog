import Image from "next/image";
import styles from "./card.module.scss";
import Button from "../button/button";
import ConditionalRender from "../conditional-render";
import getCategoryColor from "@/helpers/get-category-color";
import config from "@/config";

const Card = (props) => (
  <div className={`${styles.card_wrap} ${props.className || ""}`}>
    <div className={styles.card}>
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>
          <Image src={props?.imageSrc} alt={props?.imageAlt} fill={true} />
        </div>
      </div>
      <div className={styles.card_content}>
        <ConditionalRender condition={props?.label}>
          <div
            className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(
              props?.label
            )}`}
          >
            {props?.label}
          </div>
        </ConditionalRender>
        <ConditionalRender condition={props?.title}>
          <div className={`${styles.card_title} h3 mb-20`}>{props?.title}</div>
        </ConditionalRender>
        <ConditionalRender condition={props?.summary}>
          <p className={`${styles.card_summary} h6 fw-600 mb-30`}>
            {props?.summary}
          </p>
        </ConditionalRender>
        <ConditionalRender condition={props?.href}>
          <Button href={props?.href} iconType={props?.btnIcon}>
            {props?.btnLabel || "Read More"}
          </Button>
        </ConditionalRender>
      </div>
    </div>
  </div>
);

export default Card;
