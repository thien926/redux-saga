import { ThemeProvider } from "@mui/material";
import styles from './styles.jsx';
import { withStyles } from "@mui/styles";
import Taskboard from "../Taskboard";
import theme from "../../commons/Theme";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ToastContainer />
                <Taskboard />
            </ThemeProvider>
        </Provider>
    );
}

export default withStyles(styles)(App);
