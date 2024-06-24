import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// FIRST LESSON //////////////////////////////////////////////////////////////////
import Navbar from './NavBar';
import Home from './Home';
import Teams from './Teams';
import Players from './Players';


export default function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/players' element={<Players />}/>
        <Route path='/teams' element={<Teams />}/>
      </Routes>
    </Router>
  )
}
// FIRST LESSON //////////////////////////////////////////////////////////////////





// SECOND LESSON ////////////////////////////////////////////////////////////////
// import { getPost, getPosts } from './api';

// function Home() {
//   const posts = getPosts();

//   return (
//     <div>
//       <h1>Posts</h1>
//       <nav>
//         <ul>
//           {
//             posts.map(({id, title}) => (
//               <li key={id}>
//                 <Link to={`blogs/${id}`}>{title}</Link>
//           </li>
//         ))
//           }
          
//         </ul>
//       </nav>
//     </div>
//   );
// }

// function Post() {
//   return (
//     <div>
//       good bye world
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<Home />}
//         />
//         <Route
//           path="blog/:id"
//           element={<Post />}
//         />
//       </Routes>
//     </Router>
//   );
// }

//lesson three 

/*
  Create two Routes so that the given navigation works and the proper UI is displayed.

  When the user navigates to /tyler, they should see "Student: tyler".
  When the user navigates to /invoices/1, they should see "Invoice #1".
*/

// import * as React from "react";
// import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

// const Student = () => {
//   const { name } = useParams();

//   return <h3>Student: {name}</h3>;
// };

// const Invoice = () => {
//   const { id } = useParams();

//   return <h3>Invoice #{id}</h3>;
// };

// export default function App() {
//   return (
//     <Router>
//       <h2>Invoices</h2>
//       <ul>
//         <li>
//           <Link to="/invoices/1">1</Link>
//         </li>
//         <li>
//           <Link to="/invoices/2">2</Link>
//         </li>
//         <li>
//           <Link to="/invoices/3">3</Link>
//         </li>
//         <li>
//           <Link to="/invoices/4">4</Link>
//         </li>
//       </ul>

//       <h2>Students</h2>
//       <ul>
//         <li>
//           <Link to="/tyler">Tyler</Link>
//         </li>
//         <li>
//           <Link to="/jake">Jake</Link>
//         </li>
//         <li>
//           <Link to="/mikenzi">Mikenzi</Link>
//         </li>
//       </ul>

//       <hr />
//       <Routes>
//       <Route path="/:name" element={<Student />} />
//       <Route path="/invoices/:id" element={<Invoice />} />
//       </Routes>
//     </Router>
//   );
// }
