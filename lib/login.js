// @flow
import Fetch from './fetch';

export default (
  ncmb: any,
  options: {
    query: {[key: string]: string},
    success: Function,
    error: Function,
  },
) => {
  const {
    query,
    success,
    error,
  } = options;

  Fetch(
    ncmb,
    {
      method: 'GET',
      endpoint: 'login',
      sessionToken: false,
      responseContent: true,
      query,
      success,
      error,
      beforeFetch: null,
      beforeSuccess: (json) => {
        ncmb.setCurrentUser(json);
      },
      beforeError: null,
    },
  );
};
