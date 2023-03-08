//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------
console.log("");
//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
console.log("ZADANIE 1. a)");
console.log("");
const varBoolean = 2 < 4 ? true : false;
console.log("varBoolean: " + varBoolean + " | typ danych: " + typeof varBoolean);

const varNumber = 2023;
console.log("varNumber: " + varNumber + " | typ danych: " + typeof varNumber);

const varString = "Devstock";
console.log("varString: " + varString + " | typ danych: " + typeof varString);

console.log("");
//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
console.log("ZADANIE 1. b)");
console.log("");
// 2 + "2"
console.log(2 + "2");
console.log(
  'Typ wyniku działania 2 + "2" to string. Wynika to z tego, że dodając number do stringa, number ulega konwersji na string i w tym przypadku przypisuje się jeden string do drugiego'
);
console.log("");
// 2 + 2
console.log(2 + 2);
console.log(
  "Typ wyniku działania 2 + 2 to number. Tutaj po prostu dodawane są do siebie dwa numbery"
);
console.log("");
// 2 * "2"
console.log(2 * "2");
console.log(
  'Typ wyniku działania 2 * "2" to number. Wynika to z tego, że mnożąc stringa przez number, string ulega konwersji na number.'
);
console.log("");
// 2 * 2
console.log(2 * 2);
console.log(
  "Typ wyniku działania 2 * 2 to number. Tutaj po prostu mnożone są przez siebie dwa numbery"
);
console.log("");
// 1 == true
console.log(1 == true);
console.log(
  "Typ wyniku działania 1 == true to boolean. Wynikiem jest true ponieważ w zmiennych typu boolean wartość true odpowiada 1, a wartość false 0"
);
console.log("");
// 0 == false
console.log(0 == false);
console.log(
  "Typ wyniku działania 0 == false to boolean. Wynikiem jest true ponieważ w zmiennych typu boolean wartość true odpowiada 1, a wartość false 0"
);
console.log("");
// 0 == null
console.log(0 == null);
console.log(
  "Typ wyniku działania 0 == null to boolean. Wynikiem jest false ponieważ 0 to nie to samo co null, tak samo jak 0 nie jest większe ani mniejsze od null. Jest natomiast większe lub równe albo mniejsze lub równe od null... Nie wszystko musi być logiczne :D"
);
console.log("");
// null == undefined
console.log(null == undefined);
console.log(
  "Typ wyniku działania 0 == undefined to boolean. Wynikiem jest true ponieważ mimo, że są różnymi typami to obie zwracają nic"
);
console.log("");

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log(
  "Pojedynczy = jest to operator przypisania wartości do zmiennej. Podwójny == sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ. Potrójny === sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie biorąc pod uwagę ich typ"
);
console.log("");

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log("ZADANIE 1. c)");
console.log("");
console.log(
  "Typy proste służą do zapisywania prostych danych, natomiast typy referencyjne do zapisywania złożonych obiektów. Przykłady typów prostych: string, number, boolean. Typy referencyjne: obiekt, tablica, funkcja"
);
console.log("");

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
console.log("ZADANIE 1. d)");
console.log("");

// let val = 0 (przekonwertuj na typ Boolean)
let val = 0;
val = val < 5;
console.log("val = " + val + " | typ val: " + typeof val);
console.log("");
// let num = "2137" (przekonwertuj na typ Number)
let num = "2137";
num = Number("2137");
console.log("num = " + num + " | typ num: " + typeof num);
console.log("");
// let str = 007 (przekonwertuj na String)
let str = 007;
str = str.toString().padStart(3, "0");
console.log("str = " + str + " | typ str: " + typeof str);
console.log("");
// let und = undefined (przekonwertuj na Boolean)
let und = undefined;
und = null == undefined;
console.log("und = " + und + " | typ und: " + typeof und);
console.log("");

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
console.log("ZADANIE 1. e)");
// console.log("");
const array = new Array();
array.push(val, num, str);
console.log(array);
console.log("");

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
console.log("ZADANIE 1. f)");
// console.log("");
const object = new Object();
object.age = 38;
object.name = "Maciej";
object.city = "Poznań";
console.log(object);
console.log("");

