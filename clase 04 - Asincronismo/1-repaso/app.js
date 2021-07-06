const regExpEmail = /[a-z0-9\.\-_]+@[a-z]+\.[a-z]{2,4}/gi;
const textoOriginal = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of juan.lopez@hotmail.com Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at carlos897@outlook.com College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum anna-perez@yahoo.com.ar from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, LULI_MARINA@GMAIL.com in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

// String.match(RegExp);
const emails = textoOriginal.match(regExpEmail);

console.log(emails);

// RegExp.test(String)
regExpEmail.test("pepe"); // false
regExpEmail.test("lucas@hotmail.com.ar"); // true
