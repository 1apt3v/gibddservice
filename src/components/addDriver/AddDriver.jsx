import React from 'react';
import AddDriverForm from './forms/AddDriverForm';



const AddDriver = ({ createDataDriverToDB }) => {
    return (
        <div>
            <AddDriverForm createDataDriverToDB={createDataDriverToDB} />
        </div>
    );
};

export default AddDriver;