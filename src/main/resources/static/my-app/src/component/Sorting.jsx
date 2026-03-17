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
  //  <th onClick={() => SortData('columnName')}>Column Name</th>
};


/*     const sortTypes = {
    up: {
        class: 'sort-up',
        fn: (a, b) => a.net_worth - b.net_worth
    },
    down: {
        class: 'sort-down',
        fn: (a, b) => b.net_worth - a.net_worth
    },
    default: {
        class: 'sort',
        fn: (a, b) => a
    }
};
    const onSortChange = () => {
        const { currentSort } = this.state;
        let nextSort;

        if (currentSort === 'down') nextSort = 'up';
        else if (currentSort === 'up') nextSort = 'default';
        else if (currentSort === 'default') nextSort = 'down';

        this.setState({
            currentSort: nextSort
        });
    }; */
    //const [currentMovies, setCurrentMovies] = useState([]);
    //const [sorting, setSorting] = useState({ key: "name", ascending: true });
    
     //setCurrentMovies(movies);
 /*     useEffect(() => {
        const sortedMovies = [...currentMovies].sort((a, b) => {
            if (a[sorting.key] < b[sorting.key]) {
                return sorting.ascending ? -1 : 1;
            }
            if (a[sorting.key] > b[sorting.key]) {
                return sorting.ascending ? 1 : -1;
            }
            return 0;
        });
        setCurrentMovies(sortedMovies);
    }, [currentMovies, sorting]);
    function applySorting(key) {
        if (sorting.key === key) {
            setSorting({ ...sorting, ascending: !sorting.ascending });
        } else {
            setSorting({ key: key, ascending: true });
        }
    } */
