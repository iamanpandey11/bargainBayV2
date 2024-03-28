import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to BargainBay
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Your ultimate destination for tech gadget shopping tips and advice.
        </p>
        <Link
          to="/search"
          className="text-sm md:text-base text-teal-500 font-bold hover:underline mt-4 inline-block"
        >
          View Latest Gadgets
        </Link>
      </header> */}

      <main className="container mx-auto px-4 ">
        <section className=" bg-gray-200">
          <CallToAction />
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <Link
            to="/search"
            className="text-teal-500 hover:underline mt-4 inline-block text-center"
          >
            View All Posts
          </Link>
        </section>
      </main>
    </div>
  );
}
