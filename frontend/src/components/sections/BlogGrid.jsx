import PropTypes from "prop-types";
import BlogCard from "../ui/BlogCard";

export default function BlogGrid({ posts }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-coffee-950" />
        <p className="text-xs tracking-widest uppercase text-coffee-700">
          Bài viết mới nhất
        </p>
      </div>
      <h2 className="mb-10 font-serif text-3xl text-coffee-950">
        Góc nhìn &amp; Cảm hứng
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

BlogGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};
