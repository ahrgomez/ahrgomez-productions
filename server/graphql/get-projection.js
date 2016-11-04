export default function getProjection(context, asts = context.fieldASTs) {
    //for recursion...Fragments doesn't have many sets...
    if (!Array.isArray(asts)) asts = [asts]

    //get all selectionSets
    var selections = asts.reduce((selections, source) => {
        selections.push(...source.selectionSet.selections);
        return selections;
    }, []);

    //return fields
    return selections.reduce((list, ast) => {
        switch (ast.kind) {
            case 'Field' :
                list[ast.name.value] = 1
                return list;
            case 'InlineFragment':
                return {
                    ...list,
                    ...getProjection(context, ast)
                };
            case 'FragmentSpread':
                return {
                    ...list,
                    ...getProjection(context, context.fragments[ast.name.value])
                };
            default:
                throw new Error('Unsuported query selection')
        }
    }, {})
}