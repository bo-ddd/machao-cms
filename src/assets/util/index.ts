export const parseAsssetFile = function (path: string): string {
    return new URL(`../../assets/imges/${path}`, import.meta.url).href
}

export default function () {
    return { parseAsssetFile };
}