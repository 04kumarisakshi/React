

function Motion({currentPage,totalpage=10,onPageChange}) {
  
  function generateNoofPages(){
    const Pages= [];
    for(let i=1;i<=totalpage;i++){
        Pages.push(i);
    }
    return Pages;
  }
    return (
    <div  className="pagination">
        <button  className="pagination-btn" onClick={()=>onPageChange(currentPage-1)}
         disabled={currentPage === 1}>previous</button>
        {generateNoofPages().map((PagesNo)=>(
            <button  className={`pagination-btn ${currentPage === PagesNo ? 'active' :''}`}
            key={PagesNo}
          onClick={() => onPageChange(PagesNo)}
        >
          {PagesNo}
            </button>
        ))}
        <button  className="pagination-btn" onClick={()=>onPageChange(currentPage+1)}
          disabled={currentPage === totalpage}
        >Next</button>
    </div>
  )
}

export default Motion