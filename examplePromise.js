var users = [
    {
        id: 1,
        name: "Tran Hao",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Phuong Tu",
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh son chua ra video :(",
    },
    {
        id: 2,
        user_id: 2,
        content: "Vua ra xong em oi!",
    },
    {
        id: 3,
        user_id: 1,
        content: "Cam on anh ^^",
    },
];

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });
        console.log(userIds);
        return getUsersByIds(userIds).then(function (users) {
            return {
                users: users,
                comments: comments,
            };
        });
    })
    .then(function (data) {
        var commentBlock = document.querySelector("#comment-block");

        var html = "";
        data.comments.forEach((comment) => {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });

            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html;
    });
