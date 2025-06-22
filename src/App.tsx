import './App.css'
import "./i18n";
import Layout from './components/layout';
import {ThemeProvider} from "@/components/providers/theme-provider.tsx";



function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Layout/>
            </ThemeProvider>
        </>
    );
}

export default App
