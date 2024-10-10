const chroma = require("chroma-js");
const { getColors } = require("./colors");

function getTheme({ theme, name }) {
  const colors = getColors(theme);

  return {
    name: name,
    colors: {
      "editor.background": "#212121",
      "editor.foreground": "#e1e1e2",
      "sideBar.background": "#1e1e1e",
      "sideBar.foreground": "#c9c9ca",
      "activityBar.background": "#2f2f2f",
      "activityBar.foreground": "#e1e1e2",
      "activityBar.inactiveForeground": "#7d7d80",
      "statusBar.background": "#1E1E1E",
      "statusBar.foreground": "#e1e1e2",
      "statusBar.noFolderBackground": "#252525",
      "statusBar.noFolderForeground": "#e1e1e2",
      "statusBar.border": "#2A2A2A",
      "tab.activeBackground": "#212121",
      "tab.inactiveBackground": "#1e1e1e",
      "tab.activeForeground": "#e1e1e2",
      "tab.inactiveForeground": "#7d7d80",
      "terminal.background": "#1C1C1C",
      "terminal.foreground": "#c9c9ca",
      "terminalCursor.background": "#a6a6a6",
      "terminalCursor.foreground": "#e1e1e2",
      "titleBar.activeBackground": "#2A2A2A",
      "titleBar.activeForeground": "#c9c9ca",
      "titleBar.inactiveBackground": "#1E1E1E",
      "titleBar.inactiveForeground": "#7d7d80",
      "panel.background": "#1e1e1e",
      "panel.foreground": "#c9c9ca",
      "panel.border": "#282828",
      "editorGroupHeader.tabsBackground": "#1e1e1e",
      "editorGroupHeader.tabsBorder": "#282828",
      "editorGroup.border": "#282828",
      "tab.border": "#282828",
      "tab.activeBorder": "#2f2f2f",
      "tab.unfocusedActiveBorderTop": "#2f2f2f",
      "tab.activeBorderTop": "#e1e1e2",
      "focusBorder": "#282828",
      "button.background": "#2f2f2f",
      "dropdown.background": "#1e1e1e",
      "input.background": "#212121",
      "input.foreground": "#e1e1e2",
      "scrollbar.shadow": "#212121",
      "scrollbarSlider.background": "#2f2f2f",
      "scrollbarSlider.hoverBackground": "#3f3f3f",
      "scrollbarSlider.activeBackground": "#4f4f4f",
      "activityBarBadge.background": "#383838",
      "activityBarBadge.foreground": "#e1e1e2",
      "badge.background": "#383838",
      "badge.foreground": "#e1e1e2",
      "tab.hoverBackground": "#2A2A2A",
      "tab.unfocusedHoverBackground": "#292929",
      "statusBarItem.hoverBackground": "#2A2A2A",
      "sideBarSectionHeader.background": "#2A2A2A",
      "sideBarSectionHeader.foreground": "#e1e1e2",
      "panelTitle.activeBorder": "#4f4f4f",
      "breadcrumb.foreground": "#c9c9ca",
      "breadcrumb.focusForeground": "#e1e1e2",
      "breadcrumb.activeSelectionForeground": "#e1e1e2",
      "breadcrumbPicker.background": "#212121",
      "editor.lineHighlightBackground": "#835eec15",
      "editorError.foreground": "#835eec",
      "editorError.border": "#835eec00",
      "list.errorForeground": "#835eec",
      "editor.selectionBackground": "#835eec55",
      "editor.selectionHighlightBackground": "#835eec30",
      "editor.inactiveSelectionBackground": "#835eec30",
      "editor.findMatchHighlightBackground": "#835eec40",
      "editor.findRangeHighlightBackground": "#835eec30",
      "editor.rangeHighlightBackground": "#835eec20",
      "editor.hoverHighlightBackground": "#835eec20",
      "minimap.findMatchHighlight": "#835eec",
      "minimap.selectionHighlight": "#835eec55",
      "editor.findMatchBackground": "#835eec",
      "editor.findMatchBorder": "#835eec00",
      "editorOverviewRuler.findMatchForeground": "#835eec55",
      "editorBracketMatch.background": "#835eec30",
      "editorBracketMatch.border": "#835eec60",
      "list.hoverBackground": "#835eec10",
      "list.activeSelectionBackground": "#835eec30",
      "list.activeSelectionForeground": "#e1e1e2",
      "list.focusOutline": "#835eec",
      "list.inactiveSelectionBackground": "#835eec20",
      "list.dropBackground": "#835eec20",
      "editor.snippetTabstopHighlightBackground": "#835eec20",
      "editor.snippetTabstopHighlightBorder": "#835eec00",
      "editor.snippetFinalTabstopHighlightBackground": "#835eec30",
      "editor.snippetFinalTabstopHighlightBorder": "#835eec00",
      "editorOverviewRuler.errorForeground": "#935eec",
      "minimap.warningHighlight": "#a35eec",
      "minimap.errorHighlight": "#935eec"
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: "#6A9955"
        }
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#61AFEF"
        }
      },
      {
        scope: "variable",
        settings: {
          foreground: "#E06C75"
        }
      },
      // Add more token colors as needed
    ]
  };
}

module.exports = getTheme;