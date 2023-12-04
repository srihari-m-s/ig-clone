import { Container } from "react-bootstrap";

export default function MaxWidthWrapper({ children }) {
  return (
    <Container fluid="md" className="p-0">
      {children}
    </Container>
  );
}
