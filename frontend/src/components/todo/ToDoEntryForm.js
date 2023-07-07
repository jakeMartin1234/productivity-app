import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Box component="form"
             onSubmit={handleSubmit}
             sx={{
                 marginTop: '2rem',
             }}
        >
            <TextField
                label="New Todo"
                variant="outlined"
                value={text}
                onChange={handleChange}
                placeholder="Enter new items here ..."
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Todo
            </Button>
        </Box>
    );
};

export default TodoForm;
