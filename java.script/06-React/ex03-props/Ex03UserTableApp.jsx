import React from 'react'
import UserTable from './Ex03UserTable'

const users = [
    { id: 1, name: 'Jhon', email: 'jhon@sample.com'},
    { id: 2, name: 'Kim', email: 'kim@sample.com'},
    { id: 3, name: 'Lee', email: 'lee@sample.com'},
];

function Ex03UserTableApp() {
    return (
        <div>
            <h1>User Table</h1>
            <UserTable users={users} />
        </div>
    );
}

export default Ex03UserTableApp