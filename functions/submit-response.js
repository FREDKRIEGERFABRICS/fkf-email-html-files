const qs = require('querystring');

exports.handler = async (event, context) => {
  try {
    // Log the raw event body to see the incoming data
    console.log('Raw event body:', event.body);

    // Parse the body from the form submission
    const data = qs.parse(event.body);

    // Get the response from the form
    const response = data.response;

    // Log the parsed response data
    console.log('Form response:', response);

    // Here you could save or process the response if needed (e.g., save to a database)

    // Redirect to the thank-you page after successful form submission
    return {
      statusCode: 302,  // 302 is for redirection
      headers: {
        Location: "https://www.fredkriegerfabrics.com/thank-you-page-1",  // Your custom thank-you page URL
      },
      body: JSON.stringify({ message: 'Redirecting...' }),  // Optional message in case something goes wrong
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
