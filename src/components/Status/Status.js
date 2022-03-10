// const loadStatus=()=>"success - ready";
// const loadStatus=()=>{
//     console.log("load status")
//     // throw new Promise(resolve => null)
//     throw new Promise(resolves => setTimeout(resolves,3000))
// }

const loadStatus = (function () {
  let error, response;
  const promise = new Promise((resolves) => setTimeout(resolves, 3000))
    // .then(() => (response => "success"))
    .then(() => () => 'success')
    .catch((e) => (error = e));

  return function () {
    if (error) throw error;
    if (response) return response;
    throw promise;
  };
})();

// const resource=createResourse(promise)
// const result=resource.read()

export function createResource(pending) {
  let error, response;
  pending.then((r) => (response = r)).catch((e) => (error = e));
  return {
    read() {
      if (error) throw error;
      if (response) return response;
      throw pending;
    },
  };
}

// safe(loadStatus)

/*function safe(fn) {
    try{
        fn()
    }catch(error){
        if(error instanceof Promise){
            error.then(()=>safe(fn))
        } else {
            throw error
        }
    }
}*/

export function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
  // throw new Error("Something went wrong")
}
