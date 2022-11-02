import apiClient from "./axois";
export async function imageUplode(creds) {
  let imageUpload = await apiClient.post("/api/v1/auth/upload", creds);
  return imageUpload.data.result;
}
