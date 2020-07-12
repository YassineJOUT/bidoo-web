import { gql } from "apollo-boost";

export const USER_LOGIN_MUTATION = gql`
mutation login($email: String!,$password: String!) {
    login(input:{email: $email,password: $password}){
        ok
        error
        data{
            id
        }
    }
  }
`;

export const ADD_CAROUSEL_MUTATION = gql`
mutation createCarousel($title: String,$subtitle: String, $bannerLink: String,$image: Upload) {
    createCarousel(input:{title: $title,subtitle: $subtitle, bannerLink: $bannerLink,image:$image}){
        ok
    }
  }
`;

export const GET_CAROUSELS_MUTATION = gql`
{
    getCarousels{
        ok,
        data{
            id,
            title,
            subtitle,
            bannerLink,
            status,
            imagePath
            }
            ,
        error
    }
  }
`;
export const GET_CAROUSEL_MUTATION = gql`
query getCarousel($id: String!){
    getOneCarousel(id:$id){
        ok,
        data{
            id,
            title,
            subtitle,
            bannerLink,
            status,
            imagePath
            }
            ,
        error
    }
  }
`;

export const ADD_RESTAURANT_MUTATION = gql`
mutation createRestaurant($restaurantName: String, $restaurantWebsite: String, $restaurantPhone: String, $postCode: String, $email: String, $address: String, $city: String, $restaurantLogo: String, $about: String, $delivery: Boolean, $pickUp: Boolean, $dineIn: Boolean, $estimatedDeliveryTime: String, $commission: String, $imagePath: String!) {
    createRestaurant(input:{name: $restaurantName, website: $restaurantWebsite, phone: $restaurantPhone, postCode: $postCode, email: $email, address: $address, city: $city, estimatedTime: $estimatedDeliveryTime, about: $about, delivery: $delivery, pickUp: $pickUp, dineIn: $dineIn, commission: $commission, imagePath: $imagePath}){
        ok
    }
  }
`;
