exports.checkPostData = (req, res, next) => {
    const data = req.body;
    const {name, age, stillEmployee} = data;

    // İsim kontrolü
    if(!name) {
        res.status(400).send("Please send a name!");
        return;
    } else {
        if (!(typeof name === "string")){
            res.status(400).send("Please send a valid name!");
            return;
        } 
    }

    // Yaş kontrolü
    if(!age) {
        res.status(400).send("Please send an age!");
        return;
    } else {
        if (!(typeof age === "number")){
            res.status(400).send("Please send a valid age!");
            return;
        } 
    }

    // Hala çalışan mı kontrolü

    if(stillEmployee == undefined) {
        res.status(400).send("Please send a stillEmployee!");
        return;
    } else {
        if (!(typeof stillEmployee === "boolean")){
            res.status(400).send("Please send a valid stillEmployee!");
            return;
        } 
    }

    next();
}

