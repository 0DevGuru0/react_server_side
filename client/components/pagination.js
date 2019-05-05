import React from 'react';
import {Link} from 'react-router-dom'
export default ({currentPage,lastPage,hasNextPage,hasPreviousPage,classes,baseAddress})=>{
  let list=[]
  let pageNum = pagesContainer(currentPage,lastPage,5)
  pageNum.map(pg=>{
    let classArray = classes.pageList;
    if(pg == currentPage){
      classArray = [classes.pageList,classes.activePage].join(' ')
    }
    return list.push(
      <li key={Math.random()*pg} className={classArray}>
        <Link to={baseAddress+pg}>{pg}</Link>
      </li>
    )
  })
  if (currentPage !== lastPage && !pageNum.find(e => e == lastPage)) {
    list.push(
        <li key ={Math.random()*lastPage} className={classes.lastPage}>
            <Link to={baseAddress+lastPage}>lastPage[{lastPage}]</Link>
        </li>
    )
  }

  if (hasNextPage) {
    list.push(
      <li key={Math.random()*currentPage} className={classes.nextPage}>
        <Link to={baseAddress+(currentPage+1)}>NextPage</Link>
      </li>
    )
  }

  if (hasPreviousPage) {
    list.unshift(
      <li key={Math.random()/currentPage}  className={classes.previousPage}>
        <Link to={baseAddress+(currentPage-1)}>PreviousPage</Link>
      </li>
    )
  }
  return list;
}

function range(from, to, step = 1){
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
}
function pagesContainer(currentPage= 1,totalPage=1,neighbor = 2){
    currentPage = (typeof(currentPage) === 'number' && currentPage > 0 ) ? currentPage : 1;
    totalPage   = (typeof(totalPage) === 'number' && totalPage > 0 ) ? totalPage : 1;
    neighbor    = (typeof(neighbor) === 'number' && neighbor > 0 ) ? neighbor : 2;
    let startPoint;
    let endPoint;
    /* test :totalPage=100  , neighbor=5 */
    // pages lower than neighbor_5
    if(currentPage<neighbor){
      startPoint = 1
      return range(startPoint,neighbor*2)
    }
     // pages >= 100 || pages > 95
    if(currentPage>=totalPage || currentPage>(totalPage-neighbor)){
      startPoint  = totalPage -  neighbor*2
      endPoint    = startPoint + neighbor*2
      return range(startPoint,endPoint);
    }
    // pages > 5 and pages < 100
    if(currentPage>=neighbor&& currentPage<totalPage){
      startPoint  = currentPage - neighbor;
      endPoint    = currentPage  + neighbor
      return range(startPoint,endPoint);
    }
}
