import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const createData = http.get("http://localhost:8080", () => {
  return HttpResponse.json({ status: 200 });
})

export const worker = setupWorker(createData);