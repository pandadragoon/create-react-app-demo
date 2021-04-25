export const API_URL = '/api';

const parse = (strings, ...values)=> {
  return [strings, values];
}

export const paths = (url, config) => {
  const [strings, values] = url;
  return strings
    .map( (str, idx)=> {
      let parsedStr = str;

      if(config){
        parsedStr = str.length ? parsedStr + config[values[idx]] : ''
      }
      
      return parsedStr
    })
    .join('');
}

export const urls = {
  API: {
    RANDOM_RECIPE: parse`/random`,
    SEARCH_RECIPE: parse`/search?s=${'searchTerm'}`
  },
  APPLICATION: {
    HOME: parse`/`,
    RECIPE_DETAILS: parse`/recipes/${'recipeId'}`
  }
}

