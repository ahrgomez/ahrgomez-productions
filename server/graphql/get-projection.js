module.exports(function getProjection (fieldASTs) {
    return fieldASTs.selectionSet.selections.reduce(function(projections, selection) {
        projections[selection.name.value] = 1;
        return projections;
    }, {});
});