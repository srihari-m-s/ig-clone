import FeedPost from "../FeedPost/FeedPost";

export default function FeedPosts() {
  return (
    <div className="py-5 px-2" style={{ maxWidth: "600px" }}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  );
}
