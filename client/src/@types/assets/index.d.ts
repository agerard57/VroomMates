declare module "*.svg" {
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.json" {
  const content: string;
  export default content;
}

declare module "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions" {
  const content: any;
  export default content;
}
