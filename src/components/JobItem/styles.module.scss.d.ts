declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    actual: string;
    checkbox: string;
    company: string;
    description: string;
    title: string;
    wrapper: string;
    wrapperTitle: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
