const qs = require('querystring');

exports.handler = async (event, context) => {
  try {
    // Parse the body from the form submission
    const data = qs.parse(event.body);

    // Get the response from the form
    const response = data.response;

    // Log or use the response data as needed
    console.log('Form response:', response);

    // Return a success message
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Response received' }),
    };
  } catch (error) {
    // Log and return an error if something goes wrong
    console.error('Error parsing data:', error);

    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Error processing the request' }),
    };
  }
};
