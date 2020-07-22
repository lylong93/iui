declare namespace StyleScssNamespace {
  export interface IStyleScss {
    style__s___1G_Fj: string;
    style__w___1DqJ7: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
