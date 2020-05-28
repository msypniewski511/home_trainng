/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        owner
      }
      nextToken
    }
  }
`;
export const getContenet = /* GraphQL */ `
  query GetContenet($id: ID!) {
    getContenet(id: $id) {
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
export const listContenets = /* GraphQL */ `
  query ListContenets(
    $filter: ModelContenetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContenets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        position
        queryName
      }
      nextToken
    }
  }
`;
export const productsByTitle = /* GraphQL */ `
  query ProductsByTitle(
    $title: String
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByTitle(
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        owner
      }
      nextToken
    }
  }
`;
