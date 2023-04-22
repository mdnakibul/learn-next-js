import React from 'react';

const User = ({ user }) => {
    return (
        <div style={{ border: '1px solid white', margin: '5px', padding: '5px', borderRadius: '5px' }}>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
        </div>
    );
};

export default User;