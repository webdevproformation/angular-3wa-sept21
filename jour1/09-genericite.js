// interface et le typage permettent de garantir que les variables utilisées 
// correspondent parfaitement aux besoins de votre script
function concatener(obj1, obj2) {
    return [obj1, obj2];
}
var result = concatener({ id: 1, nom: "alain" }, { id: 2, nom: "Charles" });
console.log(result);
// tsc 09-genericite.ts && node 09-genericite.js
