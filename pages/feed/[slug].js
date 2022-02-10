import { Container, Row, Col, Image } from "react-bootstrap";
import Toolbar from "../../Components/Toolbar";
import { useRouter } from "next/router";
import styles from "../../styles/Feed.module.scss";

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  //   console.log(pageNumber, articles);

  return (
    <>
      <Toolbar />
      <section id="feed">
        <Container>
          <h2 className="text-center my-5 display-4 fw-bold">Today's News</h2>
          <Row>
            {articles.map((article) => {
              return (
                <Col xl={10} className="mx-auto my-3" key={article.id}>
                  <h5
                    onClick={() =>
                      router.push((window.location.url = article.url))
                    }
                  >
                    {article.title}
                  </h5>
                  <p>{article.description}</p>
                  {!!article.urlToImage && (
                    <Image src={article.urlToImage} alt={article.title} fluid />
                  )}
                </Col>
              );
            })}
          </Row>

          <Col xl={6} className="mx-auto">
            <div className={styles.mainDiv}>
              <div
                onClick={() => {
                  if (pageNumber > 1) {
                    router
                      .push(`/feed/${pageNumber - 1} `)
                      .then(() => window.scrollTo(0, 0));
                  }
                }}
                className={pageNumber === 1 ? styles.disabled : styles.active}
              >
                Previous Page
              </div>
              <div className="mx-5">#{pageNumber}</div>
              <div
                onClick={() => {
                  if (pageNumber < 5) {
                    router
                      .push(`/feed/${pageNumber + 1} `)
                      .then(() => window.scrollTo(0, 0));
                  }
                }}
                className={pageNumber === 5 ? styles.disabled : styles.active}
              >
                Next Page
              </div>
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const pageNumber = ctx.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const originalData = await apiResponse.json();
  const { articles } = originalData;
  //   console.log(articles);

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
