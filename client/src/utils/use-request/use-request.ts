import useSWR from 'swr';

import fetcher from 'utils/fetcher';

type DataResponse<T> = {
  data?: T;
  isLoading: boolean;
  isError: any;
};

const useRequest = <T>(gqlQuery: string): DataResponse<T> => {
  const { data, error } = useSWR<T>(gqlQuery, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRequest;
