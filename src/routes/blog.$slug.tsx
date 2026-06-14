import { PageMeta } from "@/components/site/PageMeta";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { SITE } from "@/lib/site";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-2xl font-semibold">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <>
            <PageMeta title="{`${post.title} \u2014 VHLabs Blog`}" />
      <article className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {post.tags.join(" · ")}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            <time dateTime={post.iso}>{post.date}</time> · {post.read} · {post.author}
          </p>
          <div className="mt-12 text-[17px] max-w-prose">{post.content}</div>
        </div>
      </article>
    </>
  );
}
