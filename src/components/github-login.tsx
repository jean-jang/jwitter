import { styled } from "styled-components";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  background-color: white;
  color: black;
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  span {
    margin-left: 5px;
  }
`;
const Logo = styled.img`
  width: 23px;
  height: 23px;
  vertical-align: middle;
`;

export default function GithubLogin() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Error during GitHub sign-in:", error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      <span>Continue with GitHub</span>
    </Button>
  );
}
