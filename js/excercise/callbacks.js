//callbacks |

function hello () {
    console.log("hello world");
}

function goodbye() {
    console.log("Goodbye wolrd");
}

function print(callback) {
    callback();
}

print(hello);
print(goodbye);