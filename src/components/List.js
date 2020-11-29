import React from 'react'

import {gql} from 'apollo-boost' 
import {useQuery} from 'react-apollo';

import { Advertisement, Grid, Card, Icon, Image} from 'semantic-ui-react'

import logo from '../assets/logo.png'

import '../App.css';

import CardLoader from './CardLoader'


const GET_ARTICLES_QUERY = gql`
    query Articles($activeItem: String!) {
        articles(search: $activeItem){
            edges{
                node{
                    id
                    img
                    titleEn
                    chotoEn
                }
            }
        }
    }
 `

const ListFilter = ({lists}) => {
    return (
        <>
        <Grid stackable centered>
            <Grid.Row centered columns={2}>
            { lists && lists.map((article, index) => ( 
                <>
                <Grid.Column width={5}>
                    <Card centered fluid link>
                        <Image src={article.node.img} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{article.node.titleEn}</Card.Header>
                        <Card.Meta>{index}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            10 Friends
                        </a>
                        </Card.Content>
                    </Card>
                </Grid.Column> 
                <>
                    {
                        (index % 5 == 0)
                        ? (
                            <Grid.Column width={5}>
                                <Advertisement unit='large rectangle' test='Google Ads here.' centered />
                            </Grid.Column>
                        )
                        : null
                        
                    }
                </>
                </>
            ))}
            </Grid.Row>
        </Grid>
     </>
    )
}

const List = ({activeItem, setActiveItem}) =>  {

    const { loading, error, data } = useQuery(GET_ARTICLES_QUERY, {
        variables: { activeItem }
    })

    if (loading) return <CardLoader />
    if (error) return 'error...'
    
    setActiveItem(activeItem)
    console.log(activeItem)

    return(
            
            <ListFilter lists={data.articles.edges} />
        )
   
    }

  
export default List;