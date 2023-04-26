import { User } from "./user";

/**
 *  Partial<Type>
 *  Constructs a type with all properties of Type set to optional
 * This utility will return a type that represents all subsets of a given type
 * 
 */

type UserPartial = Partial<User>;
type UserPartialNameRequired = Partial<User> & {name: string};

const obj : UserPartialNameRequired = {
    name: 'Hi'
}

/**
 * Required<Type>
 * constructs a type consisting of all properties of type set to required. The opposite of partial
 */

type UserRequired = Required<User>;
type UserRequiredNameOptional = Required<User> & {name?: string};

const obj2 : UserRequiredNameOptional = {
    name:'A',
    email:'B',
    password:'C',
    age:12,
    phone:'1111',
    address:'D',
    city:'E'
}

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  
  interface ArtworksData {
    artworks: { title: string }[];
  }
  
  interface ArtistsData {
    artists: { name: string }[];
  }
  
  // These interfaces are composed to have
  // consistent error handling, and their own data.
  
  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;
  

  const res1 : ArtistsResponse = {
    artists:[{name:'Artist 1'}],
    success: true,
  }