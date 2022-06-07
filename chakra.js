import React from "react"
import { useColorModeValue, FormControl, FormLabel, Container, Flex, VStack, Heading, Text, SimpleGrid, GridItem, Select, Checkbox, Button, HStack, AspectRatio, Stack, Divider, Image, useColorMode } from "@chakra-ui/react"

const Radio = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAlpha")
    return ( <
        Container maxWidth = "container.xl"
        padding = { 0 } >
        <
        Flex h = "100vh"
        py = { 10 } >
        <
        VStack w = "full"
        h = "full"
        p = { 10 }
        spacing = { 10 }
        alignItems = "flex-start" >
        <
        VStack spacing = { 3 }
        alignItems = "flex-start" >
        <
        Heading size = "2xl" > Your details < /Heading> <
        Text > If you already have an account, click < /Text> <
        /VStack> <
        SimpleGrid columns = { 2 }
        columnGap = { 3 }
        rowGap = { 6 } >
        <
        GridItem colSpan = { 1 } >
        <
        FormControl >
        <
        FormLabel > First Name < /FormLabel> <
        input placeholder = "john" / >
        <
        /FormControl> <
        /GridItem> <
        GridItem colSpan = { 1 } >
        <
        FormControl >
        <
        FormLabel > Last Name < /FormLabel> <
        input placeholder = "Doe" / >
        <
        /FormControl> <
        /GridItem> <
        GridItem colSpan = { 2 } >
        <
        FormControl >
        <
        FormLabel > Address < /FormLabel> <
        input placeholder = "Goma" / >
        <
        /FormControl> <
        /GridItem> <
        GridItem colSpan = { 1 } >
        <
        FormControl >
        <
        FormLabel > City < /FormLabel> <
        input placeholder = "Goma" / >
        <
        /FormControl> <
        /GridItem> <
        GridItem colSpan = { 1 } >
        <
        FormControl >
        <
        FormLabel > Country < /FormLabel> <
        Select >
        <
        option value = "usa" > Unated States of America < /option> <
        option value = "usa" > Unated States of America < /option> <
        option value = "usa" > Unated States of America < /option> <
        option value = "usa" > Unated States of America < /option> <
        option value = "usa" > Unated States of America < /option> <
        option value = "usa" > Unated States of America < /option> <
        option value = "usa" > Unated States of America < /option> <
        option value = "usa" > Unated States of America < /option> <
        /Select> <
        /FormControl> <
        /GridItem> <
        GridItem colSpan = { 2 } >
        <
        Checkbox defaultChecked > Ship to billing < /Checkbox> <
        /GridItem> <
        GridItem colSpan = { 2 } >
        <
        Button size = "lg"
        w = "full" > Place Order < /Button> <
        /GridItem> <
        /SimpleGrid>   <
        /VStack>


        <
        VStack w = "full"
        h = "full"
        p = { 10 }
        spacing = { 10 }
        alignItems = "flex-start"
        bg = { bgColor } >
        <
        VStack >
        <
        Heading size = "2xl" > Your card < /Heading> <
        Text >
        If the price is too hard on your eyes <
        Button onClick = { toggleColorMode }
        variant = "link"
        colorScheme = "black" >
        try changing the theme <
        /Button> <
        /Text> <
        /VStack> <
        HStack spacing = { 6 }
        alignItems = "center"
        w = "full" >
        <
        AspectRatio ratio = { 1 }
        w = { 24 } >
        <
        Image src = ""
        alt = "the image" / >
        <
        /AspectRatio> <
        Stack spacing = { 0 }
        w = "full"
        direction = "row"
        justifyContent = "space-between"
        alignItems = "center" >

        <
        VStack w = "full"
        spacing = { 0 }
        alignItems = "stretch" >
        <
        Heading size = "md" > Penny board < /Heading> <
        Text color = "gray.600" > PNYCOMPP27541 < /Text> <
        /VStack> <
        Heading size = "sm"
        textAlign = "end" > $119 .00 < /Heading> <
        /Stack> <
        /HStack> <
        VStack spacing = { 4 }
        alignItems = "stretch"
        w = "full" >
        <
        HStack justifyContent = "space-between" >
        <
        Text color = "gray.600" > Subtotal < /Text> <
        Heading size = "sm" > $119 .00 < /Heading> <
        /HStack> <
        HStack justifyContent = "space-between" >
        <
        Text color = "gray.600" > Shipping < /Text> <
        Heading size = "sm" > $119 .00 < /Heading> <
        /HStack> <
        HStack justifyContent = "space-between" >
        <
        Text color = "gray.600" > Taxes(estimated) < /Text> <
        Heading size = "sm" > $119 .00 < /Heading> <
        /HStack> <
        Divider / >
        <
        HStack justifyContent = "space-between" >
        <
        Text color = "gray.600" > Total < /Text> <
        Heading size = "sm" > $119 .00 < /Heading> <
        /HStack> <
        /VStack> <
        /VStack> <
        /Flex> <
        h1 >
        Hello React <
        /h1> <
        /Container>
    )
}

export default Radio;