function NumbersTable({limit}) {

    const numberArray = [];
    for(let i = 1; i <= limit; i++) {
        numberArray.push(i)
    }

    const table = numberArray.map((number) => (
        <div className="table-style" key={number} style={{ backgroundColor: number % 2 === 0 ? "red" : "white"}}>
          {number}
        </div>
      ));
    
      return <div>{table}</div>;
    }
    
    export default NumbersTable;