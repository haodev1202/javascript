// callback là một function được thực thi sau khi function khác được thực thi xong
// bất khì function nào được truyền dưới dạng tham số và được gọi sau đó
// Cả 2 điều trên được gọi là callback

// Lý do phải sử dụng callback
// Trong js thay vì chờ đợi phải hồi , js vẫn sẽ thực thi các lệnh tiếp theo ,
//đồng thời chờ đợi phản hồi từ các sự việc khác
// example
function first() {
    console.log(1);
}

function second() {
    console.log(2);
}

first();
second();

// Do vậy để đảm bảo thực hiện đúng thứ tự thì ta cần sử dụng đến khái niệm callback
// Nó sẽ đảm bảo code sẽ không hoạt động trước khi code khác hoàn thành việc thực thi
function doHomeWork(subject, callback) {
    console.log(`Start my ${subject} homework.`);
    callback(() => {
        console.log(1);
    });
}

function alertFinished(done) {
    setTimeout(() => {
        console.log("Finished my homework");
        done();
    }, 5000);
}

doHomeWork("math", alertFinished);
