exports.handler = async (event, context) => {
  // Parse the POST data from the form
  const formData = JSON.parse(event.body);
  
  // Capture the response value
  const userResponse = formData.response;
  
  // Here, you can log or save the response data to a database, or take any action based on the response.
  console.log(`User response: ${userResponse}`);
  
  // Return a response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Thank you for your response!' })
  };
};
