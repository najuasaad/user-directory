import React from "react";
import Header from "./components/Header"
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Header />
      <Container />
      <style jsx="true">{`
        body {
          background-color: grey
        }`}
      </style>
    </div>
  // change this to a div with a header and the container
  )
}

export default App;
