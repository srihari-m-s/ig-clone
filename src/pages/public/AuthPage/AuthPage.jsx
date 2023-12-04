import MaxWidthWrapper from "../../../layouts/MaxWidthWrapper/MaxWidthWrapper";
import AuthForm from "../../../components/AuthForm/AuthForm";
import { Image, Stack } from "react-bootstrap";

export default function AuthPage() {
  return (
    <MaxWidthWrapper>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Stack
          direction="horizontal"
          className="justify-content-center align-self-center"
        >
          <div className="d-none d-lg-block">
            <Image src="/auth.png" />
          </div>
          <AuthForm />
        </Stack>
      </div>
    </MaxWidthWrapper>
  );
}
