const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  // Get the query parameters from the URL
  const { response, user_id, project } = event.queryStringParameters;

  // Ensure that all required parameters are present
  if (!response || !user_id || !project) {
    return {
      statusCode: 400,
      body: "Error: Missing required query parameters",
    };
  }

  // Define your Google Apps Script URL (replace with your actual URL)
  const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbwkHwTXsd8SWGhPU8LEgFTVsgt7_J1lwd6nSYDXNoI2t9_F_BQuNtHQupKSTV59TqwY/exec";

  // Create the payload to send to Google Apps Script
  const payload = new URLSearchParams();
  payload.append("response", response);
  payload.append("user_id", user_id);
  payload.append("project", project);

  try {
    // Make a request to your Google Apps Script URL
    const googleResponse = await fetch(googleAppsScriptUrl, {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Ensure the correct content type
      },
    });

    // Log the response from Google Apps Script for debugging
    const responseText = await googleResponse.text();
    console.log("Google Apps Script Response: ", responseText);

    // Check if the request was successful
    if (googleResponse.ok) {
      return {
        statusCode: 200,
        body: "Success!",
      };
    } else {
      return {
        statusCode: 500,
        body: `Error: Failed to send data to Google Sheets. Response: ${responseText}`,
      };
    }
  } catch (error) {
    // Catch any errors and return a response
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
