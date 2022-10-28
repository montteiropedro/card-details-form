export function message(input, typeError) {
  const message = {
    text: {
      "card-name": {
        valueMissing: "Name can't be blank.",
        patternMismatch: "Letters and spaces only.",
        typeMismatch: "Letters and spaces only."
      },
    },
    tel: {
      "card-number": {
        valueMissing: "Card number can't be blank.",
        patternMismatch: "Numbers with 3 to 4 characters only.",
        typeMismatch: "Please, numbers only."
      },
      "exp-date__month": {
        valueMissing: "Can't be blank.",
        patternMismatch: "Moth must be between 01 - 12.",
        typeMismatch: "Please, numbers only."
      },
      "exp-date__year": {
        valueMissing: "Can't be blank.",
        patternMismatch: "Year must have 2 characters.",
        typeMismatch: "Please, numbers only."
      },
      "card-cvc": {
        valueMissing: "CVC can't be blank.",
        patternMismatch: "Must have 3 to 4 numbers.",
        typeMismatch: "Please, numbers only."
      }
    }
  }

  return message[input.type][input.id][typeError];
}
