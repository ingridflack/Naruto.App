import { gql } from "@apollo/client";
import client from "../../apollo-client";

export const getAllVillages = () => {
  return client.query({
    query: gql`
      query Villages {
        villages {
          results {
            _id
            name
          }
        }
      }
    `,
  });
};

export const getAllClans = () => {
  return client.query({
    query: gql`
      query Clans {
        clans {
          results {
            name
            description
            avatarSrc
            village
          }
        }
      }
    `,
  });
};

export const getAllCharacters = () => {
  return client.query({
    query: gql`
      query Characters {
        characters {
          info {
            count
            pages
            next
            prev
          }
          results {
            _id
            name
            avatarSrc
            description
            rank
            village
          }
        }
      }
    `,
  });
};
