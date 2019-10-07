var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function linearSearch(arr, elToFind) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elToFind) {
            return i;
        }
    } return null;
}

linearSearch(rainbow, "green"); 
linearSearch(rainbow, "white");