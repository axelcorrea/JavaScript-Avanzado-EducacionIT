export function handleJsonResponse(responseFetch){
  if(!responseFetch.ok) {
    throw new Error("Error de ajax");
  }
  return responseFetch.json();
}

export function handleBlobResponse(responseFetch){
  if(!responseFetch.ok) {
    throw new Error("Error de ajax");
  }
  return responseFetch.blob();
}

export function handleFetchError(err){
  console.error(err);
}