export function sumFn(n: number) {
    console.log(n)
    return (a: number) => sumFn(a + n)
}