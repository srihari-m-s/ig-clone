import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required")
    .min(4, "Must 4 or more chars long")
    .max(20, "Must at most 20 chars"),
  password: Yup.string()
    .required("Required")
    .min(4, "Must 4 or more chars long")
    .max(20, "Must at most 20 chars")
    .matches(/[A-Z]/, "Need atleast 1 uppercase letter")
    .matches(/[0-9]/, "Need atleast 1 number"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function LoginForm({ isLogin }) {
  const navigate = useNavigate();

  function handleAuth() {
    navigate("/");
  }

  return (
    <Formik
      validationSchema={isLogin ? loginSchema : signupSchema}
      onSubmit={handleAuth}
      initialValues={{ username: "", password: "", confirmPassword: "" }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="">
          <Form.Group className="mb-4" controlId="username">
            <Form.Label visuallyHidden>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              isInvalid={touched.username && errors.username}
              placeholder="Username"
            />
            {!isLogin && (
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <Form.Label visuallyHidden>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && errors.password}
              placeholder="Password"
              autoComplete="off"
            />
            {!isLogin && (
              <Form.Control.Feedback className="" type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          {!isLogin && (
            <Form.Group className="mb-4" controlId="confirmPassword">
              <Form.Label visuallyHidden>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                isInvalid={touched.confirmPassword && errors.confirmPassword}
                placeholder="Confirm Password"
              />
              <Form.Control.Feedback className="" type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          )}

          {/* Submit button */}
          <div className="d-grid">
            <Button variant="startup" type="submit" className="">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
