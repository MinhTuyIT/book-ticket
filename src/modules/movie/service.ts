import {movies} from '../../data';

export const getListMovie = async (page: number, limit: number) => {
  try {
    const pageTemp = page - 1 < 0 ? 0 : page -1;
    const results = movies.slice(pageTemp * limit, pageTemp * limit + limit);
    return {
      result: {
        count: movies.length,
        results: results,
        hasNext: pageTemp * limit + limit < movies.length,
      },
    };
  } catch (error) {
    return {error};
  }
};
