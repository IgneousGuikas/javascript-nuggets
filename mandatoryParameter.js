function mandatory() {
    throw new Error("Missing parameter");
}

function func1(param) {
    console.log(param);
}

func1("hi");
func1();

function func2(param = mandatory()) {
    console.log(param);
}

try {
    func2("hi");
    func2();
} catch(error) {
    console.log(error);
}