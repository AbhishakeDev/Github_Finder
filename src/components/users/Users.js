import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;
    // state={
    //     users:[
    //         {
    //             id: 1,
    //             login: "mojombo",
    //             avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //             html_url: "https://github.com/mojombo"
    //         },
    //         {
    //             id: 2,
    //             login:"defunkt",
    //             avatar_url:  "https://avatars.githubusercontent.com/u/2?v=4",
    //             html_url:  "https://github.com/defunkt"
    //         },
    //         {
    //             id: 3,
    //             login: "pjhyett",
    //             avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    //             html_url:"https://github.com/pjhyett"
    //         }
    //     ]
    // }
    if (loading) {
        return <Spinner />;
    }
    else {
        return (
            <div style={userStyle}>
                {users.map(user =>
                    (<UserItem key={user.id} user={user}></UserItem>)
                )}
            </div>
        )
    }

}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
