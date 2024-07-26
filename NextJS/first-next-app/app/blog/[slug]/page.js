export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog post1</h1>
      <p>{params.slug} </p>
    </main>
  );
}
