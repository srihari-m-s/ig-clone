import { Image } from "react-bootstrap";
import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFooter";

export default function FeedPost() {
  return (
    <>
      <PostHeader />
      <div className="text-center">
        <Image src="/img1.png" alt="user profile pic" fluid className="" />
      </div>
      <PostFooter />
    </>
  );
}
