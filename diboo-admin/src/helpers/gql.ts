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
  mutation createCarousel(
    $id: String
    $title: String
    $subtitle: String
    $bannerLink: String
    $image: Upload
  ) {
    createCarousel(
      input: {
        id: $id
        title: $title
        subtitle: $subtitle
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
export const EDIT_COMMISSION_MUTATION = gql`
  mutation updateCommission($id: ID, $commission: Float) {
    updateCommission(input: { id: $id, commission: $commission }) {
      ok
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
export const EDIT_CAROUSEL_STATUS_MUTATION = gql`
  mutation editStatusCarousel($id: String, $status: Boolean) {
    editStatusCarousel(input: { id: $id, status: $status }) {
      ok
      message
      error
    }
  }
`;
export const DELETE_CAROUSEL_MUTATION = gql`
  mutation deleteCarousel($id: String!) {
    deleteCarousel(id: $id) {
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
