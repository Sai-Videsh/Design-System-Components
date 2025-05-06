
## Step 2: Create the Python script to generate the project (generate_design_system.py)


# !/usr/bin/env python3

import os
import json
import sys

def create_file(file_path, content):
    # Create directory if it doesn't exist
    directory = os.path.dirname(file_path)
    if directory and not os.path.exists(directory):
        os.makedirs(directory)
    
    # Write content to file
    with open(file_path, 'w', encoding='utf-8') as f:
        if isinstance(content, dict):
            json.dump(content, f, indent=2)
        else:
            f.write(content)
    
    print(f"Created: {file_path}")

def main():
    # Check if JSON file exists, if not create it from the content above
    json_file = 'design-system-files.json'
    if not os.path.exists(json_file):
        print(f"JSON file '{json_file}' not found. Creating it...")
        
        # Get the content from the first code block in this script
        with open(__file__, 'r', encoding='utf-8') as f:
            script_content = f.read()
        
        # Find the JSON content between the triple backticks
        import re
        json_match = re.search(r'```json.*?\n(.*?)```', script_content, re.DOTALL)
        if json_match:
            json_content = json_match.group(1)
            with open(json_file, 'w', encoding='utf-8') as f:
                f.write(json_content)
            print(f"Created '{json_file}' from script content.")
        else:
            print("Error: Could not find JSON content in script.")
            return
    
    # Load the JSON file
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {json_file} not found.")
        return
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON in {json_file}.")
        return
    
    # Create files
    for file_info in data.get('files', []):
        path = file_info.get('path')
        content = file_info.get('content')
        
        if not path:
            print("Warning: File entry missing path. Skipping.")
            continue
        
        if content is None:
            print(f"Warning: File {path} missing content. Skipping.")
            continue
        
        create_file(path, content)
    
    print("\nProject generation complete!")
    print("\nNext steps:")
    print("1. Run 'npm install' to install dependencies")
    print("2. Run 'npm run storybook' to start Storybook")
    print("3. Run 'npm start' to start the development server")

if __name__ == "__main__":
    main()