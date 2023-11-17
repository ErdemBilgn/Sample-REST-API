exports.checkHeaders = (req, res, next) => {

    // Token kontrolü
    if(!req.headers.token) {
        return res.status(401).send("Lütfen bir token gönderiniz!");
    } 
    const token = req.headers.token;
    if(!(token.length === 12)) return res.status(401).send("Lütfen geçerli bir token gönderiniz!");


    // Email Kontrolü
    if(!req.headers.email) {
        return res.status(400).send("Lütfen bir email giriniz!");
    }
    const email = req.headers.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email) === false) return res.status(401).send("Lütfen geçerli bir email giriniz!");

    next();
}