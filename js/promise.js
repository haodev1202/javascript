var promise = new Promise(
    // executor
    function (resolve, reject) {
        // logic
        // thành công: resolve()
        // thất bại: reject()

        // resolve([
        //     {
        //         id: 1,
        //         name: "Javascript",
        //     },
        // ]);
        reject("error");
    }
);

promise
    .then(function (response) {
        // Khi mà trong executor thằng resolve() được gọi thì callback của then được gọi
        // console.log(response);
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve([1, 2, 3]);
            }, 3000);
        });
    })
    .then(function (data) {
        // tham số data ở đây sẽ là kết quả của return của then trên
        // trường hợp return về 1 promise thì nó phải chờ promise thực thi xong thì nó mới lọt vào
        console.log(data);
    })
    .catch(function (error) {
        // Khi mà trong executor thằng reject() được gọi thì callback của catch được gọi
        console.log(error);
    })
    .finally(function () {
        // Khi mà 1 trong 2 thằng resolve và reject được gọi thì callback của finally đều được gọi
        console.log("Done");
    });

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000);
    })
    .then(() => {
        console.log(2);
        return sleep(1000);
    })
    .then(() => {
        console.log(3);
        // return sleep(1000);
    });

var promiseResolve = Promise.resolve("success");

promiseResolve
    .then((response) => {
        console.log(response);
        return Promise.reject("error");
    })
    .catch(function (error) {
        console.log(error);
    });

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([1]);
    }, 2000);
});

var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([2, 3]);
    }, 5000);
});

Promise.all([promise1, promise2])
    .then(function ([result1, result2]) {
        console.log(result1.concat(result2));
    })
    .catch(function (error) {
        console.log(error);
    });
