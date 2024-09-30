import { auth } from "../firebase";

export default function Home() {
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
