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
    }
  }
`;