//g)* opisz krótko czym dokładnie jest typ NaN
console.log("ZADANIE 1. g)");
console.log(
  "Typ NaN powstaje wówczas, gdy jakaś zmienna miała być użyta jako liczba, ale nie jest liczbą i nie można jej przekonwertować na liczbę. Np. wynik odejmowania (5 - 'two') da nam: " +
    (5 - "two")
);
console.log("");
//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log("ZADANIE 1. h)");
console.log(
  "Symbol to typ danych, który zawsze zawiera unikalną wartość. Nie wiemy ile ona wynosi, wiemy jedynie to, że jest unikalna, niepowtarzalna."
);
console.log("");
console.log("");
//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
console.log("ZADANIE 2. a)");
const sumOfNumbers = (a, b, c) => {
  return a + b + c;
};
console.log(sumOfNumbers(2, 4, 8));
console.log("");

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
console.log("ZADANIE 2. b)");
const triangleArea = (a, h) => {
  return (a * h) / 2;
};
console.log(triangleArea(3, 6));
console.log("");

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
console.log("ZADANIE 2. c)");
const years18 = (age) => {
  return age >= 18
    ? `Od Twojej osiemnastki minęło ${age - 18} lat!`
    : `Jeszcze nie ukończyłeś 18 lat!`;
};
console.log(years18(38));
console.log("");

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
console.log("ZADANIE 2. d)");
const arrayElements = (arr) => {
  return arr.length < 5
    ? `Przekazana tablica ma ${arr.length} elementy, a elementem numer 3 jest ${arr[2]}`
    : `Przekazana tablica ma ${arr.length} elementów, a elementem numer 3 jest ${arr[2]}`;
};
console.log(arrayElements(["jeden", 0, ":)", true]));
console.log("");

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.
console.log("ZADANIE 2. e)");

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};
let testPerson1 = {
  name: "Krystyna",
  surname: "Czubówna",
  age: 67,
  height: 157,
};

const infoPerson = (person) => {
  return person.name[person.name.length - 1] === "a"
    ? `Pani ${person.name} ${person.surname} ma ${person.age} lat oraz ${person.height} cm wzrostu.`
    : `Pan ${person.name} ${person.surname} ma ${person.age} lat oraz ${person.height} cm wzrostu.`;
};
console.log(infoPerson(testPerson));
console.log(infoPerson(testPerson1));
console.log("");

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
console.log("ZADANIE 2. f)");
const agePerson = (person, age) => {
  person.age = age;
};
agePerson(testPerson, 23);
console.log(testPerson);
console.log("");

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
console.log("ZADANIE 2. g)");
const numFizzBuzz = (number) => {
  if (typeof number !== "number") {
    return "W tej funkcji przyjmowany jest tylko typ number";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0 && number % 5 !== 0) {
    return "Fizz";
  } else if (number % 3 !== 0 && number % 5 === 0) {
    return "Buzz";
  } else {
    return "no Fizz & no Buzz :(";
  }
};
console.log(numFizzBuzz(30));
console.log("");

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
console.log("ZADANIE 2. h)");
const evenNumber = (number) => {
  return number % 2 === 0 ? `Liczba ${number} jest parzysta` : `Liczba ${number} jest nieparzysta`;
};
console.log(evenNumber(876));
console.log("");

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
console.log("ZADANIE 2. i)");
const drawNumber = () => {
  return Math.floor(Math.random() * 10);
};
console.log(drawNumber());
console.log("");

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
console.log("ZADANIE 2. j)");
const drawNumberFromRange = (a, b) => {
  return Math.floor(Math.random() * (b - a) + a);
};
console.log(drawNumberFromRange(1, 49));
console.log("");

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.
console.log("ZADANIE 2. k)");
console.log("");
// Funkcja na pole koła o wskazanej długości promienia:
const circleArea = (r) => {
  return `Pole koła o długości promienia r = ${r} cm wynosi ${(Math.PI * r * r).toFixed(2)} cm2`;
};
console.log(circleArea(5.321));
console.log("");

// Funkcja na wyszukanie największej i najmniejszej liczby z tablicy
const minMax = (arr) => {
  if (arr.every((element) => typeof element === "number")) {
    return `Najmniejszą liczbą jest ${Math.min(...arr)}, a największą ${Math.max(...arr)}`;
  } else {
    return "W tej tablicy znajdują się elementy, które nie są liczbami!";
  }
};
console.log(minMax([4, 6, -23, 543, 0, 765]));
console.log("");
//--------------------------
// 3. FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
console.log("ZADANIE 3. a)");

const oneToNine = () => {
  for (i = 1; i <= 9; i++) {
    console.log(i);
  }
};
oneToNine();
console.log("");

//b) napisz pętlę która odliczy od 9 do 1
console.log("ZADANIE 3. b)");

const nineToOne = () => {
  for (i = 9; i >= 1; i--) {
    console.log(i);
  }
};
nineToOne();
console.log("");

