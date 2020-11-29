import React from 'react'
import '../App.css';
import { Image,Icon,Grid, Header, Button, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import CardLoader from "../components/CardLoader"

const HomePage = () => {
    return (
        <>
        <Message
            size="huge"
            color="teal"
            floating
            header={<Header>Have you heard about our Instagram Profile?</Header>}
            content={
                <>
                    <p>Get the best news in your Instagram every couple of hour.</p>
                    <Button color="red" style={{padding:5}} size="huge">
                        <Icon size="large" style={{padding:0, margin:0}} name="instagram">
                        </Icon>
                        Go to Instagram
                        </Button>
                </>
            }
        />
         <Grid columns={2}>
            <Grid.Column>
            <Image
                fluid
                label={{
                as: 'a',
                color: 'red',
                content: 'News',
                icon: 'newspaper',
                ribbon: true,
                }}
                src='https://c.files.bbci.co.uk/74E8/production/_112482992__111703877_gettyimages-1128870980.jpg'
            />
            </Grid.Column>

            <Grid.Column>
            <Image
                fluid
                label={{
                as: 'a',
                color: 'green',
                content: 'Technology',
                icon: 'mobile alternate',
                ribbon: true,
                }}
                src='https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
            />
            </Grid.Column>
        </Grid>
        </>
    );
   }

export default HomePage;
