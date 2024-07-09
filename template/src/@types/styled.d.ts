import {
  Interpolation,
  Styles,
  CSSProp,
} from 'styled-components/native/dist/types';

declare module 'styled-components/native' {
  /* eslint-disable no-unused-vars */
  type ColorsNames =
    | 'rose'
    | 'pink'
    | 'fuchsia'
    | 'purple'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'sky'
    | 'cyan'
    | 'teal'
    | 'emerald'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'red'
    | 'warmGray'
    | 'trueGray'
    | 'gray'
    | 'coolGray'
    | 'blueGray';

  type ColorsVariations =
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;

  type MainColors = {
    black: string;
    white: string;
  };

  type Colors = MainColors &
    Record<
      ColorsNames,
      {
        [K in ColorsVariations]: string;
      }
    >;

  interface DefaultTheme {
    colors: Colors;
  }
}

declare module 'styled-components/native' {
  function css<Props>(
    styles: Styles<Props>,
    ...interpolations: Interpolation<Props>[]
  ): Interpolation<CSSProp>[] & string;
}
