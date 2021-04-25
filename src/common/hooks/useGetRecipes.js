import {useState, useEffect} from 'react';
import {getResourceAll} from '@services/httpService';
import { paths, urls } from '@constants/networking';

export default function useGetRecipes() {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(()=> {
    const getRecipes = async ()=> {
      return await getResourceAll({
        calls: [{ path:  paths(urls.API.RANDOM_RECIPE)}],
        repeatCalls: 5,
        previousValue: resources,
        error: setError,
        loading: setLoading,
        resource: setResources
      })
    }

    const fetchRecipes = async ()=> {
      await getRecipes();
    }

    fetchRecipes()
  }, [])

  console.log('THE HELL', resources);
  return {
    loading,
    resources,
    error,
    setResources,
    setError,
    setLoading
  };
}