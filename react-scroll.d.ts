declare module 'react-scroll' {
    import * as React from 'react';
  
    interface LinkProps {
      to: string;
      spy?: boolean;
      smooth?: boolean;
      offset?: number;
      duration?: number;
      delay?: number;
      isDynamic?: boolean;
      onSetActive?: (to: string) => void;
      onSetInactive?: (to: string) => void;
      ignoreCancelEvents?: boolean;
      hashSpy?: boolean;
      saveHashHistory?: boolean;
      className?: string;
      activeClass?: string;
      style?: React.CSSProperties;
      activeStyle?: React.CSSProperties;
      containerId?: string;
      onClick?: (event: React.MouseEvent<HTMLElement>) => void;
      children?: React.ReactNode;
    }
  
    export class Link extends React.Component<LinkProps> {}
  
    interface ElementProps {
      name: string;
      id?: string;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export class Element extends React.Component<ElementProps> {}
  
    export function scroller(): {
      scrollTo: (to: string, options?: any) => void;
      scrollMore: (to: string, options?: any) => void;
      handleScroll: (event: Event) => void;
    };
  
    export function animateScroll(): {
      scrollTo: (to: number, options?: any) => void;
      scrollMore: (to: number, options?: any) => void;
      handleScroll: (event: Event) => void;
    };
  
    export function Events(): {
      scrollEvent: {
        register: (eventName: string, callback: (to: string) => void) => void;
        remove: (eventName: string, callback: (to: string) => void) => void;
      };
    };
  }
  