import { Link, Outlet, Route, Routes } from 'react-router-dom'

import Root from './Root'
import About from './About'

function Router() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" index element={<Root/>} />
          <Route path="/about" element={<About/>} />
        {/* </Route> */}
      </Routes>
    </>
  )
}

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }


export default Router
