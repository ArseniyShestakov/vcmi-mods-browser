import React from 'react';
import { Link } from "react-router-dom";
import {
    Center,
    Grid,
    GridItem,
    Menu,
    MenuItem,
  } from '@chakra-ui/react';

export default class HeaderComponent extends React.Component <{}, {}> {
    render() {
        // <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        return (
            <Center bg='black' h='100px'>
                <Menu>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <GridItem w='100%' h='10' bg='orange.300'>
                            <MenuItem as={Link} to="/">Index</MenuItem>
                        </GridItem>
                        <GridItem w='100%' h='10' bg='orange.300'>
                            <MenuItem as={Link} to="/list">Mod list</MenuItem>
                        </GridItem>
                        <GridItem w='100%' h='10' bg='orange.300'>
                            <MenuItem as={Link} to="/intercom">Intercom test</MenuItem>
                        </GridItem>
                        <GridItem w='100%' h='10' bg='orange.300'>
                        <MenuItem as={Link} to="/wronglink">Wrong link</MenuItem>
                        </GridItem>
                    </Grid>
                </Menu>
            </Center>
      );
    }
  }