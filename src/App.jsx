import React,{ useState, useEffect} from 'react';


function App() {
  const [currentSum, setCurrentSum] = useState(0);
  // const [currentSub, setCurrentSub] = useState(0);
  const [clear, setClear] = useState(false);


  useEffect(() => {
    document.querySelector('#result').value = "";
  }, [])

  useEffect(() => {
    if (clear)
      document.querySelector('#result').value = "";
  })


  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector('#num').value
    if (currentNum == '')
      return;
    let sum = currentSum + parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value = "";

  }

  const Subtract = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector('#num').value
    if (currentNum == '')
      return;
    let sum = currentSum - parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value = "";

  }

  const Clear = (e) => {
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }




  return (
    <main>
      <div className="App">
      <div className="add-subtract">
        <h1> Add/Subtract </h1>
      </div>
      <form>
        {/* <input type="text" id="result" value={currentSum} readOnly /> */}
        <input type="text" id="num" placeholder="Enter the  number here" />
        <br/>
        <br/>
        <button id="add" onClick={Add}>Addition of Number</button>
        <br/>
        <br/>
        <button id="sub" onClick={Subtract}>Subtraction of Number</button>
        <br/>
        <br/>
        <button id="clear" onClick={Clear}>Clear Console</button>
        <br/>
        <br/>
        <div id="result">
          Result: {currentSum}
        </div>
        
      </form>
    </div>
    </main>
  );
}

export default App;