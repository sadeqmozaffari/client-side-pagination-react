import { useEffect, useState } from "react";
import usePaginateFetch from "./usePaginateFetch";
import Card from "./components/card";
import Pagination from "./components/pagination";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";
function App() {
  const [loading, data] = usePaginateFetch(url, 3);
  const [page, setPage] = useState(1);
  const [programmers, setProgrammers] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }
    setProgrammers(data[page - 1]);
  }, [loading,page]);


  return (
  
      <div className="container pt-5">
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border"></div>
          </div>
        )}
        {!loading && (
          <>
          <div className="row d-flex justify-content-center">
            {programmers.map(({ id, ...programmers }) => {
              return (
                <div className="col-3" key={id}>
                  <Card {...programmers} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <Pagination pages={data.length} setPage={setPage} activePage={page}/>
          </div>
          </>
        )}
      
      </div>
    
  );
}

export default App;
