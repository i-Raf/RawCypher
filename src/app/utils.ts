export function getFromLocalStorage(key: string){
  if (typeof window !== 'undefined') {
    const dataExists: string | null =
    localStorage.getItem(key);
  if (dataExists) {
    const data = JSON.parse(dataExists);
    return data;
  }
  }
}