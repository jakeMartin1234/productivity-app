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

const TodoList = () => {

    const [todos, setTodos] = useState([
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: false },
    ]);

    const handleCheckboxToggle = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <Box sx={{
            maxWidth: '1000px',
            width: '100%',
            margin: '0 auto',
        }}>
            <List>
                {todos.map((todo) => (
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
                        <ListItem disableGutters>
                            <ListItemIcon>
                                <Checkbox
                                    checked={todo.completed}
                                    onChange={() => handleCheckboxToggle(todo.id)}
                                />
                            </ListItemIcon>
                            <ListItemText primary={todo.text} />
                            <ListItemSecondaryAction sx={{ right: '8px' }}>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    sx={{ color: 'red' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Box>
                ))}
                {todos.length === 0 && (
                    <Typography variant="body1" color="textSecondary">
                        No items in the Todo list.
                    </Typography>
                )}
            </List>
        </Box>

    );
};

export default TodoList;

