/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createContenet = /* GraphQL */ `
  mutation CreateContenet(
    $input: CreateContenetInput!
    $condition: ModelContenetConditionInput
  ) {
    createContenet(input: $input, condition: $condition) {
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
export const updateContenet = /* GraphQL */ `
  mutation UpdateContenet(
    $input: UpdateContenetInput!
    $condition: ModelContenetConditionInput
  ) {
    updateContenet(input: $input, condition: $condition) {
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
export const deleteContenet = /* GraphQL */ `
  mutation DeleteContenet(
    $input: DeleteContenetInput!
    $condition: ModelContenetConditionInput
  ) {
    deleteContenet(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
