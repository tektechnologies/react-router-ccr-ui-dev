
// FIRST LESSON //////////////////////////////////////////////
import TeamLogo from './TeamLogo';
import { Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';

export default function Home() {
    const {
        loading,
        response: teamNames
    } = useTeamNames();

    if (loading) {
        return null;
    }


    return (
        <div className="container">
            <h1 className='large-header'>
                Hash History Basketball League
            </h1>
            <h3 className='header text-center'>
                Select a team
            </h3>
            <div className='home-grid'>
                {teamNames.map((id) => (
                        <Link key={id} to={`/${id}`}>
                            <TeamLogo id={id} width='125px' />
                        </Link>
                    ))}
            </div>
        </div>
    )
}
// FIRST LESSON //////////////////////////////////////////////


// import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";

// import { getPosts } from "./api";

// function Home() {
//   const posts = getPosts();

//   return (
//     <div>
//       <h1>Posts</h1>
//       <nav>
//         <ul>
//           {posts.map(({ id, title }) => (
//             <li key={id}>
//               <Link to={`blog/${id}`}>{title}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }
