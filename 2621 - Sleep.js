/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise ((resolve,reject) => {
        try{
            setTimeout(resolve, millis);
        }catch(error){
            reject(error);
        }
    })
 }
 
 /** 
  * let t = Date.now()
  * sleep(100).then(() => console.log(Date.now() - t)) // 100
  */