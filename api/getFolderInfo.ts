import axios from "@/api/axios";

export default async function getFolderInfo() {
  const response = await axios.get("/sample/folder");
  const result = response.data;
  return result;
}
