import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BlogFeatured({ post }) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      {/* Ảnh trái */}
      <div className="overflow-hidden rounded-sm aspect-4/3">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Nội dung phải */}
      <div>
        <span className="inline-block mb-4 text-xs tracking-widest uppercase text-gold">
          {post.category}
        </span>
        <h2 className="mb-4 font-serif text-3xl leading-snug text-coffee-950">
          {post.title}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-coffee-700/60">
          {post.description}
        </p>
        <p className="mb-6 text-xs text-coffee-700/40">
          {post.author} &nbsp;·&nbsp; {post.readTime} đọc &nbsp;·&nbsp;{" "}
          {new Date(post.date).toLocaleDateString("vi-VN")}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-block btn-outline-dark"
        >
          Đọc bài viết
        </Link>
      </div>
    </div>
  );
}

BlogFeatured.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    readTime: PropTypes.string,
    author: PropTypes.string,
  }),
};
