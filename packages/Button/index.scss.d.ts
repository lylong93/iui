declare namespace IndexScssNamespace {
  export interface IIndexScss {
    "index__font-one___3rbvj": string;
    "index__font-tow___PTwu5": string;
    index__mymove___3tDme: string;
    index__time___vfDMY: string;
    "index__wrapper-one___Zr7oP": string;
    "index__wrapper-tow___vqFeY": string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
