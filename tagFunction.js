function print(arr, ...args) {
    console.log(arr);
    console.log(args);
}

print(["Olá, sou ", ", tenho ", " anos"], "Rodrigo Gikas", 24);
print`Olá, sou ${"Rodrigo Gikas"}, tenho ${24} anos`;