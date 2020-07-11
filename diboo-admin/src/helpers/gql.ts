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
mutation createCarousel($id: String,$title: String,$subtitle: String, $bannerLink: String,$image: Upload) {
    createCarousel(input:{id: $id,title: $title,subtitle: $subtitle, bannerLink: $bannerLink,image:$image}){
        ok
    }
  }
`;
export const DELETE_MUTATION_MUTATION = gql`
mutation deleteCarousel($id: String!) {
    deleteCarousel(id: $id){
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