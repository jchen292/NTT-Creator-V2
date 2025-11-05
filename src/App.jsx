import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tips from "./components/Tips";
import "./App.css";
import Header from "./components/layout/Header";
import AddTip from "./components/AddTip";
import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  // State hook to store all tips
  const [tips, setTips] = useState([]);

  // Mark a tip as completed
  const markComplete = (id) => {
    setTips((prevTips) =>
      prevTips.map((tip) => {
        if (tip.id === id) {
          const updated = { ...tip, completed: !tip.completed };
          if (updated.completed) alert("Completed!");
          return updated;
        }
        return tip;
      })
    );
  };

  // Delete a tip
  const deleteTip = (id) => {
    setTips((prevTips) => prevTips.filter((tip) => tip.id !== id));
  };

  // Add a new tip
  const addTip = (title) => {
    const newTip = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTips((prevTips) => [...prevTips, newTip]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTip addTip={addTip} />
                  <Tips
                    tips={tips}
                    markComplete={markComplete}
                    deleteTip={deleteTip}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