//c) napisz pętlę która odliczy od 5 do 15
console.log("ZADANIE 3. c)");

const fiveTo15 = () => {
  for (i = 5; i <= 15; i++) {
    console.log(i);
  }
};
fiveTo15();
console.log("");

//d) napisz pętlę która odliczy od 0 do -10
console.log("ZADANIE 3. d)");

const zeroToMinusTen = () => {
  for (i = 0; i >= -10; i--) {
    console.log(i);
  }
};
zeroToMinusTen();
console.log("");

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
console.log("ZADANIE 3. e)");

const oneTo20 = () => {
  for (i = 1; i <= 20; i += 2) {
    console.log(i);
  }
};
oneTo20();
console.log("");

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log("ZADANIE 3. f)");

const tenToMinusTen = () => {
  for (i = 10; i >= -10; i -= 4) {
    console.log(i);
  }
};
tenToMinusTen();
console.log("");

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log("ZADANIE 3. g)");

const oneTo100 = () => {
  for (i = 1; i <= 100; i *= 2) {
    console.log(i);
  }
};
oneTo100();
console.log("");

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log("ZADANIE 3. h)");

const oneToTenOdd = () => {
  for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
oneToTenOdd();
console.log("");

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log("ZADANIE 3. i)");

const oneToTenOddOrEven = () => {
  for (i = 1; i <= 10; i++) {
    i % 2 === 0
      ? console.log(`Liczba ${i} jest parzysta`)
      : console.log(`Liczba ${i} jest nieparzysta`);
  }
};
oneToTenOddOrEven();
console.log("");

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
console.log("ZADANIE 3. j)");

const oneToNumber = (num) => {
  for (i = 1; i <= num; i++) {
    console.log(i);
  }
};
oneToNumber(16);
console.log("");

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
console.log("ZADANIE 3. k)");

const oneToFiftyByNumber = (num) => {
  for (i = 0; i <= 50; i += num) {
    console.log(i);
  }
};
oneToFiftyByNumber(3);
console.log("");

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
console.log("ZADANIE 3. l)");

const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"];

const hello = (arr) => {
  for (person of arr) {
    console.log(`Witaj ${person}! Dobrze, że jesteś!`);
  }
};

hello(arrNames);
console.log("");

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
console.log("ZADANIE 3. ł)");

const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

const carColor = (arr) => {
  for (car in arr) {
    console.log(`Przed Tobą stoi ${arr[car].color} ${arr[car].brand}.`);
  }
};

carColor(arrObjects);
console.log("");

//m) napisz funkcję która przyjmie tablicę arrNumbers i wyświetli w konsoli tylko parzyste elementy tablicy
console.log("ZADANIE 3. m)");

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayEven = (arr) => {
  for (number of arr) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
};

arrayEven(arrNumbers);
console.log("");

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami
console.log("ZADANIE 3. n)");

const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

const arrOther = [];
const arrNubers = [];
const arrEven = [];

const splitByType = (arr) => {
  for (element of arr) {
    if (typeof element === "number") {
      arrNubers.push(element);
      if (element % 2 === 0) {
        arrEven.push(element);
      }
    } else {
      arrOther.push(element);
    }
  }
  return [arrOther, arrNumbers, arrEven];
};

console.log(splitByType(arrTypes));
console.log("");

//--------------------------
// 4. METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log("ZADANIE 4. a)");

const names = ["Seba", "Kari", "Mati", "Andżi"];

const mapNames = names.map((person) => {
  return `Cześć ${person}! Jak się masz?`;
});

console.log(mapNames);
console.log("");

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log("ZADANIE 4. b)");

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayEvenOnly = array10.filter((number) => number % 2 === 0);
console.log(arrayEvenOnly);
console.log("");

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log("ZADANIE 4. c)");

const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];

const femaleOnly = people.filter((person) => person.gender === "female");

console.log(femaleOnly);
console.log("");

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
console.log("ZADANIE 4. d)");

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

const shoppingList = (list) => {
  const splitList = list.split(" ");
  const splitListLowerCase = splitList.map((elem) => elem.toLowerCase());
  splitListLowerCase.sort();
  return splitListLowerCase;
};

console.log(shoppingList(shopping));
console.log("");

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
console.log("ZADANIE 4. e)");

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// const abcReversed = alphabet.reverse();
// const abcString = abcReversed.reduce((abc, ind) => abc + ind);

const abcString = alphabet.reduce((abc, ind) => abc + ind);
const abcReversed = (abc) => abc.split("").reverse().join("");

console.log(abcReversed(abcString));
console.log("");
