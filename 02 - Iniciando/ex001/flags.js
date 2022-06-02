module.exports = function getFlags(flag) {
    let index = process.argv.indexOf(flag);

    // Se a flag existe no array ela não será -1
    return index != -1 ? process.argv[index + 1] : "[ERRO! Flag não encontrada]";
};
