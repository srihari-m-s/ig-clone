import { Container } from "react-bootstrap";
import FeedPosts from "../../../components/HomePage/FeedPosts/FeedPosts";
import Suggestions from "../../../components/HomePage/Suggestions/Suggestions";

export default function HomePage() {
  return (
    <Container className="border">
      <div className="d-flex gap-5 justify-content-center">
        <div className="">
          <FeedPosts />
        </div>

        <div className="d-none d-lg-block" style={{ width: "300px" }}>
          <Suggestions />
        </div>
      </div>
    </Container>
  );
}
