import React from 'react'
import '../App.css';
import {gql} from 'apollo-boost'
import {useQuery} from 'react-apollo';
import { Link } from 'react-router-dom';

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const GET_CATEGORIES = gql`
    query{
      categories{
        id
        name
        theme
      }
    }
 `

const ModalView = ({open, setOpen}) => {

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return 'loading...'
    if (error) return 'error...'

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={
                <Button color="black" style={{alignItems:'center',padding:10,margin:0,float:'right'}} >
                <Icon style={{alignItems:'center',padding:0,margin:0}} name="th list" />
                </Button>
            }
            >
            <Header dividing style={{textAlign:'center'}} as='a' >
                Menu
            </Header>

            {data.categories.map((c)=>(
                <Header
                    as={Link}
                    to={c.name}
                    style={{textAlign:'center'}}
                    size="large"
                    onClick={()=>setOpen(false)}
                    >
                        {c.name}
                    </Header>
            ))}   

            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> Close
                </Button>
            </Modal.Actions>
    </Modal>
    );
   }

export default ModalView;
