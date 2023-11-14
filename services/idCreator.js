exports.generateUniqueId = () => {
    const timestamp = new Date().getTime();
    const random = Math.random().toString(36).substring(2,9);
    const uniqueId = parseInt(timestamp + random);
    return uniqueId;
}