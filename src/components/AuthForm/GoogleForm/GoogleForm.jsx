import { Image, Stack } from "react-bootstrap";

export default function GoogleForm({ isLogin }) {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="justify-content-center mb-3"
      style={{ cursor: "pointer" }}
    >
      <Image src="/google.png" width={30} />
      <span className="text-primary-emphasis fs-5">
        {isLogin ? "Login with" : "Sign Up"} Google
      </span>
    </Stack>
  );
}
