exports.checkPostData = (req, res, next) => {
    const data = req.body;
    const {name, age, stillEmployee} = data;

    // İsim kontrolü
    if(!name) {
        res.status(400).send("Lütfen bir isim giriniz!");
        return;
    } else {
        if (!(typeof name === "string")){
            res.status(400).send("Lütfen geçerli bir isim giriniz!");
            return;
        } 
    }

    // Yaş kontrolü
    if(!age) {
        res.status(400).send("Lütfen bir yaş giriniz!");
        return;
    } else {
        if (!(typeof age === "number")){
            res.status(400).send("Lütfen geçerli bir yaş giriniz!");
            return;
        } 
    }

    // Hala çalışan mı kontrolü

    if(!stillEmployee) {
        res.status(400).send("Lütfen çalışanın hala çalışıp çalışmadığını belirtiniz!");
        return;
    } else {
        if (!(typeof stillEmployee === "boolean")){
            res.status(400).send("Lütfen çalışanın hala çalışıp çalışmadığını istenilen formatta belirtiniz!");
            return;
        } 
    }

    next();
}

