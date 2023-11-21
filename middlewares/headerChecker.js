exports.checkHeaders = (req, res, next) => {

    // Token kontrolü
    if(!req.headers.token) {
        return res.status(401).send("Please send a token!");
    } 
    const token = req.headers.token;
    if(!(token.length === 12)) return res.status(401).send("Please send a valid token!");


    // Email Kontrolü
    if(!req.headers.email) {
        return res.status(400).send("Please send an email!");
    }
    const email = req.headers.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email) === false) return res.status(401).send("Please send a valid email!");

    next();
}