const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  // Get the query parameters from the URL
  const { response, user_id, project } = event.queryStringParameters;

  // Define your Google Apps Script URL (replace with your actual URL)
  const googleAppsScriptUrl = "https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec";

  // Create the payload to send to Google Apps Script
  const payload = new URLSearchParams();
  payload.append("response", response);
  payload.append("user_id", user_id);
  payload.append("project", project);

  // Make a request to your Google Apps Script URL
  try {
    const googleResponse = await fetch(googleAppsScriptUrl, {
      method: "POST",
      body: payload,
    });

    // Check if the request was successful
    if (googleResponse.ok) {
      return {
        statusCode: 200,
        body: "Success!",
      };
    } else {
      return {
        statusCode: 500,
        body: "Error: Failed to send data to Google Sheets",
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
