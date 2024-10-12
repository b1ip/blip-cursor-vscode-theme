# Blip Cursor VSCode Theme

Blip is a custom Visual Studio Code theme based on the GitHub Dark Default theme, with personalized color modifications to enhance your coding experience.

## Direct Installation through VS Code Extensions

For an even simpler installation process, you can install the Blip Cursor VSCode Theme directly from the VS Code Marketplace:

1. Open Visual Studio Code or Cursor.
2. Go to the Extensions view by clicking on the square icon in the left sidebar or pressing `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).
3. In the search bar, type **"Blip Cursor VSCode Theme"**.
4. Look for the theme in the search results and click on the "Install" button.
5. Once installed, go to `File` > `Preferences` > `Color Theme` (or `Code` > `Preferences` > `Color Theme` on macOS) and select "Blip Cursor VSCode Theme" from the list.

This method allows you to easily install and update the theme directly through the VS Code interface without needing to download any files manually.


## Quick Installation

If you prefer to install the theme directly without cloning the repository, follow these steps:

1. **Download the Theme**:
   - Go to the [Releases](https://github.com/b1ip/blip-cursor-vscode-theme/tree/v0.0.1/releases/) page of this repository.
   - Download the `blip-cursor-vscode-theme-0.0.1.vsix` file from the latest release.

2. **Install the Theme**:
   - Open a terminal or command prompt.
   - Navigate to the directory where you downloaded the `.vsix` file.
   - Run the following command to install the theme:
     ```
     code --install-extension blip-cursor-vscode-theme-0.0.1.vsix
     ```
   - If you're using Cursor, replace `code` with `cursor`. For example:
     ```
     cursor --install-extension blip-cursor-vscode-theme-0.0.1.vsix
     ```

> **Note**: If the `cursor` command is not available, you can use this workaround:
> 1. Install the theme using VSCode:
>    ```
>    code --install-extension blip-cursor-vscode-theme-0.0.1.vsix
>    ```
> 2. Open Cursor and use the "VS Code Import" feature to load all extensions, including the newly installed Blip Cursor Theme.
>
> This method ensures you can use the theme in Cursor even if direct installation via the `cursor` command is not possible.


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
