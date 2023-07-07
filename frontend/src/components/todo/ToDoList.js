import React, { useState } from 'react';
import {
    Box,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ toDoData, changeCheck, deleteToDo }) => {

    const handleCheckboxToggle = (id) => {
        changeCheck(id);
    };

    const handleDeleteTodo = (id) => {
        deleteToDo(id);
    };

    if (toDoData.length === 0) {
        return (
            <Typography variant="body1"
                        color="textSecondary"
            >
                No items in the Todo list.
            </Typography>
        );
    }
    return (
        <List>
            {toDoData.map((todo) => (
                <Box
                    key={todo.id}
                    component="li"
                    sx={{
                        bgcolor: todo.completed
                            ? '#666666'
                            : '#333333',
                        borderRadius: '8px',
                        marginBottom: '8px',
                        padding: '8px',
                    }}
                >
                    <ListItem disableGutters
                              component="div">
                        <ListItemIcon>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => handleCheckboxToggle(todo.id)}
                                color="secondary"

                            />
                        </ListItemIcon>
                        <ListItemText primary={todo.text} />
                        <Box sx={{ right: '10px' }}>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDeleteTodo(todo.id)}
                                sx={{ color: 'red' }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </ListItem>
                </Box>
            ))}
        </List>
    );
};

export default TodoList;

