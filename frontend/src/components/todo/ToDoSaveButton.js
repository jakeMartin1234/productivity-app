import React, { useState } from 'react';
import { Button, Alert } from '@mui/material';
import axios from 'axios';

function ToDoSaveButton({ toDoData, user }) {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleClick = async () => {

        const response = await axios.post('http://localhost:8000/addTodo', {
            toDoData: toDoData,
            user: user,
        });
        if (response.status !== 200) {
            console.log("API call successful!");
        }

        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    return (
        <div>
            <Button variant="contained"
                    onClick={handleClick}
                    sx={{ marginTop: '1.5rem'}}
            >
                Save ToDo List
            </Button>
            {showSuccess && (
                <Alert
                    severity="success" // Change the severity as desired (success, error, warning, info)
                    onClose={() => setShowSuccess(false)}
                >
                    API call successful!
                </Alert>
            )}
        </div>
    );
}

export default ToDoSaveButton;

