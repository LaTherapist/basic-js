module.exports = function createDreamTeam( members ) {
    if( !members || !Array.isArray(members)) return false;
    
    let strings = members.filter( elem => typeof elem === 'string');
    
    return strings.map( member => member.trim().slice(0,1).toUpperCase()).sort().join('');
};
