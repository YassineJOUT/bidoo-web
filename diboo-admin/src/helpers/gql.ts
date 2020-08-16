import { gql } from "apollo-boost";

export const USER_LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      ok
      error
      data {
        id
      }
    }
  }
`;

export const ADD_CAROUSEL_MUTATION = gql`
mutation createCarousel($id: String,$title: String,$subtitle: String, $bannerLink: String,$image: Upload) {
    createCarousel(input:{id: $id,title: $title,subtitle: $subtitle, bannerLink: $bannerLink,image:$image}){
        ok,
        message,
        error
    }
  }
`;
export const EDIT_CAROUSEL_STATUS_MUTATION = gql`
mutation editStatusCarousel($id: String,$status: Boolean) {
    editStatusCarousel(input:{id: $id,status: $status}){
        ok,
        message,
        error
    }
  }
`;
export const DELETE_MUTATION_MUTATION = gql`
mutation deleteCarousel($id: String!) {
    deleteCarousel(id: $id){
        ok,
        message,
        error
    }
  }
`;

export const GET_CAROUSELS_MUTATION = gql`
  {
    getCarousels {
      ok
      data {
        id
        title
        subtitle
        bannerLink
        status
        imagePath
      }
      error
    }
  }
`;
export const GET_CAROUSEL_MUTATION = gql`
  query getCarousel($id: String!) {
    getOneCarousel(id: $id) {
      ok
      data {
        id
        title
        subtitle
        bannerLink
        status
        imagePath
      }
      error
    }
  }
`;

export const ADD_RESTAURANT_MUTATION = gql`
mutation createRestaurant(
  $name: String
  $website: String
  $phone: String
  $postCode: String
  $email: String
  $address: String
  $city: String
  $about: String
  $delivery: Boolean
  $pickUp: Boolean
  $dineIn: Boolean
  $estimatedTime: String
  $commission: Float
  $image: Upload
) {
  createRestaurant(
    input: {
      name: $name
      website: $website
      phone: $phone
      postCode: $postCode
      email: $email
      address: $address
      city: $city
      estimatedTime: $estimatedTime
      about: $about
      delivery: $delivery
      pickUp: $pickUp
      dineIn: $dineIn
      commission: $commission
      image: $image
    }
  ) {
    ok
  }
}
`;
export const GET_RESTAURANTS_MUTATION = gql`
  {
    getRestaurants {
      ok
      data {
        id
        city
        name
        phone
        status
        imagePath
      }
      error
    }
  }
`;
export const GET_RESTAURANT_MUTATION = gql`
  query getRestaurant($id: String!) {
    getOneRestaurant(id: $id) {
      ok
      data {
        id
        status
        name
        website
        phone
        postCode
        email
        address
        city
        estimatedTime
        about
        delivery
        pickUp
        dineIn
        commission
        imagePath
      }
      error
    }
  }
`;

export const DELETE_RESTAURANT_MUTATION = gql`
  mutation deleteRestaurant($id: String!) {
    response
  }
`;

export const UPDATE_RESTAURANT_MUTATION = gql`
  mutation updateRestaurant(
    $id: String!
    $restaurantName: String
    $restaurantWebsite: String
    $restaurantPhone: String
    $postCode: String
    $email: String
    $address: String
    $city: String
    $restaurantLogo: String
    $about: String
    $delivery: Boolean
    $pickUp: Boolean
    $dineIn: Boolean
    $estimatedDeliveryTime: String
    $commission: String
    $imagePath: String!
  ) {
    updateRestaurant(
      input: {
        id: $id
        name: $restaurantName
        website: $restaurantWebsite
        phone: $restaurantPhone
        postCode: $postCode
        email: $email
        address: $address
        city: $city
        estimatedTime: $estimatedDeliveryTime
        about: $about
        delivery: $delivery
        pickUp: $pickUp
        dineIn: $dineIn
        commission: $commission
        imagePath: $imagePath
      }
    ) {
      reponse
    }
  }
`;

export const EDIT_RESTAURANT_STATUS_MUTATION = gql`
  mutation updateRestaurant($id: String!, $status: boolean!) {
    updateRestaurantStatus(id: $id, status: $status) {
      reponse
    }
  }
`;
