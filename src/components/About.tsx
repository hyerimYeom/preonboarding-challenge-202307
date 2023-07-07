import { Link } from "react-router-dom";

function About() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>About</div>
      <Link to="/">
        <button>Go Main</button>
      </Link>
    </>
  );
}

export default About;
