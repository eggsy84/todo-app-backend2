'use strict';

module.exports.tasks = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Your API works',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
