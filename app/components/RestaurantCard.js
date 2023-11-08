import { useContext} from "react"
import { Box, Image, Heading, Text, Pressable } from '@gluestack-ui/themed'
import {router} from 'expo-router'
import { RestaurantContext } from "../_layout"
export default function RestaurantCard({ restaurant }) {
    const {setThisRest} = useContext(RestaurantContext)
    const showDetails = () => {
    setThisRest(restaurant)// putting restaurant data into context
    router.push("/details")// navigate to details page
}
setThisRest

return (
        
            <Pressable onPress={showDetails}>
        <Box
            bgColor='$backgroundLight50'
            p={12}
            mb={16}
            rounded='$xl'>
                
            <Image 
            w="$full"
            h={160}
            bgColor='$backgroundlight50'
            alt={ restaurant.name}
            source={{ uri: restaurant.photo_url }} 
            />
            <Heading>{restaurant.name}</Heading>
            <Text>{restaurant.address}</Text>
        </Box>
            </Pressable>    
            
    )
}