import debug from 'debug';
const dbg = debug('aws');

export function success(body) {
  return buildResponse(200, body);
}

export function failure(body, error) {
  if (error) {
    dbg(error);
  }
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };
}
