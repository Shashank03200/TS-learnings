import { User } from "./user";

/**
 * Omit< Type, Key>
 * Constructs a type by picking all properties from Type and
 * then removing Keys  ( string literal or union of string literal)
 */

type UserProfile = Omit<User, 'password' | 'email'>
interface UserProfileInterface extends Omit<User, 'password' | 'email' >{}

/**
 * Pick <Type, Key>
 * Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
 * 
 */

type UserProfilePick = Pick<User, 'email' | 'phone' | 'name'>;
// interface UserProfilePickInterface extends 