import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
      slug: "post-1",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in SSR (server-side rendering).",
      date: "2022-02-10",
    },
    {
      slug: "post-2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in SSR (server-side rendering).",
      date: "2022-02-10",
    },
    {
      slug: "post-3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in SSR (server-side rendering).",
      date: "2022-02-10",
    },
    {
      slug: "post-4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in SSR (server-side rendering).",
      date: "2022-02-10",
    },
  ];
  
function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS}/>
}
export default AllPostsPage;