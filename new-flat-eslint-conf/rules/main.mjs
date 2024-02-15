await promise;
await Promise.all([promise1, promise2]);


const object = { ...(foo || {}) };

const object1 = { ...(foo ?? {}) };   