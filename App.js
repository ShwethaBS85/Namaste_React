const heading = React.createElement("h1", { id:"heading" , style:{backgroundColor: "yellow"}}, "Hello world from react");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);