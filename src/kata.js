module.exports = function add(str){
    const separater = ','
    if(str.indexOf('-') !== -1){
        throw 'negatives not allowed ' + str.match(/\-\d+/g).join(', ')
    }
    let newStr = str.replace(/\D+/g,',')
   return newStr.split(separater).map(n=>+n).reduce((prev, curr) => {
       if(curr>1000) return prev;
        return prev + curr
    }, 0)
}