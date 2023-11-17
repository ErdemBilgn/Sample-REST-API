exports.generateUniqueId = () => {
    const timestamp = Date.now().toString().substring(8,12);
    const random = Math.random().toString().substring(2,10);
    const uniqueId = parseInt(timestamp + random);
    return uniqueId;
}