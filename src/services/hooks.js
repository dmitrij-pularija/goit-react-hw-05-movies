import { useState, useEffect } from 'react';

const useQuery = ({})=> {
    const [results, setResults] = useState([]);
    const [pages, setPages] = useState(0);
    const [state, setState] = useState({ loading: false, error: false });

    return {state, pages, results }
};
    export default useQuery;   