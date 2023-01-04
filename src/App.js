import "./App.css";
import ArraysPractice from "./Components/ArraysPractice";
import ArrayObjects from "./Components/ArrayObjects";
import StatesBasic from "./Components/StatesBasic";
import CrudApp from "./Components/CrudApp";
import FetchingData from "./Components/FetchingData";
import PropsPractice from "./Components/PropsPractice";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactQueryExample from "./Components/ReactQueryExample";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormExample from "./Components/FormExample";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
      refetchOnWindowFocus: false,
    },
  }});
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<FetchingData />}></Route>
            <Route path="/ArraysPractice" element={<ArraysPractice />}></Route>
            <Route path="/ArrayObjects" element={<ArrayObjects />}></Route>
            <Route path="/StatesBasic" element={<StatesBasic />}></Route>
            <Route path="/CrudApp" element={<CrudApp />}></Route>
            <Route path="/PropsPractice" element={<PropsPractice />}></Route>
            <Route path="/ReactQuery" element={<ReactQueryExample />}></Route>
            <Route path="/FormExample" element={<FormExample />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
