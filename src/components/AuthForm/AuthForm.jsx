import { Card, Image, Stack } from "react-bootstrap";
import LoginForm from "./LoginForm/LoginForm";
import GoogleForm from "./GoogleForm/GoogleForm";
import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Stack gap={4} className="align-self-center">
      {/* Login */}
      <Card className="authForm-wrapper">
        <Card.Header className="border-0 bg-transparent text-center">
          <Image src="/logo.png" alt="instagram logo" fluid />
        </Card.Header>
        <Card.Body className="d-flex flex-column gap-4">
          <LoginForm isLogin={isLogin} />
          <div className="text-center d-flex align-items-center">
            <span className="border-bottom flex-grow-1"></span>
            <span className="px-3">OR</span>
            <span className="border-bottom flex-grow-1"></span>
          </div>
          <GoogleForm isLogin={isLogin} />
        </Card.Body>
      </Card>

      {/* Signup */}
      <Card>
        <Card.Body>
          <Stack className="justify-content-center text-center">
            <p className="m-0">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary-emphasis text-decoration-none ms-2"
                style={{ cursor: "pointer" }}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </Stack>
        </Card.Body>
      </Card>

      {/* Get the App */}
      <Stack gap={3} className="w-100">
        <p className="m-0 text-center">Get the App</p>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center"
        >
          <Image
            src="/playstore.png"
            height={40}
            className="object-fit-contain"
            // style={{ aspectRatio: "15/7" }}
          />
          <Image
            src="/microsoft.png"
            height={40}
            className="object-fit-contain"
            // style={{ aspectRatio: "15/7" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
