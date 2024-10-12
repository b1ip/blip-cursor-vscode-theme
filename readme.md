# Blip Cursor VSCode Theme

Blip is a custom Visual Studio Code theme based on the GitHub Dark Default theme, with personalized color modifications to enhance your coding experience.

## Quick Installation

If you prefer to install the theme directly without cloning the repository, follow these steps:

1. **Download the Theme**:
   - Go to the [Releases](https://github.com/your-username/blip-cursor-vscode-theme/releases) page of this repository.
   - Download the `blip-cursor-vscode-theme-0.0.1.vsix` file from the latest release.

2. **Install the Theme**:
   - Open a terminal or command prompt.
   - Navigate to the directory where you downloaded the `.vsix` file.
   - Run the following command to install the theme:
     ```
     code --install-extension blip-cursor-vscode-theme-0.0.1.vsix
     ```
   - If you're using Cursor, replace `code` with the appropriate command for Cursor.

3. **Apply the Theme**:
   - Restart VSCode/Cursor if it's already running.
   - Go to `File` > `Preferences` > `Color Theme` and select **Blip Cursor Theme**.

This method allows you to quickly install and use the Blip Cursor Theme without setting up a development environment.


## Features

- **Customized Editor Colors**: Tailored background and foreground colors for a comfortable coding environment.
- **Enhanced Diff Editor Highlights**: Improved visibility for inserted and removed text.
- **Customized Terminal Colors**: Consistent and visually appealing terminal interface.
- **Consistent UI Elements**: Harmonized colors across sidebars, activity bars, status bars, and more.

## Dev Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/blip-cursor-vscode-theme-0.0.1.git
   ```

2. Open the folder in VSCode:
   ```shell
   code blip-cursor-vscode-theme-0.0.1
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Open in VSCode**:
   - Launch VSCode/Cursor and open the cloned directory.
   - Press `F5` to open a new Extension Development Host with the Blip theme.

- Go to `File` > `Preferences` > `Color Theme` and select **Blip Cursor Theme**.

6. **Apply Theme Settings**:
   
   To ensure the cursor diff colors are handled by the theme, enable the minimap, set consistent font weights in the terminal, and configure the activity bar orientation, add the following settings to your `settings.json`:
   
   ```json
   "cursor.cmdk.useThemedDiffBackground": true,
   "editor.minimap.enabled": true,
   "terminal.integrated.fontWeight": "normal",
   "terminal.integrated.fontWeightBold": "normal",
   "workbench.activityBar.orientation": "vertical"
   ```
   
   **Note on Activity Bar Orientation:**
   The `"workbench.activityBar.orientation": "vertical"` setting is crucial for Cursor setup. It changes the activity bar orientation to vertical, eliminating the annoying horizontal activity bar and providing a more streamlined interface.

   **Steps to Add These Settings:**

   - Press `Ctrl + ,` (or `Cmd + ,` on macOS) to open **Settings**.
   - Click on the `{}` icon in the top right corner to open the `settings.json` file directly.
   - Add the above lines within the JSON object. For example:

     ```json
     {
       // ... existing settings ...
       "terminal.integrated.scrollback": 1000000,
       // ... other settings ...
     }
     ```

   **Note on Large Scrollback Value:**
   The `"terminal.integrated.scrollback": 1000000` setting significantly increases the number of lines the terminal can remember. This is particularly useful for:
   - Reviewing long-running processes or extensive debug output
   - Searching through historical command outputs without losing information
   - Reducing the need to constantly clear the terminal or open new instances

   While this large value enhances usability, be aware that it may consume more memory. Adjust the value based on your system's capabilities and personal preferences.

## Publishing Your Theme

To publish your theme to the VSCode Marketplace:

1. **Install `vsce`**:
   ```bash
   npm install -g vsce
   ```

2. **Package Your Extension**:
   ```bash
   vsce package
   ```

3. **Publish**:
   ```bash
   vsce publish
   ```
   *Ensure you have an account and have set up `vsce` with your publisher credentials.*

For more detailed instructions, refer to the [VSCode Extension Guidelines](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/b1ip/blip-cursor-vscode-theme/blob/main/LICENSE) file for details.
