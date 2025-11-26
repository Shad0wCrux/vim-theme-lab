export type HighlightGroup = {
  fg: string;     // foreground color hex
  bg: string;     // background color hex
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

export type ThemeConfig = {
  name: string;
  background: "dark" | "light";
  groups: {
    Normal: HighlightGroup;
    Comment: HighlightGroup;
    String: HighlightGroup;
    Keyword: HighlightGroup;
    Function: HighlightGroup;
    Type: HighlightGroup;
    LineNr: HighlightGroup;
    StatusLine: HighlightGroup;
    StatusLineNC: HighlightGroup;
  };
};

