let lib;
console.log(lib);

(async () => {
    lib = import("./dynamicImportLib.js");
    console.log(lib);
    lib = await import("./dynamicImportLib.js");
    console.log(lib);
    lib = await (await import("./dynamicImportLib.js")).default;
    console.log(lib);
})();