let myArray = ["apple", "banana", "cherry", "date"];

console.log("Длина массива: ", myArray.length);
alert("Длина массива: " + myArray.length);

let userResponse = confirm("Нажмите OK, чтобы удалить один элемент, или Отмена, чтобы оставить массив неизменным.");

if (userResponse) {
    myArray.pop();
    console.log("Новый массив: ", myArray);
    alert("Один элемент удален. Новая длина: " + myArray.length);
} else {
    console.log("Массив остался неизменным: ", myArray);
    alert("Массив не изменился. Длина: " + myArray.length);
}
