import getCategoryColor from "@/helpers/get-category-color";
import Image from "next/image";
import styles from "./style.module.scss";

const BlogDetails = (props) => {
  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col_9">
          <div className={`h6 mb-20 c-${getCategoryColor("Product Reviews")}`}>
            Product Reviews
          </div>
          <h2>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra
          </h2>
        </div>
      </div>
      <Image
        src="/images/headphone.jpg"
        alt="headphone"
        width={1280}
        height={387}
        className={`${styles.featuredImage} mb-50`}
      />

      <div className="row">
        <div className="col col_9">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            molestiae sit adipisci, dolore iste qui harum quaerat nostrum
            suscipit explicabo porro corrupti cumque dolorem deserunt. Mollitia
            consectetur ea voluptas itaque quisquam, soluta eveniet totam
            maiores, porro eaque assumenda asperiores tempora eos at aliquid
            quo, quibusdam nihil incidunt qui temporibus cumque tenetur.
            Consequatur voluptatem quibusdam omnis vero cumque, sit rerum
            reiciendis quod dolore, nesciunt eveniet, dignissimos a praesentium
            maiores? Suscipit laborum dolore ad maiores harum mollitia
            blanditiis velit soluta officiis voluptates?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            consectetur repellendus minima eius rem dolorum, obcaecati velit
            mollitia nihil natus? Non sapiente incidunt beatae nobis atque sint
            culpa, eum ad eligendi dolor, sit debitis rerum tenetur quam ratione
            quis maxime voluptatem earum obcaecati! Quasi laudantium quaerat
            autem nemo odio adipisci?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            ipsa at totam animi porro. Sit ex, error suscipit, earum maiores
            cupiditate, molestias quaerat odit labore corrupti tenetur explicabo
            hic ducimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
