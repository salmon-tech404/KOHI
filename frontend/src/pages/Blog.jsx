import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import BlogFeatured from "../components/sections/BlogFeatured";
import BlogGrid from "../components/sections/BlogGrid";
import { featuredPost, latestPosts } from "../constants/blogData";

export default function Blog() {
  return (
    <>
      <Navbar variant="light" />
      <main className="min-h-screen bg-cream pt-28 md:pt-36">
        <div className="max-w-6xl px-6 mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="section-label">Blog</p>
            <h1 className="section-title">Blog &amp; Articles</h1>
          </div>

          {/* Featured */}
          <div className="mb-20">
            <BlogFeatured post={featuredPost} />
          </div>

          {/* Divider */}
          <div className="mb-16 border-t border-coffee-200" />

          {/* Grid */}
          <div className="mb-24">
            <BlogGrid posts={latestPosts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
