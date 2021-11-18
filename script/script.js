let result = document.getElementById('input-text');

let calculate = (num) => {
  result.value += num;
}

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch(err) {
    alert('Enter the valid result');
  }
}

const Clear = () => {
  result.value = '';
}