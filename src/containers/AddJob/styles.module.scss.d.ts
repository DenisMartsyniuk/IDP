declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    header: string;
    icon: string;
    title: string;
    wrapper: string;
    wrapperButton: string;
    wrapperContent: string;
    wrapperField: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
