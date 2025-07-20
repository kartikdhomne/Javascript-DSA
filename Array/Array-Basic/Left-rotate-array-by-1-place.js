//Left rotate array by one place

const arrNew = [1, 2, 3, 4, 5, 6];

const LeftRotate = (arrNew) => {
  if (arrNew.length === 0) return arrNew;
  let temp = arrNew[0];
  for (let i = 0; i < arrNew.length - 1; i++) {
    arrNew[i] = arrNew[i + 1];
  }
  arrNew[arrNew.length - 1] = temp;
  return arrNew;
};

console.log(LeftRotate(arrNew));
