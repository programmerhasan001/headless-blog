import Card from "@/components/card/card";
import { IconTypes } from "@/components/button/button";
import fetchBlogs from "@/helpers/fetch-blogs";

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs("&filters[isFeatured][$eq]=true"),
    await fetchBlogs("&filters[isFeatured][$eq]=false&sort[0]=createdAt:asc"),
  ]);
  console.log(featuredBlogs, "featuredBlogs");
  return (
    <div className="container pb-80">
      {featuredBlogs?.data?.map((featuredBlog) => (
        <Card
          key={featuredBlog?.id}
          label={featuredBlog?.Category}
          title={featuredBlog?.Title}
          summary={featuredBlog?.Summary}
          href={`/${featuredBlog?.slug}`}
          btnIcon={IconTypes?.ARROW_RIGHT}
          imageSrc={`${featuredBlog?.FeaturedImage?.url}`}
          imageAlt="Featured Image"
          className="mb-30"
        />
      ))}
      <div className="row">
        {blogs?.data?.map((blog) => (
          <div className="col col-4 m-mw-100">
            <Card
              key={blog?.id}
              label={blog?.Category}
              title={blog?.Title}
              summary={blog?.Summary}
              href={`/${blog?.slug}`}
              btnIcon={IconTypes?.ARROW_RIGHT}
              imageSrc={`${blog?.FeaturedImage?.url}`}
              imageAlt="Featured Image"
              className="mb-30"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
