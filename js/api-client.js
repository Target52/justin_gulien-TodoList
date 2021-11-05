const apiURL = "http://localhost:3000/";

const getTasks = async () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(apiURL, requestOptions);
        res = await result.json();
        return res;
    } catch (error) {
        log(error);
    }
}

const getTask = async (idTask) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(apiURL + idTask, requestOptions);
        res = await result.json();
        return res;
    } catch (error) {
        log(error);
    }
}

const putTask = async (idTask, input) => {
    const raw = JSON.stringify(input);
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: raw
    };
    try {
        const result = await fetch(apiURL + idTask, requestOptions);
        res = await result.json();
        return res;
    } catch (error) {
        log(error);
    }
}

const postTask = async (input) => {
    const raw = JSON.stringify(input);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: raw
    };
    try {
        result = await fetch(apiURL, requestOptions);
        res = result.json();
    } catch (error) {
        log(error);
    }
}

const deleteTask = async (input) => {
    var requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    try {
        const result = await fetch(apiURL + input, requestOptions);
    } catch (error) {
        log(error);
    }
}