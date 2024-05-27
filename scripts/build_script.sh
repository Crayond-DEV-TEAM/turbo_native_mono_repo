#!/bin/bash

# Use "build_script.sh android" or "build_script.sh ios" to configure respective platforms, or pass in all platforms
for OPTION in "$@"; do
    if [[ "$OPTION" == "android" ]]; then
        configureAndroid=true
    elif [[ "$OPTION" == "ios" ]]; then
        configureIOS=true
    fi
done

# Directory where you have the subfolders
APPS_DIR="./apps"

# Define the replacement value
APP_ID="com.metanaus_pos"
DISPLAY_NAME="Metanaus POS"
APP_NAME="metanaus_pos"
APP_ID_IOS="metanaus_pos.app"

# Loop through each subfolder inside "apps"
for app_subfolder in "$APPS_DIR"/*; do
    if [ -d "$app_subfolder" ]; then
        # Creating app.json inside root folder of app

        app_json_file="$app_subfolder/app.json"
        if [ -d "$app_json_file" ]; then
            # Remove the "android" folder
            echo "Removing $app_json_file"
            rm -rf "$app_json_file"
        fi

        echo "Creating app.json inside $app_subfolder"
        chmod +x scripts/create_app_json.sh
        bash scripts/create_app_json.sh "$APP_NAME" "$DISPLAY_NAME" "$app_subfolder/app.json"
        
        # Generating android folder
        if [[ true == "$configureAndroid" ]]; then
            # Check if the "android" folder exists in the subfolder
            android_folder="$app_subfolder/android"
            if [ -d "$android_folder" ]; then
                # Remove the "android" folder
                echo "Removing $android_folder"
                rm -rf "$android_folder"
            fi

            # Copy the "android_template" folder and rename it to "android"
            android_template_folder="$app_subfolder/android_template"
            if [ -d "$android_template_folder" ]; then
                echo "Copying $android_template_folder to $app_subfolder/android"
                cp -r "$android_template_folder" "$app_subfolder/android"
            fi

            # Use the find command to locate all files inside android folders
            ANDROID_FILES=$(find "$app_subfolder/android" -type f)
            # Loop through the files and replace the placeholders for Android
            echo "Start to change the placeholders in android folders"
            for file in $ANDROID_FILES; do
                if [ -f "$file" ]; then
                    sed -i "s/\$APP_ID/$APP_ID/g" "$file"
                    sed -i "s/\$DISPLAY_NAME/$DISPLAY_NAME/g" "$file"
                    sed -i "s/\$APP_NAME/$APP_NAME/g" "$file"
                fi
            done
        fi

        # Generating iOS folder
        if [[ true == "$configureIOS" ]]; then
            # Check if the "ios" folder exists in the subfolder
            ios_folder="$app_subfolder/ios"
            if [ -d "$ios_folder" ]; then
                # Remove the "ios" folder
                echo "Removing $ios_folder"
                rm -rf "$ios_folder"
            fi

            # Copy the "ios_template" folder and rename it to "ios"
            ios_template_folder="$app_subfolder/ios_template"
            if [ -d "$ios_template_folder" ]; then
                echo "Copying $ios_template_folder to $app_subfolder/ios"
                cp -r "$ios_template_folder" "$app_subfolder/ios"
            fi

            # Use the find command to locate all files inside ios folders
            IOS_FILES=$(find "$app_subfolder/ios" -type f)
            # Loop through the files and replace the placeholders for iOS
            echo "Start to change the placeholders in ios folders"

            for file in $IOS_FILES; do
                if [ -f "$file" ]; then
                    sed -i "s/\$APP_ID/$APP_ID/g" "$file"
                    sed -i "s/\$APP_ID_IOS/$APP_ID_IOS/g" "$file"
                    sed -i "s/\$DISPLAY_NAME/$DISPLAY_NAME/g" "$file"
                    sed -i "s/\$APP_NAME/$APP_NAME/g" "$file"
                fi
            done

        fi
    fi
done

# Use the find command to locate all files inside android and iOS folders separately
# if [[ true == "$configureAndroid" ]]; then
#     ANDROID_FILES=$(find "$APPS_DIR_ANDROID" -type f)
#     echo "Start to change the placeholders in Android folders"
# fi

# if [[ true == "$configureIOS" ]]; then
#     IOS_FILES=$(find "$APPS_DIR_IOS" -type f)  # Corrected path
#     echo "Start to change the placeholders in iOS folders"
# fi

# Loop through the files and replace the placeholders separately for Android and iOS
# if [[ true == "$configureAndroid" ]]; then
#     for file in $ANDROID_FILES; do
#         if [ -f "$file" ]; then
#             sed -i "s/\$APP_ID/$APP_ID/g" "$file"
#             sed -i "s/\$APP_ID_IOS/$APP_ID_IOS/g" "$file"
#             sed -i "s/\$DISPLAY_NAME/$DISPLAY_NAME/g" "$file"
#             sed -i "s/\$APP_NAME/$APP_NAME/g" "$file"
#         fi
#     done
# fi

# if [[ true == "$configureIOS" ]]; then
#     for file in $IOS_FILES; do
#         if [ -f "$file" ]; then
#             sed -i "s/\$APP_ID/$APP_ID/g" "$file"
#             sed -i "s/\$APP_ID_IOS/$APP_ID_IOS/g" "$file"
#             sed -i "s/\$DISPLAY_NAME/$DISPLAY_NAME/g" "$file"
#             sed -i "s/\$APP_NAME/$APP_NAME/g" "$file"
#         fi
#     done
# fi

echo "Completed placeholders changes in apps!!"
