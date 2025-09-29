/* eslint-disable import/no-anonymous-default-export */
export default {
  api: {
    input: 'http://localhost:8080/openapi/documentation.yaml',
    output: {
      target: 'shared/api/generated.ts',
      client: 'react-query',
      httpClient: 'fetch',
    },
  },
}
