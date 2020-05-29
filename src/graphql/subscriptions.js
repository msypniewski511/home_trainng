/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String!) {
    onCreateProduct(owner: $owner) {
      id
      title
      description
      contents {
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String!) {
    onUpdateProduct(owner: $owner) {
      id
      title
      description
      contents {
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String!) {
    onDeleteProduct(owner: $owner) {
      id
      title
      description
      contents {
        nextToken
      }
      owner
    }
  }
`;
export const onCreateContenet = /* GraphQL */ `
  subscription OnCreateContenet {
    onCreateContenet {
      id
      position
      queryName
      product {
        id
        title
        description
        owner
      }
      photos {
        nextToken
      }
    }
  }
`;
export const onUpdateContenet = /* GraphQL */ `
  subscription OnUpdateContenet {
    onUpdateContenet {
      id
      position
      queryName
      product {
        id
        title
        description
        owner
      }
      photos {
        nextToken
      }
    }
  }
`;
export const onDeleteContenet = /* GraphQL */ `
  subscription OnDeleteContenet {
    onDeleteContenet {
      id
      position
      queryName
      product {
        id
        title
        description
        owner
      }
      photos {
        nextToken
      }
    }
  }
`;
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
      id
      caption
      position
      photoContentId
      content {
        id
        position
        queryName
      }
      bucket
      fullsize {
        key
        width
        height
      }
    }
  }
`;
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
      id
      caption
      position
      photoContentId
      content {
        id
        position
        queryName
      }
      bucket
      fullsize {
        key
        width
        height
      }
    }
  }
`;
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
      id
      caption
      position
      photoContentId
      content {
        id
        position
        queryName
      }
      bucket
      fullsize {
        key
        width
        height
      }
    }
  }
`;
