import apiClient from "./axois";
export async function imageUplode(creds) {
  let imageUpload = await apiClient.post("/upload_image", creds);
  return imageUpload.data.result;
}
