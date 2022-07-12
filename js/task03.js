const userStr = (promptText) => {
  let userPromptText = promptText;
  let reversedStr = '';

  for (let i = userPromptText.length - 1; i >= 0; i--) {
    reversedStr += userPromptText[i];
  };

  return reversedStr;
};

console.log(userStr(prompt('Введите ваш текст: ', 'какой-то рандомный текст')));