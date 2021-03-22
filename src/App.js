import './App.css'
import React, {useState, useEffect} from "react";
import LoadingMask from './components/LoadingMask'
import Hotel from './components/Hotel'

const App = () => {

	const [data, setData] = useState("")

	useEffect(() => {
		fetch("./api/hotels")
		.then((response) => response.json())
		.then((json) => setData(json))
	}, [])

	useEffect(() => {
    setTimeout(() => setData, 2000);
  }, []);

	if (data === "") {
		return ( <LoadingMask/>
		)
	} else {

  return (
    <div className="App">
			<h1>Hotels</h1>
      <Hotel data={data}/>
    </div>
  )
	}
}

export default App
