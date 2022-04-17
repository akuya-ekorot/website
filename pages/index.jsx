import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  const blog1 = {
    imageUrl: "/assets/1.jpg",
    date: "17 Apr 2022",
    title: "Still Staying Still",
  };
  const blog2 = {
    imageUrl: "/assets/2.jpg",
    date: "17 Apr 2022",
    title: "Still Staying Still",
  };

  return (
    <>
      <div className="h-full w-full -z-10 fixed flex">
        <div
          className={
            "w-full h-full absolute custom-backdrop-blur"
          }
        ></div>
        <div className="w-2/4 h-2/4 bg-[#FC7753] custom-colors"></div>
        <div className="w-2/4 h-2/4 bg-[#FFF689] custom-colors"></div>
      </div>

      <div className="max-w-[800px] flex flex-col gap-[60px] py-[60px] mx-auto z-10">
        <Hero />
        <div className="flex flex-col gap-5">
          <h2 className="underline underline-offset-1 text-xl">
            Explore some of my thoughts...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <BlogCard blog={blog1} />
            <BlogCard blog={blog2} />
            <BlogCard blog={blog2} />
            <BlogCard blog={blog2} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
