// @flow
import Fetch from './fetch';

export default (
  ncmb: any,
  options: {
    success: Function,
    error: Function,
  },
) => {
  const {
    success,
    error,
  } = options;

  if (!ncmb.currentUser) throw new Error('currentUser is undefind');

  Fetch(
    ncmb,
    {
      method: 'GET',
      endpoint: 'logout',
      sessionToken: true,
      responseContent: false,
      query: null,
      success,
      error,
      beforeFetch: null,
      beforeSuccess: null,
      beforeError: null,
    },
  );
};
