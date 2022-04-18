import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Client } from "@notionhq/client";
import PageContainer from "../components/PageContainer";

export default function Home({ blogs }) {
  return (
    <PageContainer>
      <Hero />
      <div className="flex flex-col gap-5">
        <h2 className="underline underline-offset-1 text-xl">
          Explore some of my thoughts...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      select: {
        equals: "Publish",
      },
    },
  });

  function getBlogsDetails(response) {
    const blogs = [];

    response?.results?.map((blog) => {
      const date = new Date(
        ...blog.properties["Date Published"].date.start.split("-")
      ).toDateString();

      const id = blog.id;

      const imageUrl = blog.cover
        ? blog.cover[blog.cover.type].url
        : "/assets/avatar.jpg";

      const title = blog.properties.Name.title[0].plain_text;

      blogs.push({
        date,
        id,
        imageUrl,
        title,
      });
    });
    return blogs;
  }

  const blogs = getBlogsDetails(response);

  return {
    props: {
      blogs,
    },
  };
}
