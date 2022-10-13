type TColor = `#${string}`;

export interface ITheme {
    colors: {
        primary: TColor,
        typography: TColor,
        contrast: TColor,
    }
}