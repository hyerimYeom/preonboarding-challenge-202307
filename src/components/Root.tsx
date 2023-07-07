import { Link } from 'react-router-dom'

function Root() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>Main</div>
      <Link to="/about">
        <button>About</button>
      </Link>
    </>
  )
}

export default Root;
