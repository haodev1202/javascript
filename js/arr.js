/*
    Array methods:
        forEach(): Sử dụng để duyêt qua từng phần tử của mảng
        every(): Kiểm tra tất cả phần tử trong mảng phải thoả mãn một điều kiện gì đó
        some(): Kiểm tra chỉ cần một phần tử đúng trong mảng thoả mãn điều kiện thôi
        find(): Tìm kiếm trong arr có thằng nào thoả mãn điều kiện
        filter(): Lọc trong arr có thằng nào thoả mãn điều kiện
        map(): sử dụng khi muốn chỉnh sửa hay thay đổi phần tử của một arr
        reduce(): Khi muốn nhận về một giá trị duy nhất khi đã xử lí và tính toán trên các phần tử arr
*/

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 1,
    },
    {
        id: 2,
        name: "HTML & CSS",
        coin: 2,
    },
    {
        id: 3,
        name: "Ruby",
        coin: 2,
    },
    {
        id: 4,
        name: "PHP",
        coin: 400,
    },
    {
        id: 2,
        name: "ReactJS",
        coin: 2,
    },
];

function courseHandle(course, index, originArr) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
    };
}

function getNameCourse(course, index, originArr) {
    return course.name;
}
var newCourses = courses.map(getNameCourse);

var totalCoin = courses.reduce(
    (previousValue, currentValue, currentIndex, originArr) => {
        return previousValue + currentValue.coin;
    },
    0
);

Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }

    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

Array.prototype.myForEach = function (callback) {
    try {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                callback(this[index], index, this);
            }
        }
    } catch (error) {
        console.error(error);
    }
};

Array.prototype.myFilter = function (callback) {
    var output = [];
    try {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                var result = callback(this[index], index, this);
                if (result) {
                    output.push(this[index]);
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
    return output;
};

Array.prototype.mySome = function (callback) {
    try {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (callback(this[index], index, this)) {
                    return true;
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
    return false;
};

Array.prototype.myEvery = function (callback) {
    try {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (!callback(this[index], index, this)) {
                    return false;
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
    return true;
};

var total = courses.reduce2(function (total, course) {
    return total + course.coin;
}, 0);

console.log(total);

// courses.myForEach(function (course, index) {
//     console.log(course);
// });

var courseNoFree = courses.myEvery(function (course, index) {
    console.log(index);
    return course.coin > 0;
});

console.log(courseNoFree);
