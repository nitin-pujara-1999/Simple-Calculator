let result = document.getElementById("result");

function display(num) {
    if (result.value.charAt(result.value.length - 1) == "+" && num == "+") {
    }
    else if (result.value.charAt(result.value.length - 1) == "-" && num == "-") {
    }
    else if (result.value.charAt(result.value.length - 1) == "*" && num == "*") {
    }
    else if (result.value.charAt(result.value.length - 1) == "/" && num == "/") {
    }
    else if (result.value.charAt(result.value.length - 1) == "%" && num == "%") {
    }
    else if (result.value.charAt(result.value.length - 1) == "." && num == ".") {
    }
    else if (result.value.charAt(result.value.length - 1) == "+" && (num == "-" || num == "/" || num == "*" || num == "%")) {
        result.value = result.value.substring(0, result.value.length - 1) + num;
    }
    else if (result.value.charAt(result.value.length - 1) == "-" && (num == "+" || num == "/" || num == "*" || num == "%")) {
        result.value = result.value.substring(0, result.value.length - 1) + num;
    }
    else if (result.value.charAt(result.value.length - 1) == "/" && (num == "+" || num == "-" || num == "*" || num == "%")) {
        result.value = result.value.substring(result.value.length - 1) + num;
    }
    else if (result.value.charAt(result.value.length - 1) == "*" && (num == "+" || num == "-" || num == "/" || num == "%")) {
        result.value = result.value.substring(result.value.length - 1) + num;
    }
    else if (result.value.charAt(result.value.length - 1) == "%" && (num == "+" || num == "-" || num == "*" || num == "/")) {
        result.value = result.value.substring(result.value.length - 1) = num;
    }
    else {
        result.value += num;
    }
}

function calculate() {
    if (result) {
        result.value = eval(result.value);
    }
}

function Clear() {
    result.value = "";
}