import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./logo.webp";
import User from "./user.png";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste react from Shwetha"
);

// JSX component

const jsxHeading = <h1>Namaste react from Shwetha</h1>;
// The above one is the react object its not react element

const Title = () => {
  return <h2 id="title">Namaste from title component</h2>;
};

const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste react functional component</h1>
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);

//Assignment

//Create a header component

const NewHeaderComponent = () => {
  const containerStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const inputStyle = {
    alignContent: "center",
    width: "40rem",
  };

  const userIconStyle = {
    borderRadius: 10,
  };

  return (
    <div style={containerStyle}>
      <img
        src={Logo}
        height={30}
        alt="Logo"
      />
      <input
        type="text"
        style={inputStyle}
      />
      <img
        src={User}
        height={40}
        width={40}
        style={userIconStyle}
        alt="User Icon"
      />
    </div>
  );
};
root.render(<NewHeaderComponent />);
