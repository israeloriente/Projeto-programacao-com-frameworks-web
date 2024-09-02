import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import { getHello } from "./api/helloWorld";

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getHello());
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World from React!</p>
        <p>{data} from the server</p>
      </header>
    </div>
  );
};

export default App;
