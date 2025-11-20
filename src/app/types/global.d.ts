declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}


declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    const SVG: React.VFC<React.SVGProps<SVGElement>>;
    export default SVG;
}
