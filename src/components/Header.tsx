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
            <div data-intercom-target='header'>
                <Center bg='black' h='100px'>
                    <Menu>
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            <GridItem w='100%' h='10' bg='orange.300'>
                                <MenuItem as={Link} to="/">Index</MenuItem>
                            </GridItem>
                            <div data-intercom-target='menu-list'>
                            <GridItem w='100%' h='10' bg='orange.300'>
                                <MenuItem as={Link} to="/list">Mod list</MenuItem>
                            </GridItem>
                            </div>
                            <div data-intercom-target='menu-intercom'>
                            <GridItem w='100%' h='10' bg='orange.300'>
                                <MenuItem as={Link} to="/intercom">Intercom test</MenuItem>
                            </GridItem>
                            </div>
                            <div data-intercom-target='menu-wrong'>
                            <GridItem w='100%' h='10' bg='orange.300'>
                                <MenuItem as={Link} to="/wronglink">Wrong link</MenuItem>
                            </GridItem>
                            </div>
                        </Grid>
                    </Menu>
                </Center>
            </div>
      );
    }
  }