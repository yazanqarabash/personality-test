import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";

const url = import.meta.env.VITE_API_URL;
const simulatedDelay = 600;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getQuestions() {
  return delay(simulatedDelay)
    .then(() => axios.get(`${url}/questions`))
    .then(handleResponse)
    .catch(handleError);
}

export function saveAnswer(result) {
  return delay(simulatedDelay).then(() => axios.post(`${url}/results`, result));
}

export function getResults() {
  return delay(simulatedDelay)
    .then(() => axios.get(`${url}/results`))
    .then(handleResponse)
    .catch(handleError);
}

export function deleteResults(resultId) {
  return delay(simulatedDelay).then(() =>
    axios.delete(`${url}/results/${resultId}`)
  );
}
