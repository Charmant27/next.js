import ArticleList from "../components/ArticleList";
import { server } from "../config";
import Meta from "../components/Meta";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Meta title="Webdev weekly blog" />
      <ArticleList articles={articles} />
    </div>
  );
}

//data fetching
export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
