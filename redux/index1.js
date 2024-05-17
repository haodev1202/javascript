import { createStore } from 'https://cdn.skypack.dev/redux';

const $ = document.querySelector.bind(document);


const initState = 0;

function reducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store);

function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}

const deposit = $('#deposit');
const withdraw = $('#withdraw');

deposit.onclick = (e) => {
    store.dispatch(actionDeposit(10));
}

withdraw.onclick = (e) => {
    store.dispatch(actionWithdraw(10));
}

store.subscribe(() => {
    render();
})

function render() {
    const output = $('#output');
    output.innerText = store.getState();
}

render();