declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    error: string;
    errorText: string;
    icon: string;
    input: string;
    withIcon: string;
    wrapper: string;
    wrapperInput: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
