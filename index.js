const cr = require('crypto');
const a = require('express')();

a.get('/', (r, s) => {
    s.json({ m: 'endpoint at /e' });
});

a.get('/e', (r, s) => {
    const rN = cr.randomBytes(4).readUInt32BE(0);
    s.json({ en: rN });
});

const p = process.env.PORT || 3000;
a.listen(p, () => {
    console.log(`Running on ${p}`);
});