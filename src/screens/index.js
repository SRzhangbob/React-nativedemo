/* /src/screens/index.js */
import React from "react"
import Screen from "./Screen"
export {default as HomeScreen} from "./home"
export {default as ProfileScreen} from "./profile"

export const SearchScreen = ()=><Screen name = "Search"/>
export const FavouritesScreen = ()=><Screen name = "Favourite"/>
// export const ProfileScreen = ()=><Screen name = "Profile"/>;
