import { request } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';

const fetcher = (query: RequestDocument): Promise<any> => request('/graphql', query);
export default fetcher;
