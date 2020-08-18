import { gql } from "apollo-boost";
/***
 * LOGIN
 */
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
/***
 * CAROUSEL
 */
// add or edit
export const ADD_OR_EDIT_CAROUSEL_MUTATION = gql`
  mutation createOrEditCarousel(
    $id: String
    $title: String
    $subtitle: String
    $status: Boolean
    $bannerLink: String
    $image: Upload
  ) {
    createOrEditCarousel(
      input: {
        id: $id
        title: $title
        subtitle: $subtitle
        status: $status
        bannerLink: $bannerLink
        image: $image
      }
    ) {
      ok
      message
      error
    }
  }
`;
// get one
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
// get all
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
// delete
export const DELETE_CAROUSEL_MUTATION = gql`
  mutation deleteCarousel($id: String!) {
    deleteCarousel(id: $id) {
      ok
      message
      error
    }
  }
`;
/***
 * SETTINGS
 */

export const GET_SITE_SETTING_MUTATION = gql`
  {
    getSetting {
      ok
      data {
        id
        adminName
        adminEmail
        supportEmail
        invoiceEmail
        sitePhone
        siteName
        siteLogo
        siteFavIcon
        adminPage
        userPage
        offlineStatus
        offlineNote
        currencySymbol
        headerText
        googleAnalyticCode
        siteMetaTagTitle
        siteMetaTagKeyword
        siteMetaTagDescription
        facebook
        twitter
        linkedin
        youtube
        instagram
        tax
        address
        city
        country
        postCode
      }
      message
      error
    }
  }
`;

export const EDIT_SITESETTING_MUTATION = gql`
  mutation updateSiteSetting(
    $id: ID
    $adminName: String
    $adminEmail: String
    $supportEmail: String
    $invoiceEmail: String
    $sitePhone: String
    $siteName: String
    $siteLogo: String
    $siteFavIcon: String
    $adminPage: String
    $userPage: String
    $offlineStatus: Boolean
    $offlineNote: String
    $currencySymbol: String
    $headerText: String
    $googleAnalyticCode: String
    $siteMetaTagTitle: String
    $siteMetaTagKeyword: String
    $siteMetaTagDescription: String
    $facebook: String
    $twitter: String
    $linkedin: String
    $youtube: String
    $instagram: String
    $tax: Float
    $address: String
    $city: String
    $country: String
    $postCode: String
  ) {
    updateSiteSetting(
      input: {
        id: $id
        adminName: $adminName
        adminEmail: $adminEmail
        supportEmail: $supportEmail
        invoiceEmail: $invoiceEmail
        sitePhone: $sitePhone
        siteName: $siteName
        siteLogo: $siteLogo
        siteFavIcon: $siteFavIcon
        adminPage: $adminPage
        userPage: $userPage
        offlineStatus: $offlineStatus
        offlineNote: $offlineNote
        currencySymbol: $currencySymbol
        headerText: $headerText
        googleAnalyticCode: $googleAnalyticCode
        siteMetaTagTitle: $siteMetaTagTitle
        siteMetaTagKeyword: $siteMetaTagKeyword
        siteMetaTagDescription: $siteMetaTagDescription
        facebook: $facebook
        twitter: $twitter
        linkedin: $linkedin
        youtube: $youtube
        instagram: $instagram
        tax: $tax
        address: $address
        city: $city
        country: $country
        postCode: $postCode
      }
    ) {
      ok
      message
      error
    }
  }
`;

/***
 * COMMISSION
 */
export const EDIT_COMMISSION_MUTATION = gql`
  mutation updateCommission($id: ID, $commission: Float) {
    updateCommission(input: { id: $id, commission: $commission }) {
      ok
      message
      error
    }
  }
`;
export const GET_COMMISSION_SETTING_MUTATION = gql`
  {
    getCommission {
      ok
      data {
        id
        commission
      }
      message
      error
    }
  }
`;
/***
 * KITCHEN
 */
export const ADD_OR_EDIT_KITCHEN_MUTATION = gql`
  mutation createOrUpdateKitchen(
    $id: String
    $kitchenName: String
    $description: String
    $status: Boolean
    $popular: Boolean
    $image: Upload
  ) {
    createOrUpdateKitchen(
      input: {
        id: $id
        kitchenName: $kitchenName
        description: $description
        status: $status
        popular: $popular
        image: $image
      }
    ) {
      ok
      message
      error
    }
  }
`;
export const DELETE_KICHEN_MUTATION = gql`
  mutation deleteKitchen($id: String!) {
    deleteKitchen(id: $id) {
      ok
      message
      error
    }
  }
`;

export const GET_KITCHENS_MUTATION = gql`
  {
    getKitchens {
      ok
      data {
        id
        kitchenName
        description
        popular
        status
        imagePath
        createdAt
      }
      error
    }
  }
`;
/**
 * ITEMS
 */
export const ADD_OR_EDIT_MENUITEM_MUTATION = gql`
  mutation createOrUpdateItem(
    $id: String
    $itemName: String
    $description: String
    $status: Boolean
    $popular: Boolean
    $instruction: Boolean
    $price: Float
    $image: Upload
    $category: ID
  ) {
    createOrUpdateItem(
      input: {
        id: $id
        itemName: $itemName
        description: $description
        status: $status
        popular: $popular
        price: $price
        instruction: $instruction
        image: $image
        category: $category
      }
    ) {
      ok
      message
      error
    }
  }
`;
export const DELETE_MENUITEM_MUTATION = gql`
  mutation deleteItem($id: String!) {
    deleteItem(id: $id) {
      ok
      message
      error
    }
  }
`;

export const GET_MENUITEMS_MUTATION = gql`
  {
    getItems {
      ok
      data {
        id
        itemName
        description
        status
        imagePath
        createdAt
        price
        instruction
        popular
        category
      }
      error
    }
    getCategories {
      ok
      error
      data {
        id
        categoryName
      }
    }
  }
`;
/**
 * CATEGORIES
 */
export const ADD_OR_EDIT_MENUCATEGORY_MUTATION = gql`
  mutation createOrUpdateCategory(
    $id: String
    $categoryName: String
    $description: String
    $status: Boolean
    $image: Upload
  ) {
    createOrUpdateCategory(
      input: {
        id: $id
        categoryName: $categoryName
        description: $description
        status: $status
        image: $image
      }
    ) {
      ok
      message
      error
    }
  }
`;
export const DELETE_MENUCATEGORY_MUTATION = gql`
  mutation deleteCategory($id: String!) {
    deleteCategory(id: $id) {
      ok
      message
      error
    }
  }
`;

export const GET_MENUCATEGORIES_MUTATION = gql`
  {
    getCategories {
      ok
      data {
        id
        categoryName
        description
        status
        imagePath
        createdAt
      }
    }
  }
`;

export const ADD_OR_EDIT_RESTAURANT_MUTATION = gql`
mutation addOrEditRestaurant(
  $id: ID
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
  addOrEditRestaurant(
    input: {
      id: $id
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
    error
    message
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
mutation updateRestaurantStatus($id: String!, $status: Boolean!) {
  updateRestaurantStatus(id: $id, status: $status) {
    ok
    message
    error
  }
}
`;
