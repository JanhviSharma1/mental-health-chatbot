import { blogs } from "@/app/data/blogs";
import Navbar from "@/components/navbar";

export default function BlogPost({ params }) {
  const post = blogs.find((b) => b.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9] px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm lg:mt-15">
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          {post.title}
        </h1>
        <div
          className="text-gray-700 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
