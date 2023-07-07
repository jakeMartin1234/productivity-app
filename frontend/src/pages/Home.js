import React, {useEffect} from "react";
import LogoutButton from "../components/identity/LogoutButton";
import {Box, Toolbar, AppBar, Typography, Button, List} from "@mui/material";
import ToDoPage from "./ToDoPage";
import Calendar from "./Calendar";
import HomeLandingPage from "./HomeLandingPage";
import axios from "axios";

const Home = ({ user }) => {
    const [renderedComponent, setRenderedComponent] = React.useState("home");
    const [toDoData, setToDoData] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/getTodo', {
                    user: user,
                });
                setToDoData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData().then(() => console.log("Fetched data from API"));
    }, [user]);

    const addToToDoData = (text) => {
        setToDoData((prevToDoData) => [
            ...prevToDoData,
            { id: prevToDoData.length + 1, text, completed: false },
        ]);
    }
    const handleCheckboxToggle = (id) => {
        setToDoData((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const handleDeleteTodo = (id) => {
        setToDoData((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const renderComponent = () => {
        if (renderedComponent === "todo") {
            return <ToDoPage
                addToDo={addToToDoData}
                toDoData={toDoData}
                changeCheck={handleCheckboxToggle}
                deleteToDo={handleDeleteTodo}
                user={user}
            />
        } else if (renderedComponent === "calendar") {
            return <Calendar />
        } else {
            return <HomeLandingPage />
        }
    }

    const handleAppBarClick = (component) => {
        setRenderedComponent(component);
    }


    return (
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => handleAppBarClick("home")}>
                        <Typography variant={"body1"} fontSize={"1.2rem"} sx={{ mr: 4 }}>
                            Productivity App
                        </Typography>
                    </Button>
                    <List>
                        <Button
                            variant="text"
                            color="secondary"
                            onClick={() => handleAppBarClick("todo")}
                        >
                            TODO LIST
                        </Button>
                        <Button
                            variant="text"
                            color="secondary"
                            onClick={() => handleAppBarClick("calendar")}
                        >
                            CALENDAR
                        </Button>
                    </List>

                    <Box sx={{ flexGrow: 1 }}></Box>
                    <LogoutButton />
                </Toolbar>
            </AppBar>
            <Box sx={{
                flexGrow: 1,
                marginTop: '2.0rem',
            }}>
                {renderComponent()}
            </Box>
        </Box>
    )
};

export default Home;
