

function ArraysPractice() {
  const names = ["Tas", "Adam", "Dani", "Zain"];
    
  return (
      <div>
          
      {names.map((name, key) => {
        return (<h2 key={key}>{name}</h2>);
      })}
       
    </div>
  );
}

export default ArraysPractice;
