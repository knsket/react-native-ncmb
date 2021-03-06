// @flow
import Fetch from '../fetch';

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

  if (!ncmb.currentUser) throw new Error('currentUser is undefind');

  Fetch(
    ncmb,
    {
      method: 'PUT',
      endpoint: `users/${ncmb.currentUser.objectId}`,
      sessionToken: true,
      responseContent: true,
      query,
      success,
      error,
      beforeFetch: null,
      beforeSuccess: null,
      beforeError: null,
    },
  );
};
