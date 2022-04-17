export default function BlogCard({ blog }) {
  return (
    <div
      className={`bg-cover bg-bottom min-h-[350px] rounded-3xl shadow-2xl`}
      style={{ backgroundImage: `url(${blog.imageUrl})` }}
    >
      <div className="bg-gradient-to-t from-black via-transparent rounded-3xl h-full w-full flex flex-col justify-end p-5">
        <h3 className="text-white text-2xl ">{blog.title}</h3>
        <p className="text-white">{blog.date}</p>
      </div>
    </div>
  );
}
