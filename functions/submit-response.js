const qs = require('querystring');

exports.handler = async (event, context) => {
  try {
    // Log the raw event body and query string
    console.log('Raw event body:', event.body);
    console.log('Query string:', event.queryStringParameters);

    // Get the response from query string (for GET requests)
    const response = event.queryStringParameters.response;

    // Log the parsed response
    console.log('Form response:', response);

    // Redirect to the thank-you page after successful submission
    return {
      statusCode: 302, // 302 is for redirection
      headers: {
        Location: "https://www.fredkriegerfabrics.com/thank-you-page-1", // Your custom thank-you page URL
      },
      body: JSON.stringify({ message: 'Redirecting...' }),
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
