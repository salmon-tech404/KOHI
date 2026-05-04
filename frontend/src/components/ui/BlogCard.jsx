import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="mb-4 overflow-hidden aspect-4/3">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <span className="inline-block mb-2 text-xs tracking-widest uppercase text-gold">
        {post.category}
      </span>
      <h3 className="mb-2 font-serif text-base leading-snug transition-colors text-coffee-950 group-hover:text-gold">
        {post.title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed line-clamp-2 text-coffee-700/60">
        {post.description}
      </p>
      <p className="text-xs text-coffee-700/40">
        {post.author} &nbsp;·&nbsp; {post.readTime} đọc
      </p>
    </Link>
  );
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    readTime: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
  }),
};
