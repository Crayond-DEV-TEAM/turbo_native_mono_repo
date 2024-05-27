#!/bin/bash

# Check if APP_NAME, DISPLAY_NAME, and JSON_FILE_PATH arguments are provided
if [ $# -ne 3 ]; then
  echo "Usage: $0 APP_NAME DISPLAY_NAME JSON_FILE_PATH"
  exit 1
fi

# Get the dynamic values from command-line arguments
APP_NAME="$1"
DISPLAY_NAME="$2"
JSON_FILE_PATH="$3"

# Create the JSON content
JSON_CONTENT="{
  \"name\": \"$APP_NAME\",
  \"displayName\": \"$DISPLAY_NAME\"
}"

# Write the JSON content to the specified file path
echo "$JSON_CONTENT" > "$JSON_FILE_PATH"

# Display a message
echo "JSON file '$JSON_FILE_PATH' created with the following content:"
cat "$JSON_FILE_PATH"
