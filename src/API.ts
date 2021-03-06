/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  owner?: string | null,
  relation?: string | null,
  title: string,
  text: string,
  media: string,
  mediaType?: string | null,
  externalLink?: string | null,
  createdAt?: string | null,
  isPublic?: boolean | null,
  pdfFile?: string | null,
  updatedAt?: string | null,
  latitude?: string | null,
  longitude?: string | null,
};

export type ModelPostConditionInput = {
  relation?: ModelStringInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  media?: ModelStringInput | null,
  mediaType?: ModelStringInput | null,
  externalLink?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  pdfFile?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id?: string,
  owner?: string | null,
  relation?: string | null,
  title?: string,
  text?: string,
  media?: string,
  mediaType?: string | null,
  externalLink?: string | null,
  createdAt?: string | null,
  isPublic?: boolean | null,
  pdfFile?: string | null,
  updatedAt?: string | null,
  latitude?: string | null,
  longitude?: string | null,
};

export type UpdatePostInput = {
  id: string,
  owner?: string | null,
  relation?: string | null,
  title?: string | null,
  text?: string | null,
  media?: string | null,
  mediaType?: string | null,
  externalLink?: string | null,
  createdAt?: string | null,
  isPublic?: boolean | null,
  pdfFile?: string | null,
  updatedAt?: string | null,
  latitude?: string | null,
  longitude?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  relation?: ModelStringInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  media?: ModelStringInput | null,
  mediaType?: ModelStringInput | null,
  externalLink?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  pdfFile?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    relation?: string | null,
    title: string,
    text: string,
    media: string,
    mediaType?: string | null,
    externalLink?: string | null,
    createdAt?: string | null,
    isPublic?: boolean | null,
    pdfFile?: string | null,
    updatedAt?: string | null,
    latitude?: string | null,
    longitude?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    relation?: string | null,
    title: string,
    text: string,
    media: string,
    mediaType?: string | null,
    externalLink?: string | null,
    createdAt?: string | null,
    isPublic?: boolean | null,
    pdfFile?: string | null,
    updatedAt?: string | null,
    latitude?: string | null,
    longitude?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    relation?: string | null,
    title: string,
    text: string,
    media: string,
    mediaType?: string | null,
    externalLink?: string | null,
    createdAt?: string | null,
    isPublic?: boolean | null,
    pdfFile?: string | null,
    updatedAt?: string | null,
    latitude?: string | null,
    longitude?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    relation?: string | null,
    title: string,
    text: string,
    media: string,
    mediaType?: string | null,
    externalLink?: string | null,
    createdAt?: string | null,
    isPublic?: boolean | null,
    pdfFile?: string | null,
    updatedAt?: string | null,
    latitude?: string | null,
    longitude?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      owner?: string | null,
      relation?: string | null,
      title: string,
      text: string,
      media: string,
      mediaType?: string | null,
      externalLink?: string | null,
      createdAt?: string | null,
      isPublic?: boolean | null,
      pdfFile?: string | null,
      updatedAt?: string | null,
      latitude?: string | null,
      longitude?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    relation?: string | null,
    title: string,
    text: string,
    media: string,
    mediaType?: string | null,
    externalLink?: string | null,
    createdAt?: string | null,
    isPublic?: boolean | null,
    pdfFile?: string | null,
    updatedAt?: string | null,
    latitude?: string | null,
    longitude?: string | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    relation?: string | null,
    title: string,
    text: string,
    media: string,
    mediaType?: string | null,
    externalLink?: string | null,
    createdAt?: string | null,
    isPublic?: boolean | null,
    pdfFile?: string | null,
    updatedAt?: string | null,
    latitude?: string | null,
    longitude?: string | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    relation?: string | null,
    title: string,
    text: string,
    media: string,
    mediaType?: string | null,
    externalLink?: string | null,
    createdAt?: string | null,
    isPublic?: boolean | null,
    pdfFile?: string | null,
    updatedAt?: string | null,
    latitude?: string | null,
    longitude?: string | null,
  } | null,
};
