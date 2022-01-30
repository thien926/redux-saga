import { ThemeProvider } from "@mui/material";
import styles from './styles.jsx';
import { withStyles } from "@mui/styles";
import Taskboard from "../Taskboard";
import theme from "../../commons/Theme";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore-v2";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from "../../components/GlobalLoading/index.jsx";

const store = configureStore();
function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ToastContainer />
                <Taskboard />
                <GlobalLoading />
            </ThemeProvider>
        </Provider>
    );
}

export default withStyles(styles)(App);
