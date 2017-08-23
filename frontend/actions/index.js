function handleAdd(tag, answer) {
    return {
        type: 'NEW_ENTRY',
        tag,
        answer
    };
}


export {handleAdd};
