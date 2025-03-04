import { JWT } from "next-auth/jwt";

export type SpotifyArtistData = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  genres: string[];
};

export type EventData = {
  title: string;
  url: string;
  venue: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  dateTime: Date;
};

export type FinalArtistData = {
  userIDs: string[];
  artistId: string;
  name: string;
  image: string;
  genres: string[]
};

declare module "next-auth" {
  interface User {}

  interface Account {}

  interface Session {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
  }
}
