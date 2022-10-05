import React from 'react';
import User from './components/User';

const Users = ({ users }) => {

    return (
        <>
            <h2>List of users</h2>
            <ol>
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </ol>
        </>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data
        }
    }
} 