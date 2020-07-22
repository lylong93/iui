declare namespace StyleScssNamespace {
  export interface IStyleScss {
    style__Aside___1Hd9M: string;
    style__Footer___1RXnX: string;
    style__Header___2HV4y: string;
    style__Layout___JF7yc: string;
    style__Main___3cB4O: string;
    style__container___yEgYD: string;
    style__d___38Mm2: string;
    style__qpp___2aCsc: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
