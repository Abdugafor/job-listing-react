import axios from "axios";
import { useState } from "react";

const getData = async (url) => {
  const res = await fetch(url)

  return await res.json()
}

function App() {
  const [jobs, setJobs] = useState({})
  getData('http://localhost:3000/jobs').then(data => console.log(data))
  return (
    <h2>Hello</h2>
  );
}

export default App;
