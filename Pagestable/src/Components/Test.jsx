import { useState } from "react";
import Motion from "./Motion"
import './Motion.css';

function Test() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,

  }));
console.log(dummyData)
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(currentPage){
    setCurrentPage(currentPage)
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentListOfItems, indexOfFirstItem, indexOfLastItem);

  return (
    <div>
     
      <ul className="list-items">
        {currentListOfItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
      <Motion
      currentPage={currentPage}
      totalPages={Math.ceil(dummyData.length / itemsPerPage)}
      onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Test