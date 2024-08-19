import React from 'react';

function Ex03UserTable ( { users }) {  // { users } = props에 users값들만 할당
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map (user => (
                    <React.Fragment key={user.id}>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}

export default Ex03UserTable