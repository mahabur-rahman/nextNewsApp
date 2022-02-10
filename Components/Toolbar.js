import { Container, Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.scss";

const Toolbar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto py-3">
              <div
                onClick={() => router.push("/")}
                className={`mx-3 ${styles.menu}`}
              >
                Home
              </div>
              <div
                onClick={() => router.push("/feed/1")}
                className={`mx-3 ${styles.menu}`}
              >
                Feed
              </div>
              <div
                onClick={() => router.push("/eom")}
                className={`mx-3 ${styles.menu}`}
              >
                EOM
              </div>
              <div
                className={`mx-3 ${styles.menu}`}
                onClick={() =>
                  router.push(
                    (window.location.href = "https://www.linkedin.com/")
                  )
                }
              >
                Linkedin
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Toolbar;
