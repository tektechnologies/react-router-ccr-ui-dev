import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// FIRST LESSON //////////////////////////////////////////////////////////////////
// import Navbar from './NavBar';
// import Home from './Home';
// import Teams from './Teams';
// import Players from './Players';


// export default function App () {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/players' element={<Players />}/>
//         <Route path='/teams' element={<Teams />}/>
//       </Routes>
//     </Router>
//   )
// }
// FIRST LESSON //////////////////////////////////////////////////////////////////





// SECOND LESSON ////////////////////////////////////////////////////////////////
import { getPost, getPosts } from './api';

function Home() {
  const posts = getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <nav>
        <ul>
          {
            posts.map(({id, title}) => (
              <li key={id}>
                <Link to={`blogs/${id}`}>{title}</Link>
          </li>
        ))
          }
          
        </ul>
      </nav>
    </div>
  );
}

function Post() {
  return (
    <div>
      good bye world
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="blog/:id"
          element={<Post />}
        />
      </Routes>
    </Router>
  );
}