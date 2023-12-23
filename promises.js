function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Operation completed!');
    }, 1000);
  });
}

async function performAsyncOperation() {
  try {
    let result = await asyncOperation();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

performAsyncOperation();
