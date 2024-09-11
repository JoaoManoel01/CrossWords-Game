export function load({params}) {
    const fase = Number(params.fase ?? 1) ;
    return {
        fase
    };
}