import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <div className="display-3 text-danger mb-4 pt-5 mt-5 text-center fw-bold">
        404, Not found Page !
      </div>
      <div className="text-center">
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    </>
  );
};

export default NotFound;
