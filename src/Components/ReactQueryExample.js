import { useQuery } from "@tanstack/react-query";
// import { Axios } from "axios";

function ReactQueryExample() {
  const { data, isLoading, isError, refetch} = useQuery(["cat"], () => {
    return fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => data.fact);
  });
    
    if (isError) {
        return <h1>Sorry, there is an error of fetch data</h1>
    }

    if (isLoading)
    {
        return <h1>Loading ...</h1>
        }
  return (
    <div>
      <h1>
        This is Example of React-Query
        <p>{data}</p>
        <button onClick={refetch}>Re-Fetch Data</button>
      </h1>
    </div>
  );
}

export default ReactQueryExample;
