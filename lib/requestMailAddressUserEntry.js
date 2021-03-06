// @flow
import Fetch from './fetch';

export default (
  ncmb: any,
  options: {
    query: {mailAddress: string},
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
      method: 'POST',
      endpoint: 'requestMailAddressUserEntry',
      sessionToken: false,
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
