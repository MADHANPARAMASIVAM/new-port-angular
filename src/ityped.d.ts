declare module 'ityped' {
    export function init(element: HTMLElement, options: {
      strings: string[];
      loop?: boolean;
      typeSpeed?: number;
      backSpeed?: number;
      showCursor?: boolean;
    }): void;
  }
  