interface FolderLinksData {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface FolderOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderData {
  count: number;
  id: number;
  links: FolderLinksData[];
  name: string;
  owner: FolderOwnerData;
}

interface UserProfileData {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}
