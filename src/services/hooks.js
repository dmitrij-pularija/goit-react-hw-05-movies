import { useState, useCallback } from 'react';
import getData from './Api';

export const useQuery = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ loading: false, error: false });

  const dataQuery = useCallback(async (type, page, search) => {
    setState(prevState => {
      return { ...prevState, loading: true };
    });

    try {
      const response = await getData(type, page, search);
      setData(response);
    } catch (error) {
      setState(prevState => {
        return { ...prevState, error: true };
      });
    } finally {
      setState(prevState => {
        return { ...prevState, loading: false };
      });
    }
  }, []);

  return { state, data, dataQuery };
};

export const useToggle = () => {
  const [modalShow, setmodalShow] = useState(false);
  const modalToggle = () => setmodalShow(modalShow => !modalShow);
  return { modalShow, modalToggle };
};