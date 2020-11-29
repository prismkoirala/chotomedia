import React from 'react'
import {Loader, Image, Menu, Button} from 'semantic-ui-react'
import logo from '../assets/logo.png'


import {gql} from 'apollo-boost'
import {useQuery} from 'react-apollo';

import '../App.css';

import { Link } from 'react-router-dom';

const GET_CATEGORIES = gql`
    query{
      categories{
        id
        name
        theme
      }
    }
 `


const Header = ({ activeItem, setActiveItem }) =>  {

  const { loading, error, data } = useQuery(GET_CATEGORIES);
  

  if (loading) return (

      <Menu inverted>
        <Menu.Item >
          <Image src={logo} className="image is-24x24" circular />
        </Menu.Item>
        <Menu.Item >
          <Loader active inline />
        </Menu.Item>
      </Menu>
  );

  if (error) return "error..."
  

  const handleItemClick = (e, {name} ) => {
    setActiveItem(name);
  }
  
  return (
        <Menu inverted>
        <Menu.Item as={Link} to=''>
          <Image src={logo} className="image is-24x24" circular />
        </Menu.Item>
        
        {data.categories.map((c)=>(
          <Menu.Item
            as={Link}
            to={c.name}
            name={c.name}
            active={activeItem === c.name}
            color={c.theme}
            onClick={handleItemClick}
          /> 
        ))}
        

        <Menu.Menu position='right'>
        <Menu.Item>
          <Button as={Link} to="/signin" inverted color='red'>Sign Up</Button>  
        </Menu.Item>
      </Menu.Menu>
      </Menu>
  )
  }
  
export default Header;