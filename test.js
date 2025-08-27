async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // Chờ 1 giây

  console.log(result); // "done!"
}
f();
