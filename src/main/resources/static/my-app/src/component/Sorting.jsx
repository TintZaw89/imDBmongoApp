import  {useState} from 'react';

export const SortData = (key) => {
  const [tableData, setTableData] = useState(); //data
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  
    let direction = 'asc';
  if (sortConfig.key === key && sortConfig.direction === 'asc') {
    direction = 'desc';
  }
  const sortedData = [...tableData].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
  setTableData(sortedData);
  setSortConfig({ key, direction });
  <th onClick={() => SortData('columnName')}>Column Name</th>
};
