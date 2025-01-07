import getCategoryColor from "@/helpers/get-category-color";
import Image from "next/image";
import styles from "./style.module.scss";
import fetchBlogs from "@/helpers/fetch-blogs";
import config from "@/config";

const BlogDetails = async (props) => {
  const { slug } = await props?.params;
  const { data } = await fetchBlogs(`&filters[slug][$eq]=${slug}`);
  if (data.length === 0) return null;
  const blog = data[0];
  const Content = blog?.Content.map((ct) => {
    return ct?.children[0]?.text;
  });
  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col_9">
          <div className={`h6 mb-20 c-${getCategoryColor(blog?.Category)}`}>
            {blog?.Category}
          </div>
          <h2>{blog?.Title}</h2>
        </div>
      </div>
      <Image
        src={`${blog?.FeaturedImage?.url}`}
        alt="headphone"
        width={1280}
        height={387}
        className={`${styles.featuredImage} mb-50`}
      />
      <div className="row">
        <div
          className="col col_9"
          dangerouslySetInnerHTML={{ __html: Content.join("") }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetails;
