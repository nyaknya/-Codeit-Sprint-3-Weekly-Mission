const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

async function getUserInfo() {
  const response = await fetch(`${API_BASE_URL}/sample/user`);
  const result = await response.json();
  return result;
}

async function getFolderInfo() {
  const response = await fetch(`${API_BASE_URL}/sample/folder`);
  const result = await response.json();
  return result;
}

async function getFolderUserInfo() {
  const response = await fetch(`${API_BASE_URL}/users/1`);
  const result = await response.json();
  return result;
}

async function getFolderFilterKeywords() {
  const response = await fetch(`${API_BASE_URL}/users/1/folders`);
  const result = await response.json();
  return result;
}

async function getAllFolderLinks() {
  const response = await fetch(`${API_BASE_URL}/users/1/links`);
  const result = await response.json();
  return result;
}

async function getFolderLinks(id) {
  const response = await fetch(`${API_BASE_URL}/users/1/links?folderId=${id}`);
  const result = await response.json();
  return result;
}

export {
  getUserInfo,
  getFolderInfo,
  getFolderUserInfo,
  getFolderFilterKeywords,
  getAllFolderLinks,
  getFolderLinks,
};
