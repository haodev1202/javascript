var listCourses = document.querySelector("#list-courses");
var create = document.querySelector("#create");
var courseAPI = "http://localhost:3000/courses";

async function start() {
    renderCourses(await getCourses());
    create.addEventListener("click", handleCreate);
}

start();

async function getCourses() {
    try {
        var response = await fetch(courseAPI);
        var courses = await response.json();
        return courses;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function clearForm(name, description) {
    name.value = "";
    description.value = "";
}

function renderCourses(courses) {
    var html = courses
        .map((course) => {
            return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="deleteCourse('${course.id}')">Delete</button>
            </li>
        `;
        })
        .join("");

    listCourses.innerHTML = html;
}

async function createCourse(course) {
    try {
        var response = await fetch(courseAPI, {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
    }
}

async function handleCreate() {
    try {
        var name = document.querySelector('input[name="name"]');
        var description = document.querySelector('input[name="description"]');
        var formData = {
            name: name.value,
            description: description.value,
        };
        await createCourse(formData);
        renderCourses(await getCourses());
        clearForm(name, description);
    } catch (error) {
        console.error(error);
    }
}

async function deleteCourse(courseId) {
    try {
        await fetch(`${courseAPI}/${courseId}`, {
            method: "DELETE",
        });
        renderCourses(await getCourses());
    } catch (error) {
        console.error(error);
        console.log(3);
    }
}
