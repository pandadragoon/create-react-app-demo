import Axios from 'axios';
import { API_URL } from '@constants/networking';
import {on} from '@utils/awaitHandler';

let instance = Axios.create({
  baseURL: API_URL,
});

export const axios = instance;

export const getResource = async ({
  path,
  loading,
  error,
  resource,
  previousValue,
  config,
  skipUpdate
}) => {
  loading(true);
  const [err, response] = await on(instance.get(path, config || {}));

  const errorResponse = handleError({ err, error });
  const resourceResponse = handleResourceUpdate({
    previousValue,
    err,
    response,
    resource,
    skipUpdate
  });

  loading(false);

  return [errorResponse, resourceResponse];
};

export const getResourceAll = async ({calls, loading, error, resource, repeatCalls, previousValue, skipUpdate})=> {
  
  let requestList = [];
  loading(true);

  if(repeatCalls){
    const request = calls[0];
    for(let i = 0; i < repeatCalls; i++){
      requestList.push(instance.get(request.path, request.config || {}))
    }
  } else {
    calls.forEach(request => requestList.push(instance.get(request.path, request.config || {})))
  }

  const [err, res] = await on(Axios.all(requestList));

  const errorResponse = handleError({ err, error });
  const responseList = res.map(r => r.data.meals[0]);

  if(!repeatCalls){
    loading(false);
    return [errorResponse, responseList]
  }

  const resourceResponse = handleResourceUpdate({
    previousValue,
    err,
    response: {data: responseList},
    resource,
    skipUpdate
  });

  loading(false);

  return [errorResponse, resourceResponse];
}

const handleError = ({ err, error }) => {
  const errorResponse = err?.response;
  error(errorResponse);

  return errorResponse;
};

const handleResourceUpdate = ({
  previousValue,
  err,
  response,
  resource,
  skipUpdate
}) => {

  const resourceResponse = err ? previousValue :  response?.data;
  
  resource(resourceResponse);

  return resourceResponse;
};