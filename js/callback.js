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
//ok

// ok ok ok OK
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

// PlaceOrder : Đặt hàng
// orderDetails : Đặt hàng chi tiết
function placeOrder(orderDetails , callback) {
    console.log(`Placing order: ${orderDetails}`);

    setTimeout(() => {
        console.log('Order placed successfully.');
        callback();
    }, 2000);
}

function processPayment(callback) {
    console.log('Processing payment .....');
    setTimeout(() => {
        console.log("Payment processed successfully.");
        callback();
    }, 3000);
}

function confirmOrder() {
    console.log("Order cofirm. Thank you for your purchase!");
}

placeOrder("order for a laptop" , function() {
    processPayment(function() {
        confirmOrder();
    });
})